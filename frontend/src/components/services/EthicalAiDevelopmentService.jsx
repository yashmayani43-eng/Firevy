import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import OurRecentProjectsGrid from './OurRecentProjectsGrid';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  FileCheck,
  Scale
} from 'lucide-react';

export const EthicalAiDevelopmentService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '100% Compliance', label: 'Adherence to EU AI Act, NIST AI Risk Management, and HIPAA/GDPR standards.' },
    { value: 'Zero Bias', label: 'Algorithmic auditing and debiasing across sensitive training dataset features.' },
    { value: 'Explainable AI', label: 'Complete decision transparency and interpretability for auditing stakeholders.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'AI Governance & Compliance',
      icon: <Scale className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Establish robust organizational framework, policies, and continuous monitoring to comply with emerging global AI regulations.',
      bullets: [
        'EU AI Act Readiness Audit',
        'NIST AI RMF Alignment',
        'Data Privacy & Anonymization',
        'Risk & Impact Assessments'
      ]
    },
    {
      id: 1,
      title: 'Bias Detection & Mitigation',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Scan datasets and AI model predictions for demographic, racial, or gender bias to ensure ethical fairness in decision-making.',
      bullets: [
        'Fairness Metrics Auditing',
        'Dataset Balancing Pipelines',
        'Adversarial Bias Testing',
        'Continuous Model Monitoring'
      ]
    },
    {
      id: 2,
      title: 'Explainable AI (XAI) Architecture',
      icon: <FileCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build transparent black-box neural networks with feature attribution techniques (SHAP, LIME) so humans understand model outputs.',
      bullets: [
        'Feature Importance Visualizer',
        'Model Interpretability Dashboards',
        'Audit-Trail Generation',
        'Human-in-the-Loop Integration'
      ]
    }
  ];

  const faqs = [
    {
      q: '1. What is Ethical AI Development?',
      a: 'Ethical AI Development focuses on building AI solutions that are unbiased, transparent, privacy-preserving, and fully compliant with global regulations.'
    },
    {
      q: '2. How do you detect and remove bias from AI models?',
      a: 'We evaluate datasets using statistical parity, equalized odds, and synthetic data augmentation to neutralize systemic bias.'
    },
    {
      q: '3. What regulations do your Ethical AI solutions support?',
      a: 'Our systems align with the EU AI Act, US NIST AI Framework, ISO/IEC 42001, GDPR, and CCPA standards.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Ethical AI Development Services | Responsible AI Solutions"
        description="Build unbiased, transparent, compliant, and responsible AI systems with our expert Ethical AI development services."
        canonical="/services/ethical-ai-development"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Responsible AI Engineering</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                Ethical AI Development Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Ensure your enterprise AI applications are fair, transparent, privacy-preserving, and compliant. We build ethical AI frameworks that protect user data, mitigate algorithmic bias, and establish trust.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Schedule Ethical AI Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="Ethical AI Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BrandLogoMarquee />

      <section className="py-14 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200">
                <div className="text-[32px] font-[900] text-[#006B8F] mb-1">{s.value}</div>
                <p className="text-[13.5px] text-[#475569] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F8FA] border-y border-slate-200/80 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950">
              Responsible AI Frameworks
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-4 space-y-3">
              {tailoredSolutions.map((sol, idx) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-sm flex items-center justify-between border cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#006B8F] text-white border-[#006B8F]'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className={activeTab === idx ? 'text-white' : 'text-[#006B8F]'}>{sol.icon}</span>
                    <span>{sol.title}</span>
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tailoredSolutions[activeTab].title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{tailoredSolutions[activeTab].shortDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {tailoredSolutions[activeTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006B8F]" />
                    <span className="text-xs text-slate-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#006B8F] text-white text-sm font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <PremiumServicesGrid />
      <OurRecentProjectsGrid />
      <VideoTestimonialsStory />
      <SapphireFaqSection faqList={faqs} />
      <FeaturedInLogosGrid />

      <section className="py-14 bg-[#005F96] text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Build Trusted, Transparent & Compliant Ethical AI Solutions Today
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Talk to Ethical AI Consultant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default EthicalAiDevelopmentService;
