import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

export const MySqlDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated MySQL DBA & Developer Squad',
    appType: 'Custom MySQL Database Development & Optimization',
    budget: '$15,000 - $40,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // 6 Benefits of MySQL Development
  const benefitsItems = [
    {
      title: 'High Performance & Sub-Millisecond Speed',
      desc: 'MySQL delivers exceptional transaction speed, indexing optimizations, and query caching for high-throughput enterprise databases and high-traffic web apps.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="22" height="7" rx="2" />
          <circle cx="8" cy="9.5" r="1" fill="currentColor" />
          <circle cx="12" cy="9.5" r="1" fill="currentColor" />
          <rect x="4" y="16" width="22" height="7" rx="2" />
          <circle cx="8" cy="19.5" r="1" fill="currentColor" />
          <circle cx="12" cy="19.5" r="1" fill="currentColor" />
          <rect x="4" y="26" width="22" height="7" rx="2" />
          <circle cx="8" cy="29.5" r="1" fill="currentColor" />
          <circle cx="12" cy="29.5" r="1" fill="currentColor" />
          <rect x="25" y="4" width="8" height="8" rx="1.5" fill="#E0F2FE" stroke="#0084D1" strokeWidth="1.5" />
          <path d="M27 10L31 6M31 6H28M31 6V9" stroke="#0084D1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'ACID Compliance & Data Integrity',
      desc: 'InnoDB engine provides complete ACID transaction support, foreign key constraints, crash recovery, and multi-version concurrency control (MVCC).',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="24" height="28" rx="3" />
          <line x1="14" y1="28" x2="22" y2="28" />
          <path d="M16 12v6a2 2 0 0 0 4 0v-4" />
          <path d="M20 14v4a2 2 0 0 0 4 0v-2" />
          <path d="M12 15v5a6 6 0 0 0 12 0v-2" />
        </svg>
      )
    },
    {
      title: 'Scalability & Replication Clusters',
      desc: 'Scale horizontally and vertically using Master-Slave replication, MySQL InnoDB Cluster, Group Replication, and Galera Cluster for high availability.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14v8h4l10 6V8L10 14H6z" />
          <path d="M24 12a5 5 0 0 1 0 12" />
          <path d="M27 9a9 9 0 0 1 0 18" />
          <path d="M10 22v7a2 2 0 0 0 2 2h2" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security & Data Protection',
      desc: 'Robust access control, SSL/TLS data-in-transit encryption, transparent data encryption (TDE), audit logging, and automated cloud backup configurations.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="4" width="20" height="28" rx="3" />
          <circle cx="15" cy="28" r="1" fill="currentColor" />
          <rect x="16" y="10" width="15" height="11" rx="2" fill="#E0F2FE" stroke="#0084D1" strokeWidth="1.5" />
          <line x1="16" y1="14" x2="31" y2="14" stroke="#0084D1" strokeWidth="1.5" />
          <text x="21" y="19" fontSize="6" fill="#0084D1" fontWeight="bold">$</text>
        </svg>
      )
    },
    {
      title: 'Open Source Flexibility & Cloud Native',
      desc: 'Seamlessly deploy MySQL across AWS RDS, Azure Database for MySQL, Google Cloud SQL, or on-premise dedicated servers with zero vendor lock-in.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="4" width="22" height="28" rx="3" />
          <line x1="15" y1="28" x2="21" y2="28" />
          <circle cx="18" cy="13" r="3.5" />
          <path d="M12 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      )
    },
    {
      title: 'JSON & Hybrid NoSQL Capabilities',
      desc: 'Store and query unstructured JSON documents alongside relational tables using MySQL Document Store and native JSON functions.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="28" height="26" rx="3" />
          <line x1="4" y1="12" x2="32" y2="12" />
          <rect x="8" y="19" width="3" height="6" fill="currentColor" />
          <rect x="14" y="16" width="3" height="9" fill="currentColor" />
          <rect x="20" y="14" width="3" height="11" fill="currentColor" />
          <circle cx="26" cy="20" r="3.5" strokeWidth="1.5" />
          <path d="M26 16.5V20H29.5" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <img src="/images/ic_fixed_price.svg" alt="Fixed Price" className="w-12 h-12 object-contain" />
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <img src="/images/ic_time_material.svg" alt="Time Material" className="w-12 h-12 object-contain" />
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <img src="/images/ic_full_time.svg" alt="Dedicated Team" className="w-12 h-12 object-contain" />
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <img src="/images/bucketapproch.svg" alt="Buckets Approach" className="w-12 h-12 object-contain" />
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // MySQL Expertise Cards
  const pythonExpertiseCards = [
    {
      id: 1,
      title: 'Custom MySQL Database Schema Architecture',
      desc: 'We design normalized, scalable MySQL database schemas with optimized primary keys, foreign key constraints, indexes, and partitioning strategies.'
    },
    {
      id: 2,
      title: 'Query Optimization & Performance Tuning',
      desc: 'Eliminate slow queries and CPU spikes with EXPLAIN plan analysis, index optimization, query rewriting, and MySQL buffer pool tuning.'
    },
    {
      id: 3,
      title: 'MySQL Replication & High Availability (HA)',
      desc: 'Architect Master-Slave replication, MySQL Group Replication, and InnoDB Clusters with automated failover for 99.99% database uptime.'
    },
    {
      id: 4,
      title: 'Database Migration & Version Upgrades',
      desc: 'Safely upgrade legacy MySQL 5.7 to MySQL 8.x or migrate from Oracle/SQL Server to MySQL with zero data loss and minimal downtime.'
    },
    {
      id: 5,
      title: 'Managed Cloud MySQL Services (AWS RDS / Azure / GCP)',
      desc: 'Configure and maintain managed cloud MySQL instances on AWS RDS Aurora, Azure Database for MySQL, and GCP Cloud SQL.'
    },
    {
      id: 6,
      title: 'Database Security Auditing & Backup Solutions',
      desc: 'Implement TDE data encryption, SSL connections, SQL injection defense, automated point-in-time recovery (PITR), and disaster recovery plans.'
    },
    {
      id: 7,
      title: 'MySQL Stored Procedures & Triggers',
      desc: 'Develop high-performance stored procedures, database functions, triggers, and scheduled EVENT jobs for complex business logic.'
    }
  ];

  // Official MySQL FAQs
  const mysqlFaqs = [
    {
      q: '1. What makes MySQL the leading database choice for web applications?',
      a: 'MySQL combines ACID-compliant reliability, high read/write performance, extensive community support, and seamless compatibility with Node, PHP, Python, Java, and .NET.'
    },
    {
      q: '2. How do you optimize slow MySQL queries and high CPU load?',
      a: 'We perform EXPLAIN query analysis, add missing composite indexes, optimize buffer pool memory allocation, tune slow query logs, and implement Redis query caching.'
    },
    {
      q: '3. Can you handle seamless MySQL 5.7 to MySQL 8.0 migration?',
      a: 'Yes! We handle full compatibility testing, SQL mode adjustments, index verification, and automated data migration with zero downtime.'
    },
    {
      q: '4. Do you support cloud database deployments on AWS RDS & Azure?',
      a: 'Absolutely. We configure automated backups, read-replicas, multi-AZ deployment, and auto-scaling on AWS RDS, Azure Database for MySQL, and GCP Cloud SQL.'
    },
    {
      q: '5. How do you ensure enterprise security for MySQL databases?',
      a: 'We enforce TLS/SSL connection encryption, Role-Based Access Control (RBAC), password policy validation, audit logging, and private subnet isolation.'
    },
    {
      q: '6. What hiring models do you offer for MySQL DBAs and Developers?',
      a: 'We offer Dedicated MySQL DBA Squads, Hourly Time & Material contracts, Fixed Price projects, and Resource Bucket plans to fit your technical needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans leading-relaxed selection:bg-[#0084D1] selection:text-white">
      <SEO
        title="MySQL Database Development & Optimization Company | Firevy.Co"
        description="Transform your enterprise data infrastructure with custom MySQL database architecture, query optimization, DBA consulting, high availability replication, and cloud migrations."
        keywords="mysql development company, mysql database development, mysql dba consulting, mysql query optimization, hire mysql developers, aws rds mysql, Firevy.Co"
      />

      {/* 1. HERO BANNER: Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="MySQL Development Company"
        subtitle="Leverage the potential of stable, efficient, and cost-effective database solutions through MySQL development services. We offer custom database architectures and applications for companies of all sizes—be it a startup requiring a light system or an enterprise that needs a solid, scalable database backend. With an eye on affordability and accuracy, we develop custom solutions that cater to your precise data requirements. Ask for a free quote today and see the difference a properly organized MySQL Application development services can bring to your business processes."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        stats={[
          { value: '100+', label: 'Software Developers' },
          { value: '20+', label: 'Fortunes 500 Companies' },
          { value: '1000+', label: 'Project Completed In Software' },
          { value: '320+', label: '5-Star Clutch Reviews' }
        ]}
        heroImage="/images/mysql_hero_vector.png"
      />

      {/* 2. SECTION: Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* 2.5. SECTION: Build Robust Solution With MYSQL Database Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg p-2">
                <img
                  src="/images/mysql_sec3_illustration.png"
                  alt="Build Robust Solution With MYSQL Database Development Services"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
                Build Robust Solution With MYSQL Database Development Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We are a top-rated MySQL development company with a well-established history of providing secure, high-performance, and scalable database solutions to entrepreneurs, businesses, and startups. Our expertise is in web-based systems and customized software solutions on top of sound MySQL architecture. From data modeling to optimization and management of complicated queries, we assist businesses to streamline operations and make informed data-driven decisions. With decades of experience in the industry and a robust portfolio in various industries, we bring innovative and customized solutions to each project.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: World Wide Top Rated IT Company on Clutch */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Solve Real Problems with MYSQL Development */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
              Solve Real Problems with MYSQL Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-2xl p-7 sm:p-9 relative flex flex-col justify-between min-h-[260px] border border-sky-100 shadow-xs text-left">
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#0078D7] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Secure, Scalable &<br />Future-Ready<br />Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                MySQL Database Development Company aim at creating secure, scalable, and high-performing databases that are the core of business applications in different industries. Whether developing a CMS, ERP, CRM, or an eCommerce platform, we make sure data is processed with efficiency, relationships are established logically, and performance is maximized from scratch.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We have been delivering successful worldwide projects to clients across industries like logistics, healthcare, finance, retail, and others for many years. Our developers are proficient at demystifying complicated data flows and putting them into simple-to-use, streamlined systems. We offer technical expertise with business acumen to develop customized MySQL-driven applications with real-time performance and provide maximum scalability as your company expands.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Cutting Edge Technologies */}
      <HybridAppCuttingEdgeTechnologiesSection />

      {/* 7. SECTION: Premium Services Grid */}
      <PremiumServicesGrid />

      {/* 12. SECTION: Success Stories */}
      <SuccessStoriesSection />

      {/* Proud Awards Banner ("Proud To Have Picked These Up Along The Way") */}
      <ProudAwardsBanner />

      {/* 3. SECTION: 6 Benefits of MySQL Development */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Benefits of MySQL Database Development Services
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
              Selecting our MySQL development services provides a reliable data infrastructure that grows with your business and improves operational management. Here's how our services deliver value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {benefitsItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:border-[#0084D1]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-5 p-3 rounded-xl bg-white shadow-sm inline-block group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] mb-3 group-hover:text-[#0084D1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>




      {/* Business Friendly Hiring Models */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed font-sans">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {hiringModels.map((model, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 text-center items-center"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="mb-4 flex justify-center items-center h-14 w-14 mx-auto">{model.icon}</div>
                  <h3 className="text-xl font-bold text-[#0B0F19] mb-2 text-center">{model.title}</h3>
                  <p className="text-xs text-slate-600 mb-6 font-normal leading-relaxed text-center min-h-[54px]">{model.desc}</p>
                  <ul className="space-y-2.5 mb-6 text-left w-full pl-1">
                    {model.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs text-slate-700 font-medium leading-normal">
                        <svg className="w-4 h-4 text-[#0078D7] mr-2 shrink-0 mt-0.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-[#005F96] text-white font-semibold text-sm hover:bg-[#004a75] transition-colors shadow-xs mt-2">
                  Hire Now
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION: Innovative Solutions Video */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow />

      {/* 13. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 14. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 15. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 16. SECTION: Technology Stack (Exact 1:1 Match) */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] text-slate-900 font-sans text-left border-y border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              We use the latest MySQL development technology and process to make sure we deliver the best. Have a look at our technology stack:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {/* Box 1: Backend */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="18,3 26,7 18,11 10,7" />
                  <polyline points="10,7 10,14 18,18 18,11" />
                  <polyline points="26,7 26,14 18,18" />
                  <polygon points="10,16 18,20 10,24 2,20" />
                  <polyline points="2,20 2,27 10,31 10,24" />
                  <polyline points="18,20 18,27 10,31" />
                  <polygon points="26,16 34,20 26,24 18,20" />
                  <polyline points="18,20 18,27 26,31 26,24" />
                  <polyline points="34,20 34,27 26,31" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- .NET</div>
                <div>- Node</div>
                <div>- Java</div>
                <div>- Ruby on Rails</div>
                <div>- PHP</div>
              </div>
            </div>

            {/* Box 2: Front End */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="30" height="26" rx="3" ry="3" />
                  <line x1="3" y1="12" x2="33" y2="12" />
                  <circle cx="7" cy="8.5" r="1" fill="currentColor" />
                  <circle cx="11" cy="8.5" r="1" fill="currentColor" />
                  <circle cx="15" cy="8.5" r="1" fill="currentColor" />
                  <line x1="13" y1="12" x2="13" y2="31" />
                  <line x1="6" y1="17" x2="10" y2="17" />
                  <line x1="6" y1="21" x2="10" y2="21" />
                  <line x1="6" y1="25" x2="10" y2="25" />
                  <rect x="17" y="16" width="12" height="11" rx="1.5" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Front End</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Java</div>
                <div>- Kotlin</div>
                <div>- RxJava</div>
                <div>- RxKotlin</div>
                <div className="col-span-2">- Coroutines Kotlin</div>
              </div>
            </div>

            {/* Box 3: Database */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="18" cy="8" rx="14" ry="4.5" />
                  <path d="M4 8v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5V8" />
                  <path d="M4 15v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                  <path d="M4 22v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Database</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- MySQL 8.x</div>
                <div>- InnoDB Engine</div>
                <div>- Redis Cache</div>
                <div>- PostgreSQL</div>
              </div>
            </div>

            {/* Box 4: DevOps */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 16L18 22L31 16V26L18 32L5 26V16Z" />
                  <line x1="18" y1="22" x2="18" y2="32" />
                  <path d="M5 16L11 8L24 14L18 22Z" />
                  <path d="M31 16L25 8L12 14L18 22Z" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">DevOps</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- AWS RDS</div>
                <div>- Docker</div>
                <div>- GitHub Actions</div>
                <div>- Azure Database</div>
              </div>
            </div>

            {/* Box 5: Testing */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="13" r="9" />
                  <path d="M13.5 13l3 3 6-6" strokeWidth="2.2" />
                  <path d="M13 21.5L9 32l5-2.5 4 2.5v-10.5" />
                  <path d="M23 21.5L27 32l-5-2.5-4 2.5v-10.5" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Testing</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Sysbench</div>
                <div className="col-span-2">- MySQL Workbench Audit</div>
                <div className="col-span-2">- Percona Toolkit</div>
              </div>
            </div>

            {/* Box 6: Project Management Tools */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="5" />
                  <path d="M18 2v4M18 30v4M2 18h4M30 18h4M6.7 6.7l2.8 2.8M26.5 26.5l2.8 2.8M6.7 29.3l2.8-2.8M26.5 9.5l2.8-2.8" />
                  <circle cx="18" cy="18" r="11" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Project Management Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Jira</div>
                <div>- Microsoft Teams</div>
                <div>- Slack</div>
                <div>- Trello</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 17. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 18. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 19. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={mysqlFaqs} />

      {/* 20. SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />
    </div>
  );
};

export default MySqlDevelopmentService;
