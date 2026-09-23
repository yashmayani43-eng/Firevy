import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';

export const BACKEND_SERVICES_CONFIG = {
  // Back End Development Services
  'django-development': { title: 'Django Development', category: 'Back End Development' },
  'python-development-services': { title: 'Python Development Services', category: 'Back End Development' },
  'big-commerce-development': { title: 'Big Commerce Development', category: 'Back End Development' },
  'mongodb-development-services': { title: 'MongoDB Development Services', category: 'Back End Development' },
  'azure-web-services': { title: 'Azure Web Services', category: 'Back End Development' },
  'mysql-development-company': { title: 'MySQL Development Company', category: 'Back End Development' },
  'backend-development': { title: 'Back End Development', category: 'Back End Development' },
  'back-end-development': { title: 'Back End Development', category: 'Back End Development' },
  'backend': { title: 'Back End Development', category: 'Back End Development' },

  // AI & ML Development Services
  'artificial-intelligence-development': { title: 'Artificial Intelligence Development', category: 'AI & ML Development' },
  'machine-learning-development': { title: 'Machine Learning Development', category: 'AI & ML Development' },
  'chatbot-development': { title: 'Chatbot Development', category: 'AI & ML Development' },
  'data-analytics-services': { title: 'Data Analytics Services', category: 'AI & ML Development' },
  'data-migration-services': { title: 'Data Migration Services', category: 'AI & ML Development' },
  'business-intelligence-development': { title: 'Business Intelligence Development', category: 'AI & ML Development' },
  'iot-app-development': { title: 'IOT App Development', category: 'AI & ML Development' },
  'blockchain-development': { title: 'Blockchain Development', category: 'Blockchain Development' },
  'ai-ionic-app-development': { title: 'AI Ionic App Development', category: 'AI & ML Development' },
  'enterprise-ai-development': { title: 'Enterprise AI Development', category: 'AI & ML Development' },
  'ai-in-payments-industry': { title: 'AI in Payments Industry', category: 'AI & ML Development' },
  'ai-ml-development': { title: 'AI & ML Development', category: 'AI & ML Development' },
  'ai-and-ml-development': { title: 'AI & ML Development', category: 'AI & ML Development' },

  // Front End Development Services
  'c-sharp-development': { title: 'C Sharp Development', category: 'Front End Development' },
  'frontend-development': { title: 'Frontend Development', category: 'Front End Development' },
  'front-end-development': { title: 'Front End Development', category: 'Front End Development' },
  'meteor-js-development': { title: 'Meteor JS Development', category: 'Front End Development' },
  'typescript-development-services': { title: 'Typescript Development Services', category: 'Front End Development' },
  'next-js-development': { title: 'Next Js Development', category: 'Front End Development' },
  'react-js-development': { title: 'React JS Development', category: 'Front End Development' },
  'csr-web-development': { title: 'CSR Web Development', category: 'Front End Development' },
  'css-web-development': { title: 'CSS Web Development', category: 'Front End Development' },
  'web-portal-development': { title: 'Web Portal Development', category: 'Front End Development' },
  'web3-development': { title: 'Web3 Development', category: 'Front End Development' },
  'progressive-web-app': { title: 'Progressive Web App', category: 'Front End Development' },

  // Microsoft Development Services
  'microsoft-development': { title: 'Microsoft Development', category: 'Microsoft Development' },
  'asp-net-core-development': { title: 'ASP.NET Core Development', category: 'Microsoft Development' },
  'net-application-development': { title: '.NET Application Development', category: 'Microsoft Development' },
  'asp-net-development': { title: 'ASP.NET Development', category: 'Microsoft Development' },
  'asp-net-migration-service': { title: 'ASP.NET Migration Service', category: 'Microsoft Development' },
  'microsoft-dynamics-365-consulting': { title: 'Microsoft Dynamics 365 Consulting', category: 'Microsoft Development' },
  'kentico-development-services': { title: 'Kentico Development Services', category: 'Microsoft Development' },
  'dotnetnuke-development': { title: 'Dotnetnuke Development', category: 'Microsoft Development' },
  'power-bi-consulting': { title: 'Power BI Consulting', category: 'Microsoft Development' },

  // Blockchain Development Services
  'nft-marketplace-development': { title: 'NFT Marketplace Development', category: 'Blockchain Development' },
  'smart-contracts-development': { title: 'Smart Contracts Development', category: 'Blockchain Development' },
  'bitcoin-wallet-development': { title: 'Bitcoin Wallet Development', category: 'Blockchain Development' },
  'marketplace-app-development': { title: 'Marketplace App Development', category: 'Blockchain Development' },
  'cryptocurrency-wallet-development': { title: 'Cryptocurrency Wallet Development', category: 'Blockchain Development' },
  'bullion-exchange-app-development': { title: 'Bullion Exchange App Development', category: 'Blockchain Development' },
  'digital-wayfinding-solutions': { title: 'Digital Wayfinding Solutions', category: 'Blockchain Development' },
  'ethereum-app-development': { title: 'Ethereum App Development', category: 'Blockchain Development' },

  // Software Development Service
  'product-development': { title: 'Product Development', category: 'Software Development Service' },
  'software-development-service': { title: 'Software Development Service', category: 'Software Development Service' },
  'software-development-services': { title: 'Software Development Service', category: 'Software Development Service' },
  'software-development': { title: 'Software Development Service', category: 'Software Development Service' },
  'digital-transformation-services': { title: 'Digital Transformation Services', category: 'Software Development Service' },
  'digital-transformation-service': { title: 'Digital Transformation Services', category: 'Software Development Service' },
  'application-services': { title: 'Application Services', category: 'Software Development Service' },
  'application-service': { title: 'Application Services', category: 'Software Development Service' },
  'crm-development': { title: 'Crm Development', category: 'Software Development Service' },
  'offshore-software-development': { title: 'Offshore Software Development', category: 'Software Development Service' },
  'invoice-generation-software': { title: 'Invoice Generation Software', category: 'Software Development Service' },
  'software-modernization-services': { title: 'Software Modernization Services', category: 'Software Development Service' },
  'software-modernization-service': { title: 'Software Modernization Services', category: 'Software Development Service' },
  'web-application-development': { title: 'Web Application Development', category: 'Software Development Service' },
  'product-engineering-services': { title: 'Product Engineering Services', category: 'Software Development Service' },
  'it-outsourcing': { title: 'IT Outsourcing', category: 'Software Development Service' },
  'business-application-development': { title: 'Business Application Development', category: 'Software Development Service' },
  'vb6-migration-services': { title: 'VB6 Migration Services', category: 'Software Development Service' },
  'enterprise-mobility-services': { title: 'Enterprise Mobility Services', category: 'Software Development Service' },
  'full-stack-development': { title: 'Full Stack Development', category: 'Software Development Service' },
  'financial-software-development': { title: 'Financial Software Development', category: 'Software Development Service' },
  'travel-software-development': { title: 'Travel Software Development', category: 'Software Development Service' },
  'software-product-discovery': { title: 'Software Product Discovery', category: 'Software Development Service' },

  // AR/VR Development Services (after Virtual Reality App Development)
  'extended-reality-development': { title: 'Extended Reality Development', category: 'AR/VR Development' },
  'extended-reality': { title: 'Extended Reality Development', category: 'AR/VR Development' },
  'xr-development': { title: 'Extended Reality Development', category: 'AR/VR Development' },
  'metaverse-development-company': { title: 'Metaverse Development Company', category: 'AR/VR Development' },
  'metaverse-development': { title: 'Metaverse Development Company', category: 'AR/VR Development' },

  'hire-net-developers': { title: 'Hire .NET Developers', category: 'Hire Back End Developers' },
  'hire-net-developer': { title: 'Hire .NET Developers', category: 'Hire Back End Developers' },
  'hire-dotnet-developers': { title: 'Hire .NET Developers', category: 'Hire Back End Developers' },
  'hire-dotnet-developer': { title: 'Hire .NET Developers', category: 'Hire Back End Developers' },
  'hire-node-js-developers': { title: 'Hire Node JS Developers', category: 'Hire Back End Developers' },
  'hire-node-js-developer': { title: 'Hire Node JS Developers', category: 'Hire Back End Developers' },
  'hire-nodejs-developers': { title: 'Hire Node JS Developers', category: 'Hire Back End Developers' },
  'hire-nodejs-developer': { title: 'Hire Node JS Developers', category: 'Hire Back End Developers' },
  'hire-php-developers': { title: 'Hire PHP Developers', category: 'Hire Back End Developers' },
  'hire-php-developer': { title: 'Hire PHP Developers', category: 'Hire Back End Developers' },
  'hire-express-js-developers': { title: 'Hire Express JS Developers', category: 'Hire Back End Developers' },
  'hire-express-js-developer': { title: 'Hire Express JS Developers', category: 'Hire Back End Developers' },
  'hire-express-developers': { title: 'Hire Express JS Developers', category: 'Hire Back End Developers' },
  'hire-fintech-developers': { title: 'Hire Fintech Developers', category: 'Hire Back End Developers' },
  'hire-fintech-developer': { title: 'Hire Fintech Developers', category: 'Hire Back End Developers' }
};

