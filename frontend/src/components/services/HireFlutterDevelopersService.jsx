import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SeasonedExpertsTeamSection from '../common/SeasonedExpertsTeamSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutKeyMetrics from '../home/AboutKeyMetrics';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock,
  Calendar,
  ArrowLeft,
  PieChart,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Server,
  Cloud,
  Database,
  Users,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Laptop,
  LineChart,
  Globe,
  Coins,
  Award,
  RotateCw,
  Sliders,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Lock,
  MessageSquare,
  Flag,
  Milestone,
  RefreshCw,
  Building2,
  Sprout,
  GraduationCap,
  ShoppingBag,
  Scale,
  Sparkles,
  Smartphone,
  CheckCircle
} from 'lucide-react';

export const HireFlutterDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [leverageTab, setLeverageTab] = useState(0);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10,000 - $25,000',
    model: 'Dedicated Flutter Team ($21/hr)',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$10,000 - $25,000',
        model: 'Dedicated Flutter Team ($21/hr)',
        message: ''
      });
    }, 4000);
  };

  // 6 Flexible Hiring Model Cards
  const hiringModelCards = [
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '4 hours a day, 5 days a week',
      price: '80 hours/month',
      IconComp: Briefcase,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '8 hours a day, 5 days a week',
      price: '160 hours/month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months',
        'Hire Dedicated Flutter Developers that exclusively works for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 21.00/Hour',
      IconComp: Clock,
      isFeatured: true,
      saveText: 'Most Popular',
      badgeText: 'Flexible',
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Payment based on hours worked',
        'Direct communication with developers',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2450.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '8 hours a day, 5 days a week',
        'Continuous sprint deliveries'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly Package',
      subtitle: 'Starting From',
      price: '10% Off',
      IconComp: Award,
      isFeatured: false,
      saveText: 'SAVE 10%',
      badgeText: 'Value',
      features: [
        'Dedicated senior Flutter engineer',
        'Guaranteed uptime & SLA protection',
        'Full IP ownership & NDA protection',
        'Bi-weekly code audits'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly Dedicated Squad',
      subtitle: 'Starting From',
      price: '20% Off',
      IconComp: ShieldCheck,
      isFeatured: false,
      saveText: 'SAVE 20%',
      badgeText: 'Enterprise',
      features: [
        'Cross-functional Flutter + QA team',
        'Free DevOps server management',
        'Custom CI/CD build pipelines',
        'Executive sprint reports'
      ]
    }
  ];

  // Infinite carousel handlers
  const handlePrevCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev <= 0 ? hiringModelCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev >= hiringModelCards.length - 1 ? 0 : prev + 1));
  };

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(0);
    }
  };

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      handleNextCard();
    }, 3500);
    return () => clearInterval(interval);
  }, [cardSlideIndex, isCarouselHovered]);

  // Flutter FAQs
  const faqs = [
    {
      q: '1. Why should I hire Flutter developers from Firevy.Co?',
      a: 'Our Flutter developers are top 1% vetted engineers with 5+ years of production experience in Dart, Bloc, Riverpod, and native iOS/Android bridge integrations.'
    },
    {
      q: '2. Can Flutter apps match the performance of native iOS and Android apps?',
      a: 'Yes, Flutter compiles directly into native ARM machine code using the Skia/Impeller graphics engine, delivering smooth 60fps and 120fps performance.'
    },
    {
      q: '3. What is the hourly rate to hire dedicated Flutter developers?',
      a: 'Our dedicated Flutter developer rate starts from $21/Hourly* on flexible part-time, full-time, or hourly billing models.'
    },
    {
      q: '4. How quickly can your Flutter developers join our ongoing project?',
      a: 'We can onboard skilled Flutter programmers within 24 to 48 hours after understanding your project requirements and tech stack.'
    },
    {
      q: '5. Do you sign Non-Disclosure Agreements (NDA) and transfer IP ownership?',
      a: 'Yes, we sign strict NDAs before project initiation and guarantee 100% intellectual property (IP) and source code ownership to you.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Flutter App Developers | Dedicated Flutter Programmers at $21/Hr"
        description="Hire dedicated Flutter app developers from Firevy.Co. Expert cross-platform iOS & Android mobile app programmers. Flexible models, 100% IP ownership, and instant onboarding."
        canonical="/services/hire-flutter-developers"
      />

      {/* ============================================================
          HERO SECTION (Matching User Screenshot 100%)
          ============================================================ */}
      <section className="pt-28 pb-16 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column Text & Action */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Flutter App Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Flutter is a game-changing mobile application framework that is open-source and was launched by Google. This framework is user-friendly enough that novice and seasoned Android and iOS app developers feel comfortable working with it.
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">200+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">20+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">2800+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">320+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box (Matching Screenshot 1:1) */}
              <div className="space-y-2.5 pt-2">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[14px] p-2 pl-4 pr-2 w-full max-w-[390px] shadow-md shadow-[#0089a8]/20">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-5 h-5 text-white stroke-[2.5]" />
                    <span className="text-lg sm:text-[20px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-slate-800 hover:bg-slate-50 font-[700] px-5 py-2.5 rounded-[10px] text-sm transition-all shadow-sm flex items-center justify-center font-sans"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Flutter Monitor Vector Graphic */}
            <div className="lg:col-span-6 relative flex items-center justify-center p-2">
              <div className="relative w-full max-w-[520px] select-none">
                <svg viewBox="0 0 600 480" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Delicate Cyan Gears & Dashed Rings */}
                  <g opacity="0.45">
                    {/* Top Gear */}
                    <circle cx="390" cy="110" r="45" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M390 55v12M390 153v12M335 110h12M433 110h12M351 71l9 9M420 140l9 9M351 149l9-9M420 80l9-9" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Left Gear */}
                    <circle cx="120" cy="310" r="38" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M120 262v10M120 348v10M72 310h10M158 310h10" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Right Gear */}
                    <circle cx="515" cy="220" r="28" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>

                  {/* Connecting dashed line accents */}
                  <path d="M150 200 L 190 200" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M480 120 L 515 120" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M470 310 L 510 310" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M170 340 L 205 340" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Monitor Stand */}
                  <path d="M300 340 L 300 375" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
                  <path d="M250 375 L 350 375" stroke="#64748B" strokeWidth="7" strokeLinecap="round" />
                  <ellipse cx="300" cy="377" rx="55" ry="6" fill="#94A3B8" />

                  {/* Desktop Monitor Outer Bezel */}
                  <rect x="155" y="105" width="345" height="235" rx="14" fill="#0F172A" />
                  <rect x="160" y="110" width="335" height="220" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                  <rect x="160" y="110" width="335" height="24" rx="10" fill="#38BDF8" />
                  <rect x="160" y="122" width="335" height="12" fill="#38BDF8" />

                  {/* 3 Window Control Dots (White/Yellow/Green) */}
                  <circle cx="174" cy="122" r="3.5" fill="#FFFFFF" />
                  <circle cx="186" cy="122" r="3.5" fill="#FEF08A" />
                  <circle cx="198" cy="122" r="3.5" fill="#FFFFFF" />

                  {/* Code Lines inside Editor */}
                  <g opacity="0.6">
                    <rect x="175" y="146" width="90" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="156" width="130" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="166" width="70" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="176" width="110" height="4" rx="2" fill="#CBD5E1" />
                    
                    <rect x="175" y="196" width="120" height="4" rx="2" fill="#94A3B8" />
                    <rect x="185" y="206" width="80" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="216" width="100" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="226" width="60" height="4" rx="2" fill="#CBD5E1" />
                    
                    <rect x="175" y="246" width="140" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="256" width="95" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="175" y="266" width="125" height="4" rx="2" fill="#94A3B8" />
                    <rect x="185" y="276" width="75" height="4" rx="2" fill="#CBD5E1" />
                  </g>

                  {/* Cyan Flutter Logo Badge on Right Side of Screen */}
                  <g transform="translate(375, 160)">
                    {/* Top Chevron */}
                    <path d="M28 0 L56 28 L38 28 L14 4 Z" fill="#54C5F8" />
                    {/* Bottom Lower Chevron */}
                    <path d="M14 36 L28 22 L56 50 L28 78 L14 64 L32 46 Z" fill="#0175C2" />
                    <path d="M28 22 L38 22 L56 40 L38 58 L28 48 L42 34 Z" fill="#02569B" />
                  </g>

                  {/* Surrounding Tech Badges */}
                  {/* 1. Top Right: Android Badge */}
                  <g transform="translate(485, 95)">
                    <rect x="0" y="0" width="48" height="48" rx="8" fill="#38BDF8" />
                    {/* Android Robot Head Icon */}
                    <circle cx="24" cy="22" r="10" fill="#FFFFFF" />
                    <rect x="14" y="22" width="20" height="6" fill="#FFFFFF" />
                    <circle cx="20" cy="18" r="1.5" fill="#38BDF8" />
                    <circle cx="28" cy="18" r="1.5" fill="#38BDF8" />
                    <line x1="18" y1="12" x2="16" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="30" y1="12" x2="32" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="24" y="42" fill="#FFFFFF" fontSize="7" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Android</text>
                  </g>

                  {/* 2. Left: Dart Badge */}
                  <g transform="translate(95, 175)">
                    <rect x="0" y="0" width="48" height="48" rx="8" fill="#38BDF8" />
                    {/* Dart Logo Icon */}
                    <polygon points="16,14 32,14 24,30 16,30" fill="#02569B" />
                    <polygon points="20,12 32,24 24,34 14,22" fill="#0175C2" />
                    <text x="24" y="42" fill="#FFFFFF" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Dart</text>
                  </g>

                  {/* 3. Bottom Right: iOS Apple Badge */}
                  <g transform="translate(480, 270)">
                    <rect x="0" y="0" width="48" height="48" rx="8" fill="#38BDF8" />
                    {/* Apple Icon */}
                    <path d="M24 12c.5-1.5 2-2.5 3-2.5s.5 1.5 0 2.5c-.8 1.2-2.2 1.5-3 0zm4 4c1 0 2.5-.8 3.5-.8 1.2 0 2.2.6 2.8 1.5-2.2 1.2-1.8 4.2.4 5.2-.8 2-2 4-3.5 4s-2-.8-3.2-.8-2.2.8-3.2.8c-1.5 0-3-2.2-3.8-4.5-1-2.8-.2-6.5 2.2-6.5 1.4 0 2.4.9 3.5.9 1 0 1.3-.8 1.3-.8z" fill="#FFFFFF" transform="scale(0.8) translate(3, 3)" />
                    <text x="24" y="42" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Ios</text>
                  </g>

                  {/* 4. Bottom Left: Git Badge */}
                  <g transform="translate(120, 315)">
                    <rect x="0" y="0" width="46" height="46" rx="8" fill="#38BDF8" />
                    {/* Git Branch Icon */}
                    <circle cx="16" cy="18" r="3" fill="#FFFFFF" />
                    <circle cx="28" cy="18" r="3" fill="#FFFFFF" />
                    <circle cx="16" cy="28" r="3" fill="#FFFFFF" />
                    <path d="M16 18v10M16 23c4 0 12 0 12-5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                    <text x="23" y="39" fill="#FFFFFF" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Git</text>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          BRAND LOGO MARQUEE (Matching User Screenshot Row 2)
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 2: Hire Flutter Developers With Flexible Engagement Models (Matching User Screenshot Row 3)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Graphic Illustration: Collaborative Mobile Workspace */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[540px] select-none">
                <img
                  src="/images/hire_flutter_developers_engagement_models.png"
                  alt="Hire Flutter Developers With Flexible Engagement Models"
                  className="w-full h-auto object-contain mx-auto mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Flutter Developers With Flexible Engagement Models
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Flutter is now an effective alternative for the development of native apps. This is due to the high-quality native interfaces that it provides across several platforms. Along with its rising popularity, Flutter offers a vast assortment of benefits to the table regarding building mobile applications. To Hire AI Flutter App Developers and Hire LLM Flutter Developers, you should consider coming to us first. We are a well-known Flutter app development company with a pool of Flutter developers for hire using the latest flutter developer tools. These apps will assist you in growing your company to new heights of prosperity. You may increase the reach of your application by hiring Flutter app developers, but this will depend on the requirements of your project.
              </p>

              <div className="pt-1">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 bg-[#0083B0] hover:bg-[#006095] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md font-sans"
                >
                  <span>Hire Dedicated Flutter Developers</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: Developer Proficiency Comparison Table (Matching Screenshot 1:1)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Flutter Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Hire dedicated Flutter developers in India to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Pricing & Roles Table */}
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="min-w-[640px] rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005F96] text-white">
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Range of Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Junior Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Mid-Level Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base w-1/4">
                      Senior Developers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-[15px] font-[600] text-slate-800">
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Approx Cost
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">
                      $17
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">
                      $22
                    </td>
                    <td className="py-4 px-6 bg-white font-[700] text-slate-900">
                      $29
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Years of Experience
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      1-3 Years
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      3-5 Years
                    </td>
                    <td className="py-4 px-6 bg-white">
                      5+ Years
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Project Manager
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Time Zone Flexibility
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Quality Guarantee
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Working Hours
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      40 hours/ Week
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      40 hours/ Week
                    </td>
                    <td className="py-4 px-6 bg-white">
                      40 hours/ Week
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: Brief About Our Flutter Development Services (Matching Screenshot 1:1)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headings & Paragraphs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Flutter<br className="hidden sm:inline" /> Development Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When developing next-generation hybrid applications, make use of coding skills that are world-class and that contain industry best practices.Gain expertise in creating native mobile applications, which can pave the way to incredible success for your company. App developers working with Flutter may use Dart to investigate the potential of writing code that is simple while achieving exceptional performance.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Flutter developers make it easier to create desktop applications written in Flutter that are compatible with many operating systems and use a single codebase. Gain access to the benefits of running applications on macOS, Linux, Windows, and ChromeOS while enjoying uniquely fluid experiences. Utilize Flutter to provide embedded devices with the capability of embedding API to get the highest possible level of performance.
              </p>
            </div>

            {/* Right Column: Custom Developer Workstation Image */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[560px] select-none">
                <img
                  src="/images/brief_flutter_dev_desk.png"
                  alt="Brief About Our Flutter Development Services"
                  className="w-full h-auto object-contain mx-auto mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: Flexible Hiring Models (Carousel)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Flutter Developers from Firevy.Co Starts from,
            </p>
          </div>

          {/* Cards Carousel Container */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!enableTransition ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${cardSlideIndex * (100 / 3)}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...hiringModelCards, ...hiringModelCards, ...hiringModelCards].map((card, index) => {
                const IconComp = card.IconComp;
                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 py-4"
                  >
                    <div
                      className={`h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                        card.isFeatured
                          ? 'border-2 border-[#0083B0] shadow-xl ring-4 ring-[#0083B0]/10 scale-[1.02]'
                          : 'border border-slate-200/80 shadow-md hover:shadow-xl'
                      }`}
                    >
                      {/* Top Save text or badge */}
                      {card.saveText && (
                        <div className="text-center font-bold text-xs text-[#0083B0] tracking-wider uppercase mb-2">
                          {card.saveText}
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Header Icon Circle */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0083B0] mx-auto shadow-xs">
                          <IconComp className="w-6 h-6 stroke-[2]" />
                        </div>

                        {/* Title & Badge */}
                        <div className="text-center space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <h3 className="text-xl font-[800] text-slate-900">{card.title}</h3>
                            {card.badgeText && (
                              <span className="bg-cyan-100 text-[#0083B0] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                {card.badgeText}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{card.subtitle}</div>
                          <div className="text-2xl font-[900] text-slate-900 pt-1">{card.price}</div>
                        </div>

                        {/* Feature Bullets */}
                        <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                          {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#0083B0] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer Button */}
                      <div className="pt-6 mt-6 border-t border-slate-100 text-center space-y-2">
                        <a
                          href="#quote-form"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all shadow-sm ${
                            card.isFeatured
                              ? 'bg-[#0083B0] hover:bg-[#006095] text-white shadow-md'
                              : 'bg-[#006095] hover:bg-[#0083B0] text-white'
                          }`}
                        >
                          Hire Now
                        </a>
                        <div className="text-[11px] text-slate-500 font-medium pt-1">
                          We sign NDA for all our projects.
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Center Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <button
              onClick={handlePrevCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-7 h-7 stroke-[2.5] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNextCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Next card"
            >
              <ArrowRight className="w-7 h-7 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Container>
      </section>

      {/* 4 Steps Hiring Process */}
      <HireDeveloper4Steps
        title="Hire Flutter Developers in 4 Easy Steps"
        subtitle="Follow our streamlined onboarding process to bring top Flutter engineers onto your team within 48 hours."
      />

      {/* Seasoned Experts Team */}
      <SeasonedExpertsTeamSection />

      {/* Tech Stack Proficient Grid */}
      <TechStackProficientGrid />

      {/* Leverage Expertise Grid */}
      <LeverageExpertiseGridSection
        activeTab={leverageTab}
        setActiveTab={setLeverageTab}
      />

      {/* Innovative Solution Video Section */}
      <InnovativeSolutionVideo />

      {/* Digital Transformation Case Studies */}
      <DigitalTransformationCaseStudies />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Video Testimonials Story */}
      <VideoTestimonialsStory />

      {/* Industry Focused Insights */}
      <IndustryFocusedInsightsSection />

      {/* Key Metrics / Numbers */}
      <AboutKeyMetrics />

      {/* Work Process Grid */}
      <WorkProcessGrid />

      {/* Engagement Models Section */}
      <EngagementModelsSection />

      {/* Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection
        title="Frequently Asked Questions: Hire Flutter Developers"
        faqList={faqs}
      />

      {/* Recent Blogs */}
      <RecentBlogsSection />

      {/* Premium Services Grid */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* Dedicated Quote Form Section */}
      <section id="quote-form" className="py-20 bg-slate-900 text-white font-sans">
        <Container>
          <div className="max-w-4xl mx-auto bg-slate-800/90 rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl">
            <div className="text-center space-y-3 mb-8">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] tracking-tight">
                Hire Dedicated Flutter Developers Today
              </h2>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">
                Tell us about your project requirements and get matched with senior Flutter developers within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold">Thank You!</h3>
                <p className="text-sm">We have received your request. Our technical lead will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@company.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Hiring Model</label>
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleFormChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Dedicated Flutter Team ($21/hr)">Dedicated Flutter Team ($21/hr)</option>
                      <option value="Full-time Dedicated Developer">Full-time Dedicated Developer</option>
                      <option value="Part-time Developer">Part-time Developer</option>
                      <option value="Custom Project Squad">Custom Project Squad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Project Overview</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Briefly describe your app requirements, timeline, and goals..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-[#0083B0] hover:bg-[#006095] text-white font-bold px-10 py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-cyan-500/20 inline-flex items-center space-x-2"
                  >
                    <span>Submit & Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* Subscribe Newsletter Section */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireFlutterDevelopersService;
