import HomePageConfig from '../models/HomePageConfig.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialHomePageData, initialSectionsOrder } from '../utils/initialHomePageData.js';

// Deep clone helper
const cloneData = (data) => JSON.parse(JSON.stringify(data));

// Synchronize sections list helper
const buildSectionsList = (sectionsOrder = [], sections = {}) => {
  return sectionsOrder.map((key, index) => {
    const sec = sections[key] || {};
    return {
      sectionKey: key,
      name: sec.title || sec.name || key,
      order: index + 1,
      isEnabled: sec.isVisible !== false && sec.isEnabled !== false,
      content: sec
    };
  });
};

// In-memory runtime cache initialized with full default data
let memoryHomeData = {
  sectionsOrder: cloneData(initialSectionsOrder),
  sections: cloneData(initialHomePageData.sections),
  sectionsList: buildSectionsList(initialSectionsOrder, initialHomePageData.sections)
};

/**
 * Helper to ensure a valid config document exists in MongoDB or fallback to memory
 */
const getOrCreateConfig = async () => {
  try {
    let config = await HomePageConfig.findOne({ pageKey: 'home' });
    if (!config) {
      const defaultSectionsList = buildSectionsList(
        initialHomePageData.sectionsOrder || initialSectionsOrder,
        initialHomePageData.sections
      );
      config = await HomePageConfig.create({
        pageKey: 'home',
        sectionsOrder: initialHomePageData.sectionsOrder || initialSectionsOrder,
        sections: initialHomePageData.sections,
        sectionsList: defaultSectionsList
      });
    } else {
      // Auto-migrate legacy DB entries: replace USA with Germany office if present
      const currentOffices = config?.sections?.footerSection?.offices;
      if (Array.isArray(currentOffices)) {
        const hasUSA = currentOffices.some(o => (o.country || '').toLowerCase() === 'usa' || o.id === 'office_us');
        const hasGermany = currentOffices.some(o => (o.country || '').toLowerCase().includes('german'));
        if (hasUSA || !hasGermany) {
          if (!config.sections.footerSection) config.sections.footerSection = {};
          config.sections.footerSection.offices = initialHomePageData.sections.footerSection.offices;
          config.markModified('sections');
          await config.save();
        }
      }
    }
    return config;
  } catch (error) {
    // If MongoDB is offline or unavailable, return null to use memory cache
    return null;
  }
};

/**
 * Format payload for API response with unified properties
 */