export const isBackendServiceSlug = (slug) => {
  if (!slug) return false;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '').replace(/^services\//, '');
  
  // Specific exclusions for hire pages (unless explicitly configured in BACKEND_SERVICES_CONFIG)
  if (clean.startsWith('hire-') && !BACKEND_SERVICES_CONFIG[clean]) return false;

  return Boolean(
    BACKEND_SERVICES_CONFIG[clean] ||
    clean === 'symfony-development' ||
    clean === 'symfony' ||
    clean === 'django-development' ||
    clean === 'laravel-development' ||
    clean === 'lamp-development' ||
    clean === 'lamp' ||
    clean === 'big-commerce-development' ||
    clean === 'bigcommerce-development' ||
    clean === 'mongodb-development-services' ||
    clean === 'backend-development' ||
    clean === 'back-end-development' ||
    clean === 'backend' ||
    clean === 'artificial-intelligence-development' ||
    clean === 'artificial-intelligence' ||
    clean === 'machine-learning-development' ||
    clean === 'machine-learning' ||
    clean === 'chatbot-development' ||
    clean === 'chatbot' ||
    clean === 'data-analytics-services' ||
    clean === 'data-analytics' ||
    clean === 'data-migration-services' ||
    clean === 'data-migration' ||
    clean === 'business-intelligence-development' ||
    clean === 'business-intelligence' ||
    clean === 'iot-app-development' ||
    clean === 'iot-development' ||
    clean === 'iot-app' ||
    clean === 'blockchain-development' ||
    clean === 'ai-ionic-app-development' ||
    clean === 'enterprise-ai-development' ||
    clean === 'ai-in-payments-industry' ||
    clean === 'ai-ml-development' ||
    clean === 'ai-and-ml-development' ||
    clean === 'c-sharp-development' ||
    clean === 'frontend-development' ||
    clean === 'front-end-development' ||
    clean === 'meteor-js-development' ||
    clean === 'typescript-development-services' ||
    clean === 'next-js-development' ||
    clean === 'react-js-development' ||
    clean === 'csr-web-development' ||
    clean === 'css-web-development' ||
    clean === 'web-portal-development' ||
    clean === 'web3-development' ||
    clean === 'progressive-web-app' ||
    clean === 'microsoft-development' ||
    clean === 'asp-net-core-development' ||
    clean === 'net-application-development' ||
    clean === 'asp-net-development' ||
    clean === 'asp-net-migration-service' ||
    clean === 'microsoft-dynamics-365-consulting' ||
    clean === 'kentico-development-services' ||
    clean === 'dotnetnuke-development' ||
    clean === 'power-bi-consulting' ||
    clean === 'nft-marketplace-development' ||
    clean === 'smart-contracts-development' ||
    clean === 'bitcoin-wallet-development' ||
    clean === 'marketplace-app-development' ||
    clean === 'cryptocurrency-wallet-development' ||
    clean === 'bullion-exchange-app-development' ||
    clean === 'digital-wayfinding-solutions' ||
    clean === 'ethereum-app-development' ||
    clean === 'product-development' ||
    clean === 'software-development-service' ||
    clean === 'software-development-services' ||
    clean === 'software-development' ||
    clean === 'digital-transformation-services' ||
    clean === 'application-services' ||
    clean === 'crm-development' ||
    clean === 'offshore-software-development' ||
    clean === 'invoice-generation-software' ||
    clean === 'software-modernization-services' ||
    clean === 'web-application-development' ||
    clean === 'product-engineering-services' ||
    clean === 'it-outsourcing' ||
    clean === 'business-application-development' ||
    clean === 'vb6-migration-services' ||
    clean === 'enterprise-mobility-services' ||
    clean === 'full-stack-development' ||
    clean === 'financial-software-development' ||
    clean === 'travel-software-development' ||
    clean === 'software-product-discovery' ||
    clean === 'extended-reality-development' ||
    clean === 'extended-reality' ||
    clean === 'xr-development' ||
    clean === 'metaverse-development-company' ||
    clean === 'metaverse-development'
  );
};

