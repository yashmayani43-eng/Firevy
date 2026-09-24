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
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

export const MachineLearningDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Machine Learning Squad',
    appType: 'Custom Machine Learning Application Development',
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

  // 6 Benefits of Machine Learning Development
  const benefitsItems = [
    {
      title: 'Scale and Flex',
      desc: 'The versatile and adaptable Machine Learning platform can expand with your company. ML enables algorithms to scale seamlessly without infrastructure bottlenecks or performance drops.',
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
      title: 'Management and Usability',
      desc: 'Businesses can build and deploy intelligent models using user-friendly MLOps workflows and automated pipelines. ML tools streamline model training, evaluation, and business management.',
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
      title: 'Practical Predictive & Automated Tools',
      desc: 'Machine Learning offers powerful predictive analytics, anomaly detection, NLP, and recommendation engines. Businesses can transform raw data into actionable insights and boost business ROI.',
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
      title: 'Model & API Integration',
      desc: 'Machine Learning algorithms interface with top cloud platforms, microservices, and web APIs. Enterprise applications leverage fast, reliable model inference endpoints securely.',
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
      title: 'Mobile & Edge AI Integration',
      desc: 'For seamless intelligent experiences across devices, machine learning models are optimized for mobile and edge platforms. Real-time inference ensures zero latency for end users.',
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
      title: 'Powerful Analytics and Reports',
      desc: 'Businesses can track model accuracy, monitor drift, and obtain valuable data insights using comprehensive ML monitoring dashboards to continuously refine algorithms.',
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

  // Official Machine Learning FAQs
  const mlFaqs = [
    {
      q: '1. What makes Machine Learning ideal for enterprise automation and predictive intelligence?',
      a: 'Machine Learning algorithms process huge volumes of data to discover patterns, automate complex decision-making, and provide predictive capabilities that scale effortlessly.'
    },
    {
      q: '2. Can Machine Learning models support high-traffic enterprise applications?',
      a: 'Absolutely. With async web frameworks (FastAPI, Flask), model quantization, TensorRT acceleration, and microservices on AWS/GCP, ML systems handle millions of daily predictions.'
    },
    {
      q: '3. Do you handle legacy model migration and code refactoring?',
      a: 'Yes! We specialize in optimizing legacy AI models, upgrading deep learning pipelines, and containerizing ML microservices with zero downtime.'
    },
    {
      q: '4. How do you secure Machine Learning pipelines and data assets?',
      a: 'We implement strict data encryption at rest and in transit, OAuth2/JWT API access controls, anonymization techniques, and compliance with GDPR/SOC-2 standards.'
    },
    {
      q: '5. Do you assist with cloud MLOps and serverless deployment?',
      a: 'Yes! We configure complete Docker containerization, AWS SageMaker / GCP Vertex AI deployment, CI/CD pipeline automation, and automated model retrain loops.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign comprehensive NDAs prior to any technical discovery or project kickoff, ensuring complete confidentiality and 100% IP ownership.'
    }
  ];

  // 9 Cards Expertise for Machine Learning Developers
  const mlDeveloperExpertise = [
    {
      id: 1,
      title: 'Machine Learning Model Design & Setup',
      desc: 'The initial step in your ML journey is defining dataset parameters and architecture. Our engineers select appropriate algorithms, clean data pipelines, and design custom model architectures.',
      badgeBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Machine Learning System Integration',
      desc: 'We seamlessly integrate trained machine learning models into existing web, mobile, and cloud software backends using RESTful microservices and lightweight APIs.',
      badgeBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'MLOps & Pipeline Automation',
      desc: 'We build end-to-end MLOps pipelines using Kubeflow, MLflow, and CI/CD tools to automate data processing, continuous training, model evaluation, and deployment.',
      badgeBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Custom Machine Learning Development',
      desc: 'Our machine learning development service builds bespoke predictive models, computer vision classifiers, and NLP processing engines tailored to your exact business specifications.',
      badgeBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <polyline points="12 9 12 12 13.5 13.5" />
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83" />
          <path d="M7.49 6.65l.35-3.83A2 2 0 0 1 9.83 1h4.34a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Deep Learning & Neural Networks',
      desc: 'We leverage PyTorch and TensorFlow to build advanced deep learning models for speech recognition, recommendation systems, automated image processing, and LLM fine-tuning.',
      badgeBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Secure Data Engineering & Pipelines',
      desc: 'Data quality is fundamental to machine learning. We engineer scalable ETL data pipelines, feature stores, and automated cleaning protocols to ensure model accuracy.',
      badgeBg: 'bg-[#E0F2FE]',
      iconColor: 'text-[#0284C7]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Intelligent Search & Vector Databases',
      desc: 'We implement semantic search and vector embeddings using Pinecone, Milvus, and Elasticsearch to enable instant multi-modal search capabilities across your data.',
      badgeBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Model Optimization & Quantization',
      desc: 'We optimize ML models using ONNX, TensorRT, and model pruning techniques for low-latency inference on cloud servers and edge devices.',
      badgeBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      )
    },
    {
      id: 9,
      title: 'ML Support & Monitoring Maintenance',
      desc: 'Continuous monitoring is essential for deployed models. We provide round-the-clock maintenance, drift detection, security updates, and automated retraining.',
      badgeBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    }
  ];

  // Exact Stats for Machine Learning Development
  const mlStats = [
    { value: '77+', label: 'ML Engineers' },
    { value: '19+', label: 'Fortune 500 Companies' },
    { value: '583+', label: 'AI/ML Projects Completed' },
    { value: '311+', label: '5-Star Clutch Reviews' }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Machine Learning Development Services in USA | Custom AI & ML Solutions | Firevy.Co"
        description="Leading Machine Learning Development Company. We engineer fast, secure, and scalable enterprise AI/ML applications, neural networks, and predictive data pipelines."
        canonical="/services/machine-learning-development"
      />

      {/* 1. Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Machine Learning App Development in USA"
        subtitle="Machine Learning is a wonderful accelerator due to its data-driven decision making, predictive capabilities, and rapid model deployment."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        serviceCategory="hybrid"
        stats={mlStats}
        heroImage="/images/ml_hero_illustration.png"
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* 3. SECTION: Machine Learning Market Stats */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Chart Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/ai_market_stats_chart.png"
                  alt="Machine Learning Market Stats"
                  className="w-full h-auto max-w-[460px] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Machine Learning Market Stats
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                The global machine learning market size was roughly USD 38.73 billion in 2022. As per our research, the market is expected to reach USD 528.10 billion by 2030, exhibiting a CAGR of 38.3% during the forecast period.
              </p>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[8px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg font-sans"
                >
                  <span>Connect With An Expert</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Affordable Machine Learning App Development Services */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Affordable Machine Learning App Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Many small and medium-sized enterprises (SMEs) choose top-rated Machine Learning Development Services for a wide range of AI projects—from predictive analytics tools to complex enterprise neural networks. Machine Learning excels in building RESTful inference APIs, making it ideal for integrating with existing systems or creating new, efficient interfaces. As a reliable Machine Learning development company, we offer a team of dedicated ML engineers with over a decade of experience in delivering high-quality, scalable solutions.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="Affordable Machine Learning App Development Services"
                  className="w-full h-auto max-w-[460px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION: World Wide Top Rated IT Company on Clutch */}
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
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
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
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
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
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
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
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. SECTION: Get A 100% Customizable Machine Learning Development By Experts */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Machine Learning Development By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Scalable And Robust Machine Learning Applications
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We are a leading Machine Learning application development company backed by certified AI software architects and senior Machine Learning engineers. Our team engineers high-velocity Machine Learning applications that maximize raw processing capabilities, cloud GPUs, and model framework ecosystems.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We know that applications engineered for modern enterprises must deliver instant inference, intelligent data processing, reliable caching, and bank-grade data security. We ensure every Machine Learning deliverable matches your business goals without compromising code maintainability, scalability, or performance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. SECTION: Cutting Edge Technologies Firevy Use For Machine Learning Development */}
      <HybridAppCuttingEdgeTechnologiesSection
        title={"Cutting Edge Technologies Firevy Use For\nMachine Learning Development"}
      />

      {/* 10. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 17. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our Machine Learning Developers */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] text-slate-900 font-sans text-left border-y border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              The Expertise Of Our Machine Learning Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {mlDeveloperExpertise.map((item) => (
              <div
                key={item.id}
                className="group rounded-[14px] p-6 sm:p-7 text-left flex flex-col justify-start transition-all duration-300 ease-in-out cursor-pointer bg-white border-t-[3px] border-b-[3px] border-x border-t-transparent border-b-transparent border-x-slate-200/80 hover:bg-gradient-to-b hover:from-[#E6F6FF] hover:via-[#E1F3FD] hover:to-[#D5EEFA] hover:border-t-[#00A8E8] hover:border-b-[#005F96] hover:border-x-[#BAE6FD] hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon Badge */}
                <div className={`w-11 h-11 rounded-[10px] ${item.badgeBg} ${item.iconColor} flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 leading-snug tracking-tight font-sans">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.68] font-normal font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Center Action Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm sm:text-[15px] transition-all shadow-sm hover:shadow-md cursor-pointer font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* 19. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 20. SECTION: Benefits of Machine Learning Development */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Benefits Of Machine Learning Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              In Machine Learning development, intelligent systems are built and customized utilizing leading AI frameworks. Six significant Machine Learning development benefits:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="mb-2 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 22. SECTION: Business Friendly Hiring Models */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 23. SECTION: Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 24. SECTION: Process We Follow */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from data preprocessing to model training, evaluation, QA testing, and AWS/GCP cloud deployment."
      />

      {/* 25. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 26. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 27. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* Technology Stack Section */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] text-slate-900 font-sans text-left border-y border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              We use the latest Machine Learning development technology and process to make sure we deliver the best. Have a look at our technology stack:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {/* Box 1: Backend & AI Frameworks */}
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
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Backend & AI</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Python</div>
                <div>- PyTorch</div>
                <div>- TensorFlow</div>
                <div>- Scikit-Learn</div>
                <div>- FastAPI</div>
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
                <div>- React</div>
                <div>- Next.js</div>
                <div>- Vue</div>
                <div>- Angular</div>
                <div className="col-span-2">- TypeScript</div>
              </div>
            </div>

            {/* Box 3: Database & Vector Search */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="18" cy="8" rx="14" ry="4.5" />
                  <path d="M4 8v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5V8" />
                  <path d="M4 15v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                  <path d="M4 22v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Database & Vector</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- PostgreSQL</div>
                <div>- MongoDB</div>
                <div>- Pinecone</div>
                <div>- Redis</div>
              </div>
            </div>

            {/* Box 4: DevOps & MLOps */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 16L18 22L31 16V26L18 32L5 26V16Z" />
                  <line x1="18" y1="22" x2="18" y2="32" />
                  <path d="M5 16L11 8L24 14L18 22Z" />
                  <path d="M31 16L25 8L12 14L18 22Z" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">DevOps & MLOps</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Docker</div>
                <div>- Kubernetes</div>
                <div>- AWS SageMaker</div>
                <div>- GCP Vertex AI</div>
              </div>
            </div>

            {/* Box 5: Testing & Validation */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="13" r="9" />
                  <path d="M13.5 13l3 3 6-6" strokeWidth="2.2" />
                  <path d="M13 21.5L9 32l5-2.5 4 2.5v-10.5" />
                  <path d="M23 21.5L27 32l-5-2.5-4 2.5v-10.5" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Testing & Quality</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- PyTest</div>
                <div className="col-span-2">- Deepchecks</div>
                <div className="col-span-2">- Great Expectations</div>
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
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Project Management</h3>
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

      {/* 28. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 29. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 30. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={mlFaqs} />

      {/* 31. SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />
    </div>
  );
};

export default MachineLearningDevelopmentService;