const formatHomeResponse = (sectionsOrder, sections) => {
  const baseOrder = Array.isArray(sectionsOrder) && sectionsOrder.length > 0
    ? [...sectionsOrder]
    : [...initialSectionsOrder];

  // Dynamically ensure every section from initialSectionsOrder is included
  initialSectionsOrder.forEach((key) => {
    if (!baseOrder.includes(key)) {
      baseOrder.push(key);
    }
  });

  const secs = {
    ...initialHomePageData.sections,
    ...(sections && typeof sections === 'object' ? sections : {})
  };

  if (secs.featuredInLogosGrid && (secs.featuredInLogosGrid.title === 'Featured In Leading Global Publications' || secs.featuredInLogosGrid.title === 'Featured In')) {
    secs.featuredInLogosGrid.title = 'We Have Been Featured In';
  }

  if (secs.footerSection) {
    if (!secs.footerSection.salesContact) secs.footerSection.salesContact = {};
    secs.footerSection.salesContact.phoneIndia = '+91 7069370629';
    secs.footerSection.salesContact.phoneUS = '';
    secs.footerSection.salesContact.email = 'contact@firevy.co';

    if (!secs.footerSection.careerContact) secs.footerSection.careerContact = {};
    secs.footerSection.careerContact.phone = '+91 7069370623';
    secs.footerSection.careerContact.phone1 = '+91 7069370623';
    secs.footerSection.careerContact.phone2 = '+91 7069370627';
    secs.footerSection.careerContact.email = 'careers@firevy.co';

    if (Array.isArray(secs.footerSection.offices)) {
      secs.footerSection.offices = secs.footerSection.offices.map((office, idx) => {
        const cLower = (office.country || '').toLowerCase();
        if (office.id === 'office_us' || cLower === 'usa' || cLower.includes('united states') || (idx === 1 && !cLower.includes('germany'))) {
          return {
            id: 'office_de',
            country: 'Germany',
            flag: '/images/germany_office.svg',
            address: 'walter meckauer str 11, 90478 nurenberg'
          };
        }
        let addr = office.address;
        let flag = office.flag;
        if (cLower.includes('india') || idx === 0 || (addr && addr.includes('Ganesh Meridian'))) {
          addr = '2nd Floor , Opp. Vishal Nagar Society , Katargam, Surat - 395004';
          flag = '/images/india_office.svg';
        } else if (cLower.includes('germany') || cLower.includes('germeny') || idx === 1) {
          addr = 'walter meckauer str 11, 90478 nurenberg';
          flag = '/images/germany_office.svg';
        } else if (cLower.includes('uae') || cLower.includes('dubai') || (addr && (addr.includes('Ghoroob') || addr.includes('Mirdif')))) {
          addr = '1st Floor 105, Ahli Residence Near by Al Shaab Colony HOR AL ANZ , Dubai';
          flag = '/images/uae_office.svg';
        } else if (cLower.includes('aus')) {
          addr = 'U 2B 305 Harborne Street, Glendalough 6016 WA';
          flag = '/images/aus_office.svg';
        } else if (cLower.includes('uk') || cLower.includes('kingdom')) {
          addr = '42 Audley Avenue, Gillingham, ME73AY United Kingdom';
          flag = '/images/uk_office.svg';
        } else if (cLower.includes('canada')) {
          addr = '111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8';
          flag = '/images/canada_office.svg';
        }
        return { ...office, address: addr, flag: flag || office.flag };
      });
    }
  }

  const list = buildSectionsList(baseOrder, secs);

  return {
    sectionsOrder: baseOrder,
    sections: secs,
    sectionsList: list
  };
};

/**
 * @desc Get public Home Page data (for Home.jsx)
 * @route GET /api/v1/home-page
 * @access Public
 */
export const getHomePageData = asyncHandler(async (req, res) => {
  try {
    const config = await getOrCreateConfig();
    if (config) {
      const responseData = formatHomeResponse(config.sectionsOrder, config.sections);
      return successResponse(res, 'Home page data retrieved successfully', responseData);
    }
  } catch {
    // Fall through to memory
  }

  return successResponse(res, 'Home page data retrieved from cache', memoryHomeData);
});

/**
 * @desc Get all 22 Home Page sections for admin management
 * @route GET /api/v1/home-page/admin
 * @access Private/Admin
 */
export const getHomePageAdmin = asyncHandler(async (req, res) => {
  try {
    const config = await getOrCreateConfig();
    if (config) {
      const responseData = formatHomeResponse(config.sectionsOrder, config.sections);
      return successResponse(res, 'Home page admin configuration retrieved', responseData);
    }
  } catch {
    // Fall through to memory
  }

  return successResponse(res, 'Home page admin configuration retrieved from cache', memoryHomeData);
});

/**
 * @desc Get single section by key
 * @route GET /api/v1/home-page/section/:key or /api/v1/home-page/sections/:key
 * @access Public/Admin
 */
export const getSectionByKey = asyncHandler(async (req, res) => {
  const { key } = req.params;

  try {
    const config = await getOrCreateConfig();
    if (config && config.sections && config.sections[key]) {
      return successResponse(res, `Section '${key}' retrieved successfully`, config.sections[key]);
    }
  } catch {
    // Fall through to memory
  }

  if (memoryHomeData.sections && memoryHomeData.sections[key]) {
    return successResponse(res, `Section '${key}' retrieved from cache`, memoryHomeData.sections[key]);
  }

  if (initialHomePageData.sections && initialHomePageData.sections[key]) {
    return successResponse(res, `Section '${key}' retrieved from initial defaults`, initialHomePageData.sections[key]);
  }

  return errorResponse(res, `Section '${key}' not found`, 404);
});

