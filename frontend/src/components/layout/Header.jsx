import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Mail, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import BRAND from '../../constants/brand';
import MegaMenu from './MegaMenu';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuStack, setMenuStack] = useState([]);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMenuStack([]);
  }, [location]);

  const handleMenuHover = (menuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuType);
  };

  const handleMenuLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const pushView = (title, items) => {
    setMenuStack(prev => [...prev, { title, items }]);
  };

  const popView = () => {
    setMenuStack(prev => prev.slice(0, -1));
  };

  const closeDrawer = () => {
    setMobileMenuOpen(false);
    setMenuStack([]);
  };

  const navLinks = [
    { name: 'Company', hasMenu: 'company', path: '/about' },
    { name: 'Product', hasMenu: 'solutions', path: '/services' },
    { name: 'Services', hasMenu: 'services', path: '/services' },
    { name: 'Technology', hasMenu: 'technologies', path: '/technologies' },
    { name: 'Hire Developers', hasMenu: 'hire-developers', path: '/services/dedicated-developers' },
    { name: 'Our Work', hasMenu: 'our-work', path: '/portfolio' }
  ];

  // =========================================================================
  // COMPLETE MULTI-LEVEL DRILL-DOWN NAVIGATION TREE (ALL MEGAMENU OPTIONS)
  // =========================================================================

  // 1. Company Menu Tree
  const companyTree = [
    {
      name: 'About Us',
      subItems: [
        { name: 'About Firevy.Co', path: '/company/about-firevy' },
        { name: 'CEO Message', path: '/company/ceo-message' },
        { name: 'Our Team', path: '/company/our-team' },
        { name: 'Events & Activities', path: '/company/events-activities' },
        { name: 'Brochure', path: '/company/brochure' },
        { name: 'Why Choose Us', path: '/company/why-choose-us' },
        { name: 'Great Place To Work', path: '/company/great-place-to-work' },
        { name: 'Women Empowerment', path: '/company/women-empowerment' },
        { name: 'Awards & Recognition', path: '/company/awards-recognition' },
        { name: 'Insightful Videos', path: '/company/insightful-videos' },
        { name: 'Blog', path: '/company/blog' },
        { name: 'Careers (Jobs)', path: '/careers' },
        { name: 'CSR', path: '/company/csr' },
        { name: 'Podcast', path: '/company/podcast' }
      ]
    },
    {
      name: 'Models',
      subItems: [
        { name: 'Delivery Models', path: '/company/delivery-models' },
        { name: 'Engagement Models', path: '/company/engagement-models' },
        { name: 'Development Methodology', path: '/company/development-methodology' }
      ]
    },
    {
      name: 'Testimonials',
      subItems: [
        { name: 'Client Testimonials', path: '/company/client-testimonials' },
        { name: 'Video Testimonial', path: '/company/video-testimonial' },
        { name: 'Clutch Testimonial', path: '/company/clutch-testimonial' }
      ]
    }
  ];

  // 2. Product / Solutions Menu Tree
  const productTree = [
    { name: 'Vidyalaya School Management Software', path: '/services/vidyalaya-school-management-software' },
    { name: 'Vidyalaya Learning Management System', path: '/services/vidyalaya-learning-management-system' },
    { name: 'Occupational Health And Safety Software', path: '/services/occupational-health-safety-software' },
    {
      name: 'Solutions Apps',
      subItems: [
        { name: 'Health Care App Development', path: '/services/health-care-app-development' },
        { name: 'Education App Development', path: '/services/education-app-development' },
        { name: 'Uber Like App Development', path: '/services/uber-like-app-development' },
        { name: 'Spotify Like App Development', path: '/services/spotify-like-app-development' },
        { name: 'Zomato Like App Development', path: '/services/zomato-like-app-development' },
        { name: 'Amazon Like App Development', path: '/services/amazon-like-app-development' },
        { name: 'Visitor Management System', path: '/services/visitor-management-system' },
        { name: 'Warehouse Management System', path: '/services/warehouse-management-system' },
        { name: 'Clover App Development', path: '/services/clover-app-development' },
        { name: 'Product Finder App', path: '/services/product-finder-app-development' },
        { name: 'Eyelash Appointment Booking App', path: '/services/eyelash-appointment-booking-app' },
        { name: 'Language Learning App', path: '/services/language-learning-app' }
      ]
    }
  ];

  // 3. Services Menu Tree (1:1 Sapphire Reference Screenshot Match)
  const servicesMenuTree = [
    {
      name: 'Mobile App Development',
      subItems: [
        { name: 'iWatch App Development', path: '/services/iwatch-app-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Cross Platform App Development', path: '/services/cross-platform-app-development' },
        { name: 'iPad App Development Services', path: '/services/ipad-app-development' },
        { name: 'Kotlin App Development', path: '/services/kotlin-app-development' },
        { name: 'Hybrid App Development', path: '/services/hybrid-app-development' },
        { name: 'Progressive Web App Development', path: '/services/pwa-development' },
        { name: 'Personal Fitness App', path: '/services/personal-fitness-app' },
        { name: 'Used Car App Development', path: '/services/used-car-app-development' },
        { name: 'Enneagram Test App', path: '/services/enneagram-test-app' },
        { name: 'Credit Card App Development', path: '/services/credit-card-app-development' },
        { name: 'Swift App Development', path: '/services/swift-app-development' },
        { name: 'IBeacon App Development', path: '/services/ibeacon-app-development' },
        { name: 'Wearable App Development', path: '/services/wearable-app-development' },
        { name: 'Native App Development', path: '/services/native-app-development' },
        { name: 'Windows App Development', path: '/services/windows-app-development' },
        { name: 'Custom Mobile App Development', path: '/services/custom-mobile-app-development' },
        { name: 'B2B Mobile App Development', path: '/services/b2b-mobile-app-development' },
        { name: 'Windows 11 App Development', path: '/services/windows-11-app-development' },
        { name: 'Ride Sharing App Development', path: '/services/ride-sharing-app-development' },
        { name: 'Visa Card App Development', path: '/services/visa-card-app-development' },
        { name: 'Wellness App Development', path: '/services/wellness-app-development' }
      ]
    },
    {
      name: 'Back End Development',
      subItems: [
        { name: 'Symfony Development', path: '/services/symfony-development' },
        { name: 'Django Development', path: '/services/django-development' },
        { name: 'Laravel Development', path: '/services/laravel-development' },
        { name: 'Lamp Development', path: '/services/lamp-development' },
        { name: 'Python Development Services', path: '/services/python-development-services' },
        { name: 'Golang Development Services', path: '/services/golang-development-services' },
        { name: 'Big Commerce Development', path: '/services/big-commerce-development' },
        { name: 'MongoDB Development Services', path: '/services/mongodb-development-services' },
        { name: 'Phalcon Development Services', path: '/services/phalcon-development-services' },
        { name: 'Azure Web Services', path: '/services/azure-web-services' },
        { name: 'MySQL Development Company', path: '/services/mysql-development-company' }
      ]
    },
    {
      name: 'AI & ML Development',
      subItems: [
        { name: 'Artificial Intelligence Development', path: '/services/artificial-intelligence-development' },
        { name: 'Machine Learning Development', path: '/services/machine-learning-development' },
        { name: 'Chatbot Development', path: '/services/chatbot-development' },
        { name: 'Data Analytics Services', path: '/services/data-analytics-services' },
        { name: 'Data Migration Services', path: '/services/data-migration-services' },
        { name: 'Business Intelligence Development', path: '/services/business-intelligence-development' },
        { name: 'IOT App Development', path: '/services/iot-app-development' },
        { name: 'Blockchain Development', path: '/services/blockchain-development' },
        { name: 'AI Ionic App Development', path: '/services/ai-ionic-app-development' },
        { name: 'Enterprise AI Development', path: '/services/enterprise-ai-development' },
        { name: 'AI in Payments Industry', path: '/services/ai-in-payments-industry' }
      ]
    },
    {
      name: 'Front End Development',
      subItems: [
        { name: 'C Sharp Development', path: '/services/c-sharp-development' },
        { name: 'Frontend Development', path: '/services/frontend-development' },
        { name: 'Meteor JS Development', path: '/services/meteor-js-development' },
        { name: 'Typescript Development Services', path: '/services/typescript-development-services' },
        { name: 'Next Js Development', path: '/services/next-js-development' },
        { name: 'React JS Development', path: '/services/react-js-development' },
        { name: 'CSR Web Development', path: '/services/csr-web-development' },
        { name: 'CSS Web Development', path: '/services/css-web-development' },
        { name: 'Web Portal Development', path: '/services/web-portal-development' },
        { name: 'Web3 Development', path: '/services/web3-development' },
        { name: 'Progressive Web App', path: '/services/pwa-development' }
      ]
    },
    {
      name: 'Microsoft Development',
      subItems: [
        { name: 'Microsoft Development', path: '/services/microsoft-development' },
        { name: 'ASP.NET Core Development', path: '/services/asp-net-core-development' },
        { name: '.NET Application Development', path: '/services/dotnet-application-development' },
        { name: 'ASP.NET Development', path: '/services/asp-net-development' },
        { name: 'ASP.NET Migration Service', path: '/services/asp-net-migration-service' },
        { name: 'Microsoft Dynamics 365 Consulting', path: '/services/microsoft-dynamics-365-consulting' },
        { name: 'Kentico Development Services', path: '/services/kentico-development-services' },
        { name: 'Dotnetnuke Development', path: '/services/dotnetnuke-development' },
        { name: 'Power BI Consulting', path: '/services/power-bi-consulting' },
        { name: 'Windows 11 App Development', path: '/services/windows-11-app-development' },
        { name: 'Windows App Development', path: '/services/windows-app-development' }
      ]
    },
    {
      name: 'Blockchain Development',
      subItems: [
        { name: 'NFT Marketplace Development', path: '/services/nft-marketplace-development' },
        { name: 'Smart Contracts Development', path: '/services/smart-contracts-development' },
        { name: 'Bitcoin Wallet Development', path: '/services/bitcoin-wallet-development' },
        { name: 'Marketplace App Development', path: '/services/marketplace-app-development' },
        { name: 'Cryptocurrency Wallet Development', path: '/services/cryptocurrency-wallet-development' },
        { name: 'Bullion Exchange App Development', path: '/services/bullion-exchange-app-development' },
        { name: 'Digital Wayfinding Solutions', path: '/services/digital-wayfinding-solutions' },
        { name: 'Ethereum App Development', path: '/services/ethereum-app-development' }
      ]
    },
    {
      name: 'Software Development Service',
      subItems: [
        { name: 'Product Development', path: '/services/product-development' },
        { name: 'Software Development Service', path: '/services/software-development-service' },
        { name: 'Digital Transformation Services', path: '/services/digital-transformation-services' },
        { name: 'Application Services', path: '/services/application-services' },
        { name: 'Startup Consulting Services', path: '/services/startup-consulting-services' },
        { name: 'App Development Consulting', path: '/services/app-development-consulting' },
        { name: 'Crm Development', path: '/services/crm-development' },
        { name: 'Prototype Development Services', path: '/services/prototype-development-services' },
        { name: 'Offshore Software Development', path: '/services/offshore-software-development' },
        { name: 'Invoice Generation Software', path: '/services/invoice-generation-software' },
        { name: 'Software Modernization Services', path: '/services/software-modernization-services' },
        { name: 'Web Application Development', path: '/services/web-application-development' },
        { name: 'Product Engineering Services', path: '/services/product-engineering-services' },
        { name: 'IT Outsourcing', path: '/services/it-outsourcing' },
        { name: 'Business Application Development', path: '/services/business-application-development' },
        { name: 'It Consulting Services', path: '/services/it-consulting-services' },
        { name: 'VB6 Migration Services', path: '/services/vb6-migration-services' },
        { name: 'Enterprise Mobility Services', path: '/services/enterprise-mobility-services' },
        { name: 'Full Stack Development', path: '/services/full-stack-development' },
        { name: 'Financial Software Development', path: '/services/financial-software-development' },
        { name: 'Travel Software Development', path: '/services/travel-software-development' },
        { name: 'Software Product Discovery', path: '/services/software-product-discovery' }
      ]
    },
    {
      name: 'AR/VR Development',
      subItems: [
        { name: 'Augmented Reality App Development', path: '/services/augmented-reality-app-development' },
        { name: 'Virtual Reality App Development', path: '/services/virtual-reality-app-development' },
        { name: 'Extended Reality Development', path: '/services/extended-reality-development' },
        { name: 'Metaverse Development Company', path: '/services/metaverse-development-company' },
        { name: 'Digital Twin Solutions', path: '/services/digital-twin-solutions' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      subItems: [
        { name: 'Cloud Development', path: '/services/cloud-development' },
        { name: 'Cloud Computing Service', path: '/services/cloud-computing-service' },
        { name: 'DevOps Development Services', path: '/services/devops-development-services' },
        { name: 'AWS Cloud Services', path: '/services/aws-cloud-services' },
        { name: 'Google Cloud Development', path: '/services/google-cloud-development' },
        { name: 'Cloud Foundry Software Development', path: '/services/cloud-foundry-software-development' },
        { name: 'Cloud Cost Optimization Software', path: '/services/cloud-cost-optimization-software' },
        { name: 'Cloud Based Storage Services', path: '/services/cloud-based-storage-services' },
        { name: 'Cloud Analytics Software Development', path: '/services/cloud-analytics-software-development' }
      ]
    },
    {
      name: 'Other Services',
      subItems: [
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Testing & QA', path: '/services/testing-qa' },
        { name: 'Nintex Development Services', path: '/services/nintex-development-services' },
        { name: 'Mobile App Porting', path: '/services/mobile-app-porting' },
        { name: 'Data Cleansing Services', path: '/services/data-cleansing-services' },
        { name: 'Data Annotation Company', path: '/services/data-annotation-company' },
        { name: 'Patient Management System', path: '/services/patient-management-system' },
        { name: 'Digital Twin Solutions Company', path: '/services/digital-twin-solutions-company' },
        { name: 'Artist Collaboration Platform', path: '/services/artist-collaboration-platform' },
        { name: 'Prototype Development Services', path: '/services/prototype-development-services' }
      ]
    },
    {
      name: 'Tech Consulting Services',
      subItems: [
        { name: 'IT Consulting Services', path: '/services/it-consulting-services' },
        { name: 'App Development Consulting', path: '/services/app-development-consulting' },
        { name: 'Startup Consulting Services', path: '/services/startup-consulting-services' },
        { name: 'Epicor ERP Consulting Services', path: '/services/epicor-erp-consulting-services' },
        { name: 'DevOps Consulting Service', path: '/services/devops-consulting-services' },
        { name: 'Generative AI Consulting Company', path: '/services/generative-ai-consulting-company' },
        { name: 'Microservices Consulting Services', path: '/services/microservices-consulting-services' },
        { name: 'AI Consulting Services', path: '/services/ai-consulting-services' }
      ]
    }
  ];

  // 4. Hire Developers Menu Tree
  const hireDevelopersTree = [
    {
      name: 'Hire Web Developers',
      subItems: [
        { name: 'Hire C Sharp Developers', path: '/services/hire-c-sharp-developers' },
        { name: 'Hire Bootstrap Developers', path: '/services/hire-bootstrap-developers' },
        { name: 'Hire Codeigniter Developers', path: '/services/hire-codeigniter-developers' },
        { name: 'Hire Angular JS Developers', path: '/services/hire-angular-js-developers' },
        { name: 'Hire React JS Developers', path: '/services/hire-react-js-developers' },
        { name: 'Hire Vue Storefront Developers', path: '/services/hire-vue-storefront-developers' },
        { name: 'Hire Ember JS Developers', path: '/services/hire-ember-js-developers' },
        { name: 'Hire Laravel Developers', path: '/services/hire-laravel-developers' },
        { name: 'Hire Express JS Developers', path: '/services/hire-express-js-developers' },
        { name: 'Hire Vue JS Developers', path: '/services/hire-vue-js-developers' },
        { name: 'Hire Next JS Developers', path: '/services/hire-next-js-developers' }
      ]
    },
    {
      name: 'Hire Mobile App Developers',
      subItems: [
        { name: 'Hire Kotlin Developers', path: '/services/hire-kotlin-developers' },
        { name: 'Hire Android Developers', path: '/services/hire-android-developers' },
        { name: 'Hire Ionic Developers', path: '/services/hire-ionic-developers' },
        { name: 'Hire Flutter Developers', path: '/services/hire-flutter-developers' },
        { name: 'Hire iOS Developers', path: '/services/hire-ios-developers' },
        { name: 'Hire Swift Developer', path: '/services/hire-swift-developer' },
        { name: 'Hire Mobile App Developers', path: '/services/hire-mobile-app-developers' },
        { name: 'Hire Blackberry App Developers', path: '/services/hire-blackberry-app-developers' },
        { name: 'Hire Freelance App Developers', path: '/services/hire-freelance-app-developers' },
        { name: 'Hire AI Application Developers', path: '/services/hire-ai-application-developers' },
        { name: 'Hire iPhone App Developers', path: '/services/hire-iphone-app-developers' }
      ]
    },
    {
      name: 'Hire CMS & E-Commerce Developers',
      subItems: [
        { name: 'Hire Magento Developers', path: '/services/hire-magento-developers' },
        { name: 'Hire WooCommerce Developers', path: '/services/hire-woocommerce-developers' },
        { name: 'Hire Prestashop Developers', path: '/services/hire-prestashop-developers' },
        { name: 'Hire Wordpress Developers', path: '/services/hire-wordpress-developers' },
        { name: 'Hire Bootstrap Developers', path: '/services/hire-bootstrap-developers' },
        { name: 'Hire Laravel Developers', path: '/services/hire-laravel-developers' },
        { name: 'Hire Flutter Developers', path: '/services/hire-flutter-developers' },
        { name: 'Hire Swift Developers', path: '/services/hire-swift-developers' }
      ]
    },
    {
      name: 'Hire Back End Developers',
      subItems: [
        { name: 'Hire Golang Developers', path: '/services/hire-golang-developers' },
        { name: 'Hire Backend Developers', path: '/services/hire-backend-developers' },
        { name: 'Hire Python Developers', path: '/services/hire-python-developers' },
        { name: 'Hire Java Developers', path: '/services/hire-java-developers' },
        { name: 'Hire Spring Boot Developers', path: '/services/hire-spring-boot-developers' },
        { name: 'Hire Django Developers', path: '/services/hire-django-developers' },
        { name: 'Hire .NET Developers', path: '/services/hire-net-developers' },
        { name: 'Hire Node JS Developers', path: '/services/hire-node-js-developers' },
        { name: 'Hire PHP Developers', path: '/services/hire-php-developers' },
        { name: 'Hire Express JS Developers', path: '/services/hire-express-js-developers' },
        { name: 'Hire Fintech Developers', path: '/services/hire-fintech-developers' }
      ]
    },
    {
      name: 'Hire Microsoft Developers',
      subItems: [
        { name: 'Hire PowerApps Developers', path: '/services/hire-powerapps-developers' },
        { name: 'Hire SharePoint Developers', path: '/services/hire-sharepoint-developers' },
        { name: 'Hire Alexa Skills Developer', path: '/services/hire-alexa-skills-developers' },
        { name: 'Hire Metaverse Developers', path: '/services/hire-metaverse-developers' },
        { name: 'Hire Software Developers', path: '/services/hire-software-developers' },
        { name: 'Hire Embedded Software Developers', path: '/services/hire-embedded-software-developers' },
        { name: 'Hire Machine Learning Engineer', path: '/services/hire-machine-learning-engineer' }
      ]
    },
    {
      name: 'Hire Javascript Developers',
      subItems: [
        { name: 'Hire Mean Stack Developers', path: '/services/hire-mean-stack-developers' },
        { name: 'Hire Mern Stack Developers', path: '/services/hire-mern-stack-developers' },
        { name: 'Hire Full Stack Developers', path: '/services/hire-full-stack-developers' },
        { name: 'Hire Ember JS Developer', path: '/services/hire-ember-js-developer' },
        { name: 'Hire React JS Developers', path: '/services/hire-react-js-developers' },
        { name: 'Hire Angular JS Developers', path: '/services/hire-angular-js-developers' },
        { name: 'Hire Next JS Developers', path: '/services/hire-next-js-developers' },
        { name: 'Hire Vue JS Developers', path: '/services/hire-vue-js-developers' },
        { name: 'Hire Express JS Developers', path: '/services/hire-express-js-developers' }
      ]
    },
    {
      name: 'Hire Blockchain Development',
      subItems: [
        { name: 'Hire Blockchain Developers', path: '/services/hire-blockchain-developers' },
        { name: 'Hire Solidity Developers', path: '/services/hire-solidity-developers' },
        { name: 'Hire Data Scientist', path: '/services/hire-data-scientist' },
        { name: 'Hire FastAPI Developers', path: '/services/hire-fastapi-developers' },
        { name: 'Hire API Developers', path: '/services/hire-api-developers' }
      ]
    },
    {
      name: 'Hire Trending',
      subItems: [
        { name: 'Hire Data Scientist Developers', path: '/services/hire-data-scientist-developers' },
        { name: 'Hire Alexa Skills Developers', path: '/services/hire-alexa-skills-developers' },
        { name: 'Hire Embedded Software Developers', path: '/services/hire-embedded-software-developers' },
        { name: 'Hire Metaverse Developers', path: '/services/hire-metaverse-developers' },
        { name: 'Hire Dedicated Developers', path: '/services/hire-dedicated-developers' },
        { name: 'Hire Blackberry App Developers', path: '/services/hire-blackberry-app-developers' },
        { name: 'Hire Software Developers', path: '/services/hire-software-developers' },
        { name: 'Hire ChatGPT Developer', path: '/services/hire-chatgpt-developer' },
        { name: 'Hire LLM Engineers', path: '/services/hire-llm-engineers' },
        { name: 'Hire AI Agent Developer', path: '/services/hire-ai-agent-developer' },
        { name: 'Hire OpenAI Developer', path: '/services/hire-openai-developer' }
      ]
    }
  ];

  // 5. Technology Menu Tree
  const technologyTree = [
    {
      name: 'Mobile',
      subItems: [
        { name: 'Android', path: '/services/android' },
        { name: 'iOS', path: '/services/ios' },
        { name: 'Flutter', path: '/services/flutter' },
        { name: 'React Native', path: '/services/react-native' },
        { name: 'Xamarin', path: '/services/xamarin' }
      ]
    },
    {
      name: 'Microsoft',
      subItems: [
        { name: 'SharePoint', path: '/services/sharepoint' },
        { name: 'PowerApps', path: '/services/powerapps' },
        { name: 'Power Automate', path: '/services/power-automate' }
      ]
    },
    {
      name: 'Backend',
      subItems: [
        { name: '.NET', path: '/services/net' },
        { name: 'PHP', path: '/services/php' },
        { name: 'Java', path: '/services/java' },
        { name: 'Nodejs', path: '/services/nodejs' }
      ]
    },
    {
      name: 'Frontend',
      subItems: [
        { name: 'Angular', path: '/services/angular' },
        { name: 'React', path: '/services/react' },
        { name: 'Vuejs', path: '/services/vuejs' }
      ]
    },
    {
      name: 'Trending',
      subItems: [
        { name: 'Generative AI', path: '/services/generative-ai' },
        { name: 'AI & ML', path: '/services/ai-ml' },
        { name: 'Blockchain', path: '/services/blockchain' },
        { name: 'Full Stack', path: '/services/full-stack' },
        { name: 'VR & AR', path: '/services/vr-ar' },
        { name: 'IoT', path: '/services/iot' },
        { name: 'PWD', path: '/services/pwd' },
        { name: 'RPA', path: '/services/rpa' }
      ]
    },
    {
      name: 'Others',
      subItems: [
        { name: 'Wordpress', path: '/services/wordpress' },
        { name: 'Drupal', path: '/services/drupal' },
        { name: 'Umbraco', path: '/services/umbraco' },
        { name: 'Sitecore', path: '/services/sitecore' },
        { name: 'Sitefinity', path: '/services/sitefinity' },
        { name: 'Magento', path: '/services/magento' },
        { name: 'Shopify', path: '/services/shopify' }
      ]
    }
  ];

  // 6. Our Work Menu Tree
  const ourWorkTree = [
    { name: 'Case Studies', path: '/portfolio' },
    {
      name: 'Solutions Showcase',
      subItems: [
        { name: 'Health Care App Development', path: '/services/health-care-app-development' },
        { name: 'Education App Development', path: '/services/education-app-development' },
        { name: 'Uber Like App Development', path: '/services/uber-like-app-development' },
        { name: 'Spotify Like App Development', path: '/services/spotify-like-app-development' },
        { name: 'Zomato Like App Development', path: '/services/zomato-like-app-development' },
        { name: 'Amazon Like App Development', path: '/services/amazon-like-app-development' }
      ]
    }
  ];

  // Top Level 1 Main Items
  const level1Items = [
    { name: 'Company', subTree: companyTree },
    { name: 'Product', subTree: productTree },
    { name: 'Services', subTree: servicesMenuTree },
    { name: 'Hire Developers', subTree: hireDevelopersTree },
    { name: 'Technology', subTree: technologyTree },
    { name: 'Our Work', subTree: ourWorkTree },
    { name: "Let's Talk AI", path: '/contact' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Current Active Level in stack
  const currentLevel = menuStack.length > 0 ? menuStack[menuStack.length - 1] : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement / Utility Bar (Desktop) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="hidden lg:block border-b border-[#072439] bg-[#011422] text-slate-300 text-[12px] font-sans overflow-hidden transition-colors duration-300"
          >
            <div className="w-full px-6 lg:px-10 py-1.5 flex items-center justify-between">
              {/* Sales Phone Numbers */}
              <div className="flex items-center space-x-6">
                <a href="tel:+17542587670" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <span className="text-[13px]">🇺🇸</span>
                  <span className="text-slate-400">For Sales:</span>
                  <span className="font-semibold text-white">+1-754-258-7670</span>
                </a>
                <a href="tel:+919429709662" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <span className="text-[13px]">🇮🇳</span>
                  <span className="text-slate-400">For Sales:</span>
                  <span className="font-semibold text-white">+91-942-970-9662</span>
                </a>
              </div>

              {/* Center / Right Links */}
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-1.5 font-medium text-slate-200">
                  <span className="text-cyan-400 font-bold text-xs">❖</span>
                  <span className="font-semibold">{BRAND.name || 'Firevy.Co'}</span>
                </span>

                <a href={`mailto:${BRAND.contact?.email || 'contact@firevy.co'}`} className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{BRAND.contact?.email || 'contact@firevy.co'}</span>
                </a>

                <Link to="/contact" className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Bar */}
      <div className={`relative transition-all duration-300 h-[76px] flex items-center ${
        isScrolled
          ? 'bg-white border-b border-slate-200 text-slate-900 shadow-md'
          : 'bg-[#011422]/95 backdrop-blur-md border-b border-[#072439] text-white shadow-md'
      }`}>
        <div className="w-full px-6 lg:px-10 flex items-center justify-between h-full">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0 mr-6">
            <img
              src={isScrolled ? "/firevy_logo_dark.png" : "/firevy_logo_white.png"}
              alt="Firevy.Co"
              className="h-[34px] sm:h-[38px] w-auto max-w-[180px] object-contain transition-all duration-200"
            />
          </Link>

          {/* Desktop Nav & Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 h-full">
            <nav className="flex items-center space-x-5 xl:space-x-7 h-full relative" onMouseLeave={handleMenuLeave}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || activeDropdown === link.hasMenu;
                const hasMenu = Boolean(link.hasMenu);
                const isDarkHeader = !isScrolled;

                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center px-1"
                    onMouseEnter={() => hasMenu && handleMenuHover(link.hasMenu)}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm xl:text-[15px] font-semibold transition-colors flex items-center space-x-1 ${
                        isDarkHeader
                          ? (isActive ? 'text-cyan-300 font-bold' : 'text-white/90 hover:text-cyan-300')
                          : (isActive ? 'text-[#005F96] font-bold' : 'text-[#2D3748] hover:text-[#005F96]')
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasMenu && (
                        <span className={`text-[11px] leading-none ml-0.5 ${isDarkHeader ? 'text-white/60' : 'text-slate-500'}`}>
                          ▾
                        </span>
                      )}
                    </Link>

                    {isActive && (
                      <motion.div
                        layoutId="activeHeaderTab"
                        className={`absolute bottom-0 left-0 right-0 h-[3px] ${isDarkHeader ? 'bg-cyan-400' : 'bg-[#005F96]'}`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Actions: Gradient Magenta-Purple Button ("Let's Talk AI") + Deep Blue Button ("Contact Us") */}
            <div className="flex items-center space-x-3 shrink-0 ml-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs xl:text-[13.5px] font-bold text-white rounded-[4px] bg-gradient-to-r from-[#D81B60] via-[#A855F7] to-[#8E24AA] hover:opacity-95 shadow-md transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300 animate-pulse" />
                <span>Let's Talk AI</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs xl:text-[13.5px] font-bold text-white rounded-[4px] bg-[#006B8F] hover:bg-[#005478] transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2.5 rounded-lg border focus:outline-none transition-colors ${
              isScrolled
                ? 'text-slate-800 bg-slate-100 border-slate-300'
                : 'text-white bg-white/10 border-white/20'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Full-Width Mega Menu Dropdown (Desktop) */}
        <AnimatePresence>
          {activeDropdown && (
            <div
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMenuLeave}
            >
              <MegaMenu type={activeDropdown} onClose={() => setActiveDropdown(null)} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          MOBILE DRILL-DOWN MULTI-LEVEL SIDE DRAWER (1:1 SAPPHIRE MATCH)
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-[90]"
            />

            {/* Left Slide-In Solid Blue Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[85vw] max-w-[340px] sm:max-w-[360px] bg-[#005F96] text-white z-[91] shadow-2xl flex flex-col justify-between overflow-y-auto font-sans"
            >
              {/* Header Bar: Shows '< Back' if in sub-level, or 'X Close' if on root level */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/20 shrink-0">
                {currentLevel ? (
                  <button
                    onClick={popView}
                    className="flex items-center space-x-2 text-white font-bold text-base hover:opacity-80 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5 text-white stroke-[2.5]" />
                    <span>Back</span>
                  </button>
                ) : (
                  <button
                    onClick={closeDrawer}
                    className="flex items-center space-x-2 text-white font-bold text-base hover:opacity-80 transition-opacity"
                  >
                    <X className="w-5 h-5 text-white stroke-[2.5]" />
                    <span>Close</span>
                  </button>
                )}
              </div>

              {/* Dynamic Drill-Down View Container */}
              <div className="flex-1 overflow-y-auto text-left">
                {!currentLevel ? (
                  /* ================= Level 1: Root Main Menu ================= */
                  <div>
                    {level1Items.map((item) => {
                      const hasChildren = Boolean(item.subTree && item.subTree.length > 0);

                      if (hasChildren) {
                        return (
                          <button
                            key={item.name}
                            onClick={() => pushView(item.name, item.subTree)}
                            className="w-full border-b border-white/20 px-5 py-3.5 flex items-center justify-between text-sm sm:text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={item.name}
                          to={item.path || '/contact'}
                          onClick={closeDrawer}
                          className="block border-b border-white/20 px-5 py-3.5 text-sm sm:text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  /* ================= Level 2 or Level 3 Sub-Menu ================= */
                  <div>
                    {currentLevel.items.map((item, idx) => {
                      // Check if item has nested subItems (e.g. Services -> Back End Development -> [Symfony, Django, ...])
                      const hasNestedItems = Boolean(item.subItems && item.subItems.length > 0);

                      if (hasNestedItems) {
                        return (
                          <button
                            key={item.name || idx}
                            onClick={() => pushView(item.name, item.subItems)}
                            className="w-full border-b border-white/20 px-5 py-3.5 flex items-center justify-between text-sm sm:text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                          </button>
                        );
                      }

                      // Direct Leaf Link
                      const linkPath = item.path || `/services/${slugify(item.name || '')}`;

                      return (
                        <Link
                          key={item.name || idx}
                          to={linkPath}
                          onClick={closeDrawer}
                          className="block border-b border-white/20 px-5 py-3.5 text-sm sm:text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Sales Contact Strip matching reference screenshot 1:1 */}
              <div className="p-5 border-t border-white/20 bg-[#004A75] space-y-3 text-left shrink-0">
                <a
                  href="tel:+919429709662"
                  className="flex items-center space-x-2.5 text-xs sm:text-[13px] font-bold text-white hover:text-cyan-200 transition-colors"
                >
                  <span className="text-base">🇮🇳</span>
                  <span>For Sales: +91-942-970-9662</span>
                </a>
                <a
                  href="tel:+17542587670"
                  className="flex items-center space-x-2.5 text-xs sm:text-[13px] font-bold text-white hover:text-cyan-200 transition-colors"
                >
                  <span className="text-base">🇺🇸</span>
                  <span>For Sales: +1-754-258-7670</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
