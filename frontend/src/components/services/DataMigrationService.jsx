import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import OurMobileAppExpertiseServices from './OurMobileAppExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppCompanyBenefits from './MobileAppCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import { SapphireSeasonedExpertsSection } from './SapphireSeasonedExpertsSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import { TransformativeImpactSection } from './TransformativeImpactSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';

const DataMigrationCuttingEdgeSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Cloud Database Migration',
      desc: 'Seamlessly migrate legacy on-premise relational and NoSQL databases to cloud environments like AWS RDS, Azure SQL, and Google Cloud Bigtable with zero downtime.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 8h4M7 12h8" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Automated ETL & ELT Pipelines',
      desc: 'Build resilient Airflow, dbt, and Kafka data pipelines for continuous extraction, transformation, cleansing, and validation during enterprise data migrations.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Data Warehouse Modernization',
      desc: 'Migrate legacy SQL databases and data marts to modern cloud warehouses such as Snowflake, Databricks, and Google BigQuery with automated schema translation.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h12M6 12h8M6 16h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Heterogeneous Schema Conversion',
      desc: 'Convert complex database schemas, stored procedures, triggers, and views from Oracle/SQL Server to PostgreSQL or MySQL with 100% data integrity.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Real-Time Change Data Capture (CDC)',
      desc: 'Utilize Debezium, AWS DMS, and Qlik Replicate for real-time CDC streaming, allowing continuous live data synchronization during migration cutovers.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Data Cleansing & Integrity Verification',
      desc: 'Perform automated checksum verification, deduplication, row-level validation, and data quality audits before, during, and after migration.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden border-b border-slate-100 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
            Cutting-Edge Technologies Firevy Use for Data Migration<br />Development
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${carouselIndex * (100 / 3 + 0.8)}%)`
            }}
          >
            {technologies.map((item) => (
              <div
                key={item.id}
                className="w-[88%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-xl bg-[#EAF5FF] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#BAE6FD]/50 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-[800] text-[16.5px] sm:text-[17.5px] text-[#0B0F19] mb-2 leading-snug tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.6] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous Technologies"
            className="text-slate-800 hover:text-[#005F96] transition-colors cursor-pointer select-none text-2xl font-bold p-1"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Technologies"
            className="text-slate-800 hover:text-[#005F96] transition-colors cursor-pointer select-none text-2xl font-bold p-1"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const DataMigrationDigitalTransformationSection = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'DataMigration Corp',
      bgColor: '#EBF4F6',
      logo: (
        <div className="text-2xl sm:text-3xl font-[900] tracking-wider text-slate-900 mb-3 font-sans">
          DATA<span className="text-[#0084D1]">MIGRATION</span>
        </div>
      ),
      desc: 'DataMigration Corp is an enterprise data transformation platform delivering zero-downtime database migrations, change data capture, and cloud data warehouse conversions.',
      bullets: [
        'Migrated 15 TB heterogenous database cluster with zero downtime',
        'SOC2 Level 2 certified cloud migration pipeline architecture'
      ],
      mainImg: '/images/case-study-car.png'
    },
    {
      id: 2,
      company: 'L&T Technology Services',
      bgColor: '#F5EFEB',
      logo: (
        <div className="mb-4">
          <span className="inline-block bg-[#0B2545] text-white font-serif font-black text-xl px-2 py-0.5 tracking-tighter">
            L&amp;T
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-800 uppercase block mt-1 font-sans">
            Technology Services
          </span>
        </div>
      ),
      desc: 'L&T enabled enterprise clients with end-to-end cloud database migrations, data lake house conversions, and real-time CDC synchronization.',
      bullets: [
        'Enhanced database migration throughput by 52%',
        'Automated schema translation and zero-loss integrity verification'
      ],
      mainImg: '/images/case-study-construction.png'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 text-left font-sans border-b border-slate-100">
      <Container className="max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Enterprise Data Migration Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-xs flex flex-col justify-between"
            >
              <div>
                {item.logo}
                <p className="text-[14px] text-[#475569] leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <span className="text-[#005F96] font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export const DataMigrationService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased text-left selection:bg-sky-500 selection:text-white">
      <SEO
        title="Data Migration Services Company | Zero Downtime Cloud & Database Migration"
        description="Empower your business with enterprise Data Migration Services. Seamless database migration, cloud data warehouse modernization, and zero-downtime ETL pipelines."
        canonical="/services/data-migration-services"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-white text-slate-900 text-left font-sans relative overflow-hidden">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18] font-sans"
                style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
              >
                Data Migration Services in USA
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Migrating data securely and seamlessly is crucial for every business, and you need to rely on a trusted service provider like us. We ensure smooth data transfer with zero data loss, enhanced security, and minimal downtime. Our expert team handles complex migrations with precision, whether it's cloud, database, or application data. With Cross-platform cloud data migration company, you get scalable, cost-effective, and hassle-free solutions tailored to your business needs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">80+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Mobile App<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">600+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Project Completed in<br />Mobile Technology
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center">
                <img
                  src="/images/data_migration_hero.png"
                  alt="Data Migration Services in USA"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/cloud_analytics_hero.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BrandLogoMarquee />

      {/* SECTION 1: Outsource Automated Data Migration Services Today! */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto">
                <img
                  src="/images/data_migration_sec1.png"
                  alt="Outsource Automated Data Migration Services Today!"
                  className="w-full h-auto object-contain select-none filter drop-shadow-sm transition-transform duration-500 hover:scale-102"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/cloud_analytics_about.svg';
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25] font-sans">
                Outsource Automated Data<br />Migration Services Today!
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Once you Outsource Database Migration Services to us, we will take the time to evaluate what your firm requires before we put up a plan that is crafted just for your company. We will analyze the apps and data your company needs and collaborate with you to specify the aspects of migration that are vital to your company. In the data sources you already have, we will try to identify any deficiencies or opportunities for improvement that need to be addressed. We provide Enterprise data migration solutions, End-to-end data migration support, AWS and Azure data migration services by performing data analysis, interpretation, and architecture, checking the integrity of the migrated data and confirming that the migration was successful.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Brief About Data Migration Services */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                Brief About Data Migration<br />Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                With Google data migration services provider, you may improve your performance by using database migration experts, which helps you extract more data and predict trends, behaviors, events, and other occurrences.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                We have a detailed knowledge of several procedures unique to a particular sector and competence in implementing the full range of Blockchain solutions.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto">
                <img
                  src="/images/data_migration_sec3.png"
                  alt="Brief About Data Migration Services"
                  className="w-full h-auto object-contain select-none filter drop-shadow-sm transition-transform duration-500 hover:scale-102"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/cloud_analytics_about.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Blue Awards Banner */}
      <section className="w-full bg-[#005F96] text-white py-6 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-[800] tracking-tight text-white leading-[1.2] max-w-xs sm:max-w-sm text-left">
                World Wide Top Rated IT<br />Company on Clutch
              </h3>
              <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <g fill="#F59E0B">
                    <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                    <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                  </g>
                  <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                  <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                  <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                  <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                </svg>
              </div>
            </div>

            <div className="w-full lg:flex-1 overflow-hidden relative">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Get 100% Customizable Data Migration Services By Experts */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans">
        <Container className="max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Get 100% Customizable Data Migration Services By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-[#F0F8FF] border border-sky-100 rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden shadow-sm">
                <span className="text-5xl sm:text-6xl text-[#005F96] font-serif font-black leading-none block mb-4">“</span>
                <h3 className="text-2xl sm:text-[26px] font-[800] text-[#005F96] leading-[1.3] tracking-tight">
                  Move From On-Premise<br />Infrastructure To<br />the Cloud
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Our AWS cloud data migration services professionals in data migration, integration, ETL, and ESB have a wealth of expertise in the design, development, and implementation of data migration services in AWS. We know how to transfer and manage your data by using solutions for data warehousing and data migration that are both comprehensive and highly effective. You can Outsource Database Migration Services to us and let our experts manage the things for you.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                To ensure that any data migration goes off without a hitch and meets with complete success, it is vital to choose a data migration model that aligns with your organization's needs. As a data migration service provider, we value businesses in terms of performance, security, and return on investment. Every stage of the ESB or ETL process will be modified to meet your specific requirements and aims in terms of the outputs. Our data migration services company will guarantee that all the extracted data is successfully processed and converted before being loaded into the data warehouse.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Cutting Edge Technologies */}
      <DataMigrationCuttingEdgeSection />

      {/* SECTION 5: Our Premium Services */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS */}
      <SapphireSeasonedExpertsSection />

      {/* INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS */}
      <IndustryFocusedInsightsSection title="Industry-Focused Insights To Elevate Your Business" />

      {/* ABOUT US STATS */}
      <AboutUsStats companyName="Sapphire" />

      {/* EXPLORE THE TRANSFORMATIVE IMPACT OF DATA MIGRATION APP */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Data Migration App On Your Business Success" />

      {/* SAPPHIRE'S COMPREHENSIVE SUITE OF MOBILE APP DEVELOPMENT SERVICES */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Sapphire’s Comprehensive Suite of Mobile App Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mobile App UI/UX Design',
                desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
              },
              {
                title: 'MVP Development',
                desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
              },
              {
                title: 'Custom App Development',
                desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
              },
              {
                title: 'Startup App Development',
                desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
              },
              {
                title: 'Enterprise App Development',
                desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
              },
              {
                title: 'Embedded IoT App Development',
                desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE DATA MIGRATION SERVICES */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke Data Migration Services" />

      {/* SECTION 6: Success Stories */}
      <SuccessStoriesSection />

      {/* SECTION 7: Proud Awards */}
      <ProudAwardsBanner />

      {/* SECTION 8: Benefits */}
      <MobileAppCompanyBenefits />

      {/* SECTION 9: Our Expertise */}
      <OurMobileAppExpertiseServices />

      {/* SECTION 10: Hiring Models */}
      <AndroidHiringModels />

      {/* SECTION 11: Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION 12: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile data migration engineering life cycle from pre-migration schema audit and pipeline architecture to live CDC cutover and post-migration validation." />

      {/* SECTION 13: Our Story Their Words */}
      <OurStoryTheirWordsSection />

      {/* SECTION 14: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* SECTION 15: Success Matrix */}
      <SuccessMatrix />

      {/* SECTION 16: Featured In Brands */}
      <FeaturedInBrandsSection />

      {/* SECTION 17: Case Studies Slider (Matching Image 2 Copy-to-Copy) */}
      <DigitalTransformationCaseStudies />

      {/* SECTION 18: FAQ */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to your queries and provide solutions that captivate users. Feel free to contact us in case of any query which is not mentioned below."
        initialOpenIndex={null}
      />

      {/* SECTION 19: Recent Blogs */}
      <MobileAppRecentBlogsSection />

      {/* SECTION 20: What Sets Us Apart */}
      <MobileAppWhatSetsUsApartSection />

      {/* SECTION 21: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have A Data Migration Challenge To Address ?"
        subtitle="Get access to top Data Migration Specialists to transform and migrate your enterprise data seamlessly."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default DataMigrationService;