/**
 * @desc Update a section's content and metadata
 * @route PUT /api/v1/home-page/section/:key or /api/v1/home-page/sections/:key
 * @access Private/Admin
 */
export const updateSectionContent = asyncHandler(async (req, res) => {
  const { key } = req.params;
  const sectionData = req.body;

  if (!sectionData || typeof sectionData !== 'object') {
    return errorResponse(res, 'Section data payload is required', 400);
  }

  try {
    const config = await getOrCreateConfig();
    if (config) {
      const updatedSections = {
        ...(config.sections || initialHomePageData.sections),
        [key]: sectionData
      };
      config.sections = updatedSections;
      config.sectionsList = buildSectionsList(config.sectionsOrder, updatedSections);
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(res, `Section '${key}' updated successfully`, memoryHomeData);
    }
  } catch {
    // Fall through to memory
  }

  memoryHomeData.sections[key] = sectionData;
  memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

  return successResponse(res, `Section '${key}' updated in cache`, memoryHomeData);
});

/**
 * @desc Toggle a section active/inactive (isEnabled / isVisible)
 * @route PATCH /api/v1/home-page/section/:key/toggle or /api/v1/home-page/sections/:key/toggle
 * @access Private/Admin
 */
export const toggleSectionStatus = asyncHandler(async (req, res) => {
  const { key } = req.params;

  try {
    const config = await getOrCreateConfig();
    if (config && config.sections) {
      const current = config.sections[key] || initialHomePageData.sections[key] || {};
      const currentVisible = current.isVisible !== false && current.isEnabled !== false;
      const newVisibility = !currentVisible;

      const updatedSection = {
        ...current,
        isVisible: newVisibility,
        isEnabled: newVisibility
      };

      config.sections = {
        ...config.sections,
        [key]: updatedSection
      };
      config.sectionsList = buildSectionsList(config.sectionsOrder, config.sections);
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(
        res,
        `Section '${key}' is now ${newVisibility ? 'visible' : 'hidden'}`,
        updatedSection
      );
    }
  } catch {
    // Fall through to memory
  }

  if (memoryHomeData.sections) {
    const current = memoryHomeData.sections[key] || initialHomePageData.sections[key] || {};
    const currentVisible = current.isVisible !== false && current.isEnabled !== false;
    const newVisibility = !currentVisible;

    memoryHomeData.sections[key] = {
      ...current,
      isVisible: newVisibility,
      isEnabled: newVisibility
    };
    memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

    return successResponse(
      res,
      `Section '${key}' is now ${newVisibility ? 'visible' : 'hidden'}`,
      memoryHomeData.sections[key]
    );
  }

  return errorResponse(res, `Section '${key}' not found`, 404);
});

/**
 * @desc Reorder sections
 * @route PATCH /api/v1/home-page/reorder or PUT /api/v1/home-page/reorder
 * @access Private/Admin
 */
export const reorderSections = asyncHandler(async (req, res) => {
  const orderedKeys = req.body.sectionsOrder || req.body.orderedKeys || req.body.sections;

  if (!Array.isArray(orderedKeys) || orderedKeys.length === 0) {
    return errorResponse(res, 'sectionsOrder array is required', 400);
  }

  try {
    const config = await getOrCreateConfig();
    if (config) {
      config.sectionsOrder = orderedKeys;
      config.sectionsList = buildSectionsList(orderedKeys, config.sections || initialHomePageData.sections);
      config.markModified('sectionsOrder');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(res, 'Home page sections reordered successfully', memoryHomeData);
    }
  } catch {
    // Fall through to memory
  }

  memoryHomeData.sectionsOrder = orderedKeys;
  memoryHomeData.sectionsList = buildSectionsList(orderedKeys, memoryHomeData.sections);

  return successResponse(res, 'Home page sections reordered in cache', memoryHomeData);
});

