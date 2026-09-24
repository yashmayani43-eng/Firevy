import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { SapphireSeasonedExpertsSection } from './SapphireSeasonedExpertsSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { TransformativeImpactSection } from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import { SectorsThrivingSection } from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cloud,
  RefreshCw,
  GitBranch,
  Database,
  Lock,
  Workflow,
  Server,
  BarChart3,
  Bot,
  Code2,
  Terminal,
  Activity,
  Globe2,
  Users2,
  Clock,
  TrendingUp,
  FileCode,
  Receipt,
  CreditCard,
  FileText,
  DollarSign
} from 'lucide-react';

export const InvoiceGenerationSoftwareService = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Automated E-Invoicing & OCR',
      desc: 'Our intelligent OCR and AI engines extract itemized data from receipts, purchase orders, and contracts with 99.8% precision, automating invoice creation without clerical manual input.',
      icon: '/images/software_development_company_in_usa/cuttingedge/aiml.svg'
    },
    {
      title: 'Real-Time Tax & Financial Analytics',
      desc: 'Harness automated tax computation algorithms and big data pipelines to assess cash flows, track aging receivables, and predict upcoming revenue streams with live dashboards.',
      icon: '/images/software_development_company_in_usa/cuttingedge/datascience.svg'
    },
    {
      title: 'Cloud Multi-Tenant SaaS Invoicing',
      desc: 'Deploy resilient, elastic billing microservices with 99.99% uptime, seamless multi-region auto-scaling, and secure tenant data isolation across AWS, Azure, and Google Cloud.',
      icon: '/images/software_development_company_in_usa/cuttingedge/cloudcomputing.svg'
    },
    {
      title: 'Interactive Client Invoicing Portals',
      desc: 'Provide your clients with sleek, branded self-service web portals to review real-time statements, download PDF receipts, configure autopay, and dispute discrepancies seamlessly.',
      icon: '/images/software_development_company_in_usa/cuttingedge/arvr.svg'
    },
    {
      title: 'Computer Vision Receipt Parsing',
      desc: 'Empower mobile users to snap photos of physical invoices and paper bills, automatically turning unstructured receipt photos into structured digital line items in seconds.',
      icon: '/images/software_development_company_in_usa/cuttingedge/computervision.svg'
    },
    {
      title: 'IoT & Telematics Metered Invoicing',
      desc: 'Connect connected hardware and telemetry devices to generate real-time usage-based invoices for utility, fleet management, industrial monitoring, and consumption-driven billing.',
      icon: '/images/software_development_company_in_usa/cuttingedge/iot.svg'
    }
  ];

  // Auto-scroll loop for Cutting Edge Tech Carousel
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      if (techScrollContainerRef.current) {
        const container = techScrollContainerRef.current;
        const cardWidth = 320;
        const gap = 20;
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  // Section: The Expertise Of Our Invoice Generation Software Development Services (Matching Screenshot Layout)
  const invoiceExpertiseCards = [
    {
      id: 1,
      title: 'Automated Recurring & Subscription Billing',
      desc: 'We build sturdy subscription management engines that automatically compute proration, tiered pricing, usage overages, and scheduled billing renewals with automated dunning triggers.'
    },
    {
      id: 2,
      title: 'Global E-Invoicing & Statutory Compliance',
      desc: 'Stay compliant across international jurisdictions. Our software seamlessly produces Peppol, ZATCA, Factur-X, and GST/VAT compliant digital XML/PDF invoices with cryptographic validation.'
    },
    {
      id: 3,
      title: 'Multi-Currency & Cross-Border Billing',
      desc: 'Enable seamless global commerce with dynamic real-time FX currency conversions, cross-border tax withholding calculations, and localized multilingual invoice templates.'
    },
    {
      id: 4,
      title: 'Multi-Gateway Payment Rails Integration',
      desc: 'Integrate top payment processors including Stripe, PayPal, Adyen, Square, Authorize.Net, and direct ACH/SEPA bank rails to provide one-click frictionless payment links.'
    },
    {
      id: 5,
      title: 'ERP & Accounting Ledger Synchronization',
      desc: 'Synchronize invoices, credit notes, and settlements with QuickBooks, Xero, NetSuite, SAP, and Sage in real time, eliminating manual journal entries and reconciliation backlogs.'
    },
    {
      id: 6,
      title: 'High-Velocity Batch Invoice Generation',
      desc: 'Generate hundreds of thousands of complex, print-ready PDF invoices in minutes using distributed background worker queues, optimized rendering pipelines, and reliable cloud storage.'
    }
  ];

  // Section: Technology Stack That Sapphire / Firevy Software Developers Use Proficiently (Exact Match to Screenshot)
  const invoiceTechStack = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Vue.js', 'Bootstrap', 'Typescript', 'Backbone.js']
    },
    {
      category: 'Full-stack Frameworks',
      items: ['NestJS', 'Koa.js', 'Nuxt.js', 'Meteor.JS', 'Next.js']
    },
    {
      category: 'Backend Frameworks',
      items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'Django', 'Flask', 'FastAPI']
    },
    {
      category: 'Monitoring and Logging Tools',
      items: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana']
    },
    {
      category: 'Code Management',
      items: ['Bitbucket', 'GitHub', 'GitLab', 'SonarQube', 'maven', 'Gradle']
    },
    {
      category: 'Database',
      items: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
    },
    {
      category: 'Cloud',
      items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)']
    }
  ];

  // Global Invoicing & Billing Software Solutions (Matching Image Layout)
  const globalInvoicingSolutions = [
    {
      title: 'Invoice Generation Software in USA',
      desc: 'Engineered for US enterprises navigating multi-state nexus sales taxes, automated 1099 tracking, and direct ACH payment rails. Our software ensures audit readiness and compliance across all 50 states.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-7 h-7 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <path d="M16 19h2a2 2 0 0 0 2-2v-1" />
          <path d="M4 16v1a2 2 0 0 0 2 2h2" />
          <circle cx="16" cy="13" r="2" />
        </svg>
      )
    },
    {
      title: 'Invoice Generation Software in UK',
      desc: 'Fully compliant with HMRC Making Tax Digital (MTD) and UK VAT regulations. Build automated digital audit trails, instant VAT return exports, and seamless BACS payment gateway integrations.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-7 h-7 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <polyline points="7 10 9 12 7 14" />
          <polyline points="13 10 11 12 13 14" />
          <circle cx="17" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Invoice Generation Software in Canada',
      desc: 'Handle dual tax structures effortlessly with automated GST, PST, and HST calculation across provinces. Supports bilingual English/French invoice generation and EFT payment processing.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-7 h-7 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M6 8l6-5 6 5M4 14l4-6 4 6a4 4 0 0 1-8 0zM16 14l4-6 4 6a4 4 0 0 1-8 0z" />
        </svg>
      )
    },
    {
      title: 'Invoice Generation Software in Australia',
      desc: 'Adhere to ATO e-invoicing standards and PEPPOL network interoperability. Automate 10% GST reporting, ABN validation, and direct BPAY and PayID payment integrations for rapid settlement.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-7 h-7 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <rect x="7" y="7" width="10" height="6" rx="1" />
          <path d="M10 7v-1a2 2 0 0 1 4 0v1" />
        </svg>
      )
    },
    {
      title: 'Invoice Generation Software in Germany',
      desc: 'Compliant with German GoBD and ZUGFeRD / XRechnung standards for structured electronic B2G/B2B invoicing. Built with precision for European SEPA direct debit and strict data protection.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-7 h-7 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <polyline points="8 10 6 12 8 14" />
          <polyline points="12 10 14 12 12 14" />
          <line x1="11" y1="10" x2="9" y2="14" />
        </svg>
      )
    },
    {
      title: 'Invoice Generation Software in UAE',
      desc: 'Compliant with UAE Federal Tax Authority (FTA) guidelines and upcoming ZATCA Phase 2 e-invoicing mandates, with QR codes, cryptographic stamps, and Arabic-English bilingual templates.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-7 h-7 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <rect x="8" y="9" width="8" height="6" rx="1" />
          <line x1="11" y1="12" x2="13" y2="12" />
        </svg>
      )
    }
  ];

  // Benefits Of Invoice Generation Software Development (Using Exact SVGs)
  const invoiceBenefitsList = [
    {
      title: '99.9% Billing Accuracy & Zero Manual Errors',
      desc: 'Eliminate human clerical mistakes, misplaced invoices, and calculation errors with automated line-item computation, tax lookups, and structured invoice validation.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/accuracy.svg"
          alt="99.9% Billing Accuracy"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: '3x Faster Cash Flow & Reduced DSO',
      desc: 'Accelerate your collections cycle with automated recurring billing schedules, 1-click payment links, automated payment reminders, and proactive dunning sequences.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/time_savings.svg"
          alt="Faster Cash Flow"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Global Tax & Statutory Compliance',
      desc: 'Stay 100% compliant with international e-invoicing laws, Peppol, ZATCA, and automated VAT/GST calculations, shielding your organization from costly non-compliance audits.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/scalability.svg"
          alt="Global Tax Compliance"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Seamless ERP & Multi-Gateway Integration',
      desc: 'Unify payments and general ledgers by connecting to Stripe, PayPal, Adyen, QuickBooks, Xero, NetSuite, and custom accounting databases with real-time webhooks.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/cost_savings.svg"
          alt="Seamless ERP Integration"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'High-Volume Scalability & Elasticity',
      desc: 'Engineered on microservices architecture capable of compiling and dispatching millions of customer invoices per hour during end-of-month financial closing runs.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/enhanced_security.svg"
          alt="High-Volume Scalability"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Enterprise Grade Security & Data Privacy',
      desc: 'Protect sensitive financial records with end-to-end data encryption at rest and in transit, role-based access control (RBAC), SOC-2 readiness, and PCI-DSS compliance.',
      icon: (
        <img
          src="/images/servicepagesnew/invoice_generation_software_development/icons/business_insights.svg"
          alt="Enterprise Grade Security"
          className="w-12 h-12 object-contain"
        />
      )
    }
  ];

  // Invoicing Software FAQs
  const invoiceFaqs = [
    {
      question: 'What is custom invoice generation software and why do enterprises need it?',
      answer: 'Custom invoice generation software is a tailored financial technology solution that automates the end-to-end billing lifecycle—from usage tracking and tax calculation to PDF generation, payment gateway processing, and general ledger synchronization. Enterprises need custom software to support complex pricing tiers, eliminate clerical billing mistakes, adhere to regional e-invoicing laws, and speed up cash flow collections.'
    },
    {
      question: 'Can Firevy integrate invoice generation software with our existing ERP and CRM?',
      answer: 'Yes. Our software engineers build secure RESTful and GraphQL APIs that integrate seamlessly with major ERP and CRM platforms such as SAP, Oracle NetSuite, Microsoft Dynamics 365, Salesforce, HubSpot, QuickBooks, and Xero. All invoices, customer details, and payment statuses sync bidirectionally without manual intervention.'
    },
    {
      question: 'How does your software handle recurring subscriptions and metered billing?',
      answer: 'Our billing engines are designed with advanced subscription logic supporting tiered, volume, seat-based, and consumption-driven (metered) pricing models. It handles upgrades, downgrades, proration calculations, automatic discount codes, and scheduled dunning emails automatically.'
    },
    {
      question: 'Does the software support international currencies and multi-country tax compliance?',
      answer: 'Absolutely. We incorporate real-time foreign exchange (FX) feeds, multi-language invoice generation, and automated tax engines that support US Sales Tax, Canadian GST/HST, European VAT, Australian GST, and middle eastern ZATCA regulations. We also implement Peppol-compatible electronic invoicing formats.'
    },
    {
      question: 'What payment gateways and banking rails can be integrated?',
      answer: 'We integrate with leading global payment service providers (PSPs) including Stripe, PayPal, Adyen, Braintree, Square, Authorize.Net, and Razorpay. We also support direct bank integrations including US ACH, European SEPA, UK BACS, and Australian BPAY/PayID.'
    },
    {
      question: 'How do you guarantee the security and privacy of financial billing data?',
      answer: 'Financial security is engineered into every layer. We enforce AES-256 encryption at rest, TLS 1.3 in transit, tokenized payment processing to maintain PCI-DSS compliance, granular role-based access controls (RBAC), and immutable audit logs that comply with SOC 2, GDPR, and ISO 27001 standards.'
    },
    {
      question: 'Can the invoice generation software handle white-label multi-tenant SaaS?',
      answer: 'Yes. If you are a SaaS provider or marketplace, we can build multi-tenant architectures allowing each of your business customers to create branded invoices with their custom logos, color schemes, localized numbering sequences, and dedicated subdomains.'
    },
    {
      question: 'How do we get started with Firevy for invoice generation software development?',
      answer: 'You can begin by scheduling a free consultation through our contact form. Our FinTech architects will evaluate your billing workflows, integration points, and compliance needs to deliver a detailed technical roadmap, milestone estimates, and an architectural prototype.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Top Invoice Generation Software Development Company in USA | Firevy.co"
        description="Automate billing, recurring subscriptions, multi-currency invoicing, and tax compliance with Firevy's custom invoice generation software development services."
        canonical="https://firevy.co/services/invoice-generation-software"
      />

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Identical match to Image 1)                               */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-16 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Invoice Generation Software<br className="hidden sm:inline" /> Development Company
              </h1>

              <p className="text-[14.5px] sm:text-[15px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                At Firevy Software Solutions, our development services provide custom Invoice Software Development services for businesses of all sizes. Whatever the size of your business, whether a startup, SME or large enterprise, we'll support your invoicing and billing process - to help make your invoicing easier - to help ensure increased financial accuracy - to help you save time. With affordability, security and scalability in mind, Cloud Based Invoice Generation Software Company will help you create something tailored to deliver best-fit for every type of business. Want to save manual effort and improve your billing system? Contact us for a free quote and to see how our custom invoice solutions can positively transform your business operations.
              </p>

              {/* 4 Stats (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1">
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Software<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Fortunes 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Project Completed in<br />Software</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004d7c] text-white text-[15px] font-semibold transition-all duration-200 shadow-none space-x-2.5"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[500px] flex justify-center">
                <img
                  src="/images/servicepagesnew/invoice_generation_software_development/img_banner.svg"
                  alt="Invoice Generation Software Development Company"
                  className="w-full h-auto object-contain max-h-[380px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee companyName="Firevy.co" />


      {/* ========================================================================= */}
      {/* 3. DATA MODERNIZATION SERVICES EXPERTS                                    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] flex justify-center">
                <img
                  src="/images/servicepagesnew/software_modernization_services_company/img_about.svg"
                  alt="Data Modernization Services Experts"
                  className="w-full h-auto object-contain max-h-[380px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Data Modernization Services Experts
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As an established software modernization services provider, we have extensive experience delivering secure, web-based systems and enterprise solutions of any size. We take organizations of any size, large scale or startups, and help them to re-engineer legacy systems into smarter, more efficient solutions. We take innovative approaches, industry expertise, global project experience, and smart modernization frameworks to create modernization solutions that ensure maximum ROI while reducing technology debt. Our best in class solutions will fulfill the current business requirements along with future scalability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLUTCH & GOODFIRMS TOP RATED RIBBON                                    */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 6. GET 100% CUSTOMIZABLE INVOICE GENERATION SOFTWARE BY EXPERTS           */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Invoice Generation Software<br className="hidden sm:inline" /> By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card with Shape Pattern & Speech Bubble */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[290px] overflow-visible select-none rounded-xl">
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FF] z-20 pointer-events-none" />

              <div className="mb-4 relative z-10">
                <img
                  src="/images/quotation_mark.svg"
                  alt="Quotation mark"
                  className="w-[52px] h-[49px]"
                />
              </div>

              <h3 className="text-[25px] sm:text-[27px] lg:text-[29px] font-bold text-[#005d89] tracking-tight leading-[1.28] relative z-10 text-left">
                Automated Billing,<br />
                Frictionless Collections,<br />
                Zero Discrepancies
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can engage seasoned financial software engineers with deep proficiency across modern web frameworks, enterprise cloud infrastructure, high-concurrency microservices, and secure payment rails. Our mission is to build robust, fault-tolerant invoicing software that accelerates collection cycles, reduces Days Sales Outstanding (DSO), and fuels sustainable revenue growth.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our custom invoice generation software development roadmaps are tailored precisely to your organization's financial workflows—integrating legacy ERP systems with modern cloud APIs, designing intuitive customer payment portals, and embedding real-time intelligence into mission-critical billing operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES USED FOR INVOICE GENERATION SOFTWARE         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        <Container>
          {/* Centered Heading Matching Reference Design */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
              Cutting Edge Technologies Sapphire Use For Software Development Services
            </h2>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="relative overflow-hidden w-full select-none py-1">
            <div
              ref={techScrollContainerRef}
              onMouseEnter={() => setIsTechHovered(true)}
              onMouseLeave={() => setIsTechHovered(false)}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cuttingEdgeTechList.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[340px] lg:w-[375px] shrink-0 rounded-[16px] bg-[#DDF2FC] p-7 sm:p-8 min-h-[290px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md border border-[#CCE8FA]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="mb-5">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl sm:text-[21px] font-[800] text-[#0B0F19] mb-3 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.75] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Horizontal Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
                }
              }}
              aria-label="Previous slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
                }
              }}
              aria-label="Next slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 17.2 BENEFITS OF INVOICE GENERATION SOFTWARE DEVELOPMENT                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F8FBFE] text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight">
              Benefits of Invoice Generation Software Development Company
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with a leading financial software engineering firm delivers measurable operational, monetary, and risk-mitigation advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {invoiceBenefitsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left space-y-3.5 group"
              >
                <div className="w-14 h-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0F172A] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 19. HIRING MODELS (BUSINESS FRIENDLY HIRING MODELS)                       */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 20. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 22. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 23. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 24. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 25. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 26. WHAT OUR CLIENTS SAY                                                  */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 27. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 28. APPLICATION CASE STUDIES SLIDER                                       */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 FAQS)                                   */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Empower Modern Enterprises. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={invoiceFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 30. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 31. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Invoice Generation Software Development Services"
        subtitle="Being unique is our quality! Firevy Solutions delivers tailored, high-performance invoice generation software with automated workflows, transparent sprint reporting, rigorous financial security, and frictionless design-to-code execution. We are a renowned custom software organization serving clients with end-to-end support."
      />

      {/* ========================================================================= */}
      {/* 32. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Invoice Generation Software Development Challenge To Address ?"
          subtitle="Get access to top FinTech Architects and Senior Developers to engineer, scale, and maintain your automated billing applications."
          buttonText="Hire Experts Now"
        />
      </div>
    </div>
  );
};

export default InvoiceGenerationSoftwareService;
