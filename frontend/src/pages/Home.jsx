import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import { homePageService } from '../services/homePageService';
import { initialHomePageData, initialSectionsOrder } from '../constants/initialHomePageData';

// All 22 Home Page Section Components
import Hero from '../components/home/Hero';
import TrustMarquee from '../components/home/TrustMarquee';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import ServicesSection from '../components/home/ServicesSection';
import ConversionCalloutBanner from '../components/home/ConversionCalloutBanner';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import EngagementModelsSection from '../components/home/EngagementModelsSection';
import TechShowcaseTabbed from '../components/home/TechShowcaseTabbed';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import SuccessMatrixGrid from '../components/home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../components/home/InnovativeSolutionVideo';
import RecentPodcastsSection from '../components/home/RecentPodcastsSection';
import DownloadBrochureSection from '../components/home/DownloadBrochureSection';
import DigitalTransformationCaseStudies from '../components/home/DigitalTransformationCaseStudies';
import VideoTestimonialsStory from '../components/home/VideoTestimonialsStory';
import RecentBlogsSection from '../components/home/RecentBlogsSection';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import SubscribeNewsletterSection from '../components/home/SubscribeNewsletterSection';
import AboutPreview from '../components/home/AboutPreview';
import AwardsSection from '../components/home/AwardsSection';
import CTASection from '../components/home/CTASection';
import ConversionBanner from '../components/home/ConversionBanner';
import FaqAccordion from '../components/home/FaqAccordion';
import IndustriesGrid from '../components/home/IndustriesGrid';
import ProcessTimeline from '../components/home/ProcessTimeline';
import StatsSection from '../components/home/StatsSection';
import TechEcosystem from '../components/home/TechEcosystem';
import WhyChooseUs from '../components/home/WhyChooseUs';

const SECTION_COMPONENTS = {
  hero: Hero,
  trustMarquee: TrustMarquee,
  aboutKeyMetrics: AboutKeyMetrics,
  aboutPreview: AboutPreview,
  awardsSection: AwardsSection,
  ctaSection: CTASection,
  conversionBanner: ConversionBanner,
  faqAccordion: FaqAccordion,
  industriesGrid: IndustriesGrid,
  processTimeline: ProcessTimeline,
  statsSection: StatsSection,
  techEcosystem: TechEcosystem,
  whyChooseUs: WhyChooseUs,
  brandLogoGrid: BrandLogoGrid,
  servicesSection: ServicesSection,
  conversionCalloutBanner: ConversionCalloutBanner,
  portfolioShowcase: PortfolioShowcase,
  trustRecognitionBanner: TrustRecognitionBanner,
  workProcessGrid: WorkProcessGrid,
  engagementModelsSection: EngagementModelsSection,
  techShowcaseTabbed: TechShowcaseTabbed,
  premiumServicesGrid: PremiumServicesGrid,
  successMatrixGrid: SuccessMatrixGrid,
  innovativeSolutionVideo: InnovativeSolutionVideo,
  recentPodcastsSection: RecentPodcastsSection,
  downloadBrochureSection: DownloadBrochureSection,
  digitalTransformationCaseStudies: DigitalTransformationCaseStudies,
  videoTestimonialsStory: VideoTestimonialsStory,
  recentBlogsSection: RecentBlogsSection,
  clientReviewsDarkSection: ClientReviewsDarkSection,
  featuredInLogosGrid: FeaturedInLogosGrid,
  workTogetherNewsletterSection: WorkTogetherNewsletterSection,
  subscribeNewsletterSection: SubscribeNewsletterSection
};

export const Home = () => {
  const [pageConfig, setPageConfig] = useState({
    sectionsOrder: initialSectionsOrder,
    sections: initialHomePageData.sections
  });

  useEffect(() => {
    let isMounted = true;
    const fetchHomeData = async () => {
      try {
        const data = await homePageService.getHomePageData();
        if (isMounted && data) {
          setPageConfig({
            sectionsOrder: data.sectionsOrder || initialSectionsOrder,
            sections: data.sections || initialHomePageData.sections
          });
        }
      } catch (err) {
        console.warn('Using local fallback for homepage:', err);
      }
    };

    fetchHomeData();
    return () => {
      isMounted = false;
    };
  }, []);

  const { sectionsOrder, sections } = pageConfig;

  // Guarantee workProcessGrid ('Process We Follow') is included in rendering order
  let effectiveSectionsOrder = Array.isArray(sectionsOrder) && sectionsOrder.length > 0 ? [...sectionsOrder] : [...initialSectionsOrder];
  if (!effectiveSectionsOrder.includes('workProcessGrid')) {
    const portfolioIdx = effectiveSectionsOrder.indexOf('portfolioShowcase');
    if (portfolioIdx !== -1) {
      effectiveSectionsOrder.splice(portfolioIdx + 1, 0, 'workProcessGrid');
    } else {
      effectiveSectionsOrder.push('workProcessGrid');
    }
  }

  return (
    <>
      <SEO
        title="Firevy.Co | Enterprise IT & AI Software Solutions"
        description="We design and develop scalable web, mobile, cloud, AI, and enterprise software solutions that transform ambitious ideas into measurable business outcomes."
      />

      {/* Dynamically Render All Sections in Configured Order */}
      {effectiveSectionsOrder.map((sectionKey) => {
        const Component = SECTION_COMPONENTS[sectionKey];
        if (!Component) return null;

        const sectionData = sections?.[sectionKey] || initialHomePageData.sections[sectionKey] || {};
        
        // Ensure workProcessGrid is always visible on Home
        if (sectionKey !== 'workProcessGrid' && (sectionData.isVisible === false || sectionData.isEnabled === false)) {
          return null;
        }

        // On Home, hide the duplicate newsletter inside workTogetherNewsletterSection
        // because subscribeNewsletterSection renders the newsletter banner independently
        if (sectionKey === 'workTogetherNewsletterSection') {
          return <Component key={sectionKey} data={sectionData} hideNewsletter={true} />;
        }

        return <Component key={sectionKey} data={sectionData} />;
      })}
    </>
  );
};

export default Home;