/**
 * @desc Reset a single section or all 22 sections to factory defaults
 * @route POST /api/v1/home-page/reset or POST /api/v1/home-page/reset/:key or POST /api/v1/home-page/section/:key/reset
 * @access Private/Admin
 */
export const resetHomeSections = asyncHandler(async (req, res) => {
  const key = req.params.key || req.body.key;

  try {
    const config = await getOrCreateConfig();

    if (key) {
      const defaultSec = initialHomePageData.sections[key];
      if (!defaultSec) {
        return errorResponse(res, `Default data for section '${key}' not found`, 404);
      }

      if (config) {
        config.sections = {
          ...config.sections,
          [key]: cloneData(defaultSec)
        };
        config.sectionsList = buildSectionsList(config.sectionsOrder, config.sections);
        config.markModified('sections');
        config.markModified('sectionsList');
        await config.save();
      }

      memoryHomeData.sections[key] = cloneData(defaultSec);
      memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

      return successResponse(res, `Section '${key}' restored to factory defaults`, memoryHomeData.sections[key]);
    }

    // Reset all 22 sections
    if (config) {
      config.sectionsOrder = cloneData(initialSectionsOrder);
      config.sections = cloneData(initialHomePageData.sections);
      config.sectionsList = buildSectionsList(initialSectionsOrder, initialHomePageData.sections);
      config.markModified('sectionsOrder');
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();
    }

    memoryHomeData = formatHomeResponse(initialSectionsOrder, initialHomePageData.sections);
    return successResponse(res, 'All 22 home page sections restored to factory defaults', memoryHomeData);
  } catch (error) {
    if (key && initialHomePageData.sections[key]) {
      memoryHomeData.sections[key] = cloneData(initialHomePageData.sections[key]);
      memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);
      return successResponse(res, `Section '${key}' restored to factory defaults`, memoryHomeData.sections[key]);
    }

    memoryHomeData = formatHomeResponse(initialSectionsOrder, initialHomePageData.sections);
    return successResponse(res, 'All 22 home page sections restored to factory defaults', memoryHomeData);
  }
});

/**
 * Helper to recursively clear target URL from object or array
 */
export const removeFileUrlRecursively = (obj, targetUrl) => {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => removeFileUrlRecursively(item, targetUrl));
  }
  const result = { ...obj };
  for (const key of Object.keys(result)) {
    const val = result[key];
    if (typeof val === 'string' && (val === targetUrl || (targetUrl.startsWith('/uploads/') && val.endsWith(targetUrl)))) {
      result[key] = '';
    } else if (typeof val === 'object' && val !== null) {
      result[key] = removeFileUrlRecursively(val, targetUrl);
    }
  }
  return result;
};

/**
 * Clean up deleted media URL from in-memory cache and MongoDB HomePageConfig
 */
export const removeMediaUrlFromHomeData = async (targetUrl) => {
  if (!targetUrl) return;

  // 1. Update in-memory cache
  if (memoryHomeData && memoryHomeData.sections) {
    memoryHomeData.sections = removeFileUrlRecursively(memoryHomeData.sections, targetUrl);
    memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);
  }

  // 2. Update MongoDB HomePageConfig
  try {
    const config = await getOrCreateConfig();
    if (config && config.sections) {
      config.sections = removeFileUrlRecursively(config.sections, targetUrl);
      config.sectionsList = buildSectionsList(config.sectionsOrder, config.sections);
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();
    }
  } catch (err) {
    console.error('Error clearing media reference from MongoDB:', err);
  }
};