export const isComingSoonServiceSlug = isBackendServiceSlug;

export const BackendComingSoonService = ({ slug }) => {
  const location = useLocation();
  const pathSegments = location.pathname.toLowerCase().split('/').filter(Boolean);
  const pathSlug = pathSegments.length > 1 ? pathSegments[pathSegments.length - 1] : pathSegments[0] || '';
  const activeSlug = (slug || pathSlug || '').toLowerCase().replace(/^services\//, '');

  const serviceData = BACKEND_SERVICES_CONFIG[activeSlug] || {
    title: activeSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    category: 'Services'
  };

  return (
    <div className="min-h-[82vh] bg-white text-slate-800 font-sans flex flex-col justify-center items-center selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`${serviceData.title} - Coming Soon | ${BRAND.name}`}
        description={`Our dedicated ${serviceData.title} page is currently under development. Stay tuned.`}
      />

      {/* Clean, Perfectly Centered Hero Section */}
      <section className="w-full flex-1 flex items-center justify-center relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
        {/* Soft Background Accent Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-indigo-50/30 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f026_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f026_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-[#005F96] font-semibold">{serviceData.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-700 font-semibold truncate max-w-[180px] sm:max-w-none">{serviceData.title}</span>
          </div>

          {/* Centered Content */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-semibold text-[#005F96] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005F96] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005F96]"></span>
              </span>
              <span className="tracking-wider uppercase">{serviceData.category}</span>
            </motion.div>

            {/* Service Name Header */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              {serviceData.title}
            </motion.h2>

            {/* BIG BOLD CENTERED "COMING SOON" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="py-2"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#005F96] via-[#0077BE] to-[#00426A] uppercase drop-shadow-sm">
                COMING SOON
              </h1>
              <div className="mx-auto w-32 h-1.5 bg-gradient-to-r from-transparent via-[#005F96] to-transparent mt-3 rounded-full" />
            </motion.div>

            {/* Clean Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.22 }}
              className="text-base sm:text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed font-normal"
            >
              This service page is currently under development. Stay tuned for exciting updates!
            </motion.p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BackendComingSoonService;
