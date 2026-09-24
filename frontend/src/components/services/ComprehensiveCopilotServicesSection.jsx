import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const ComprehensiveCopilotServicesSection = () => {
  const [activeCard, setActiveCard] = useState(3); // Card 4 highlighted by default as in screenshot

  const services = [
    {
      id: 0,
      title: 'AI-Powered Virtual Assistants',
      desc: 'Intelligent AI copilots that automate customer interactions and provide real-time assistance.',
      iconBg: 'bg-[#F3E8FF] text-[#9333EA]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="18" r="8" />
          <path d="M 12 36 C 12 28, 36 28, 36 36" />
          <circle cx="24" cy="8" r="2.5" fill="currentColor" />
          <line x1="24" y1="2" x2="24" y2="5.5" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 1,
      title: 'Machine Learning Integration',
      desc: 'Advanced AI algorithms that analyze data patterns and enhance business decision-making.',
      iconBg: 'bg-[#DCFCE7] text-[#16A34A]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="10" width="28" height="28" rx="6" />
          <circle cx="24" cy="24" r="5" />
          <line x1="24" y1="6" x2="24" y2="10" />
          <line x1="24" y1="38" x2="24" y2="42" />
          <line x1="6" y1="24" x2="10" y2="24" />
          <line x1="38" y1="24" x2="42" y2="24" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI-Powered Workflow Automation',
      desc: 'Automate repetitive tasks and optimize operational processes with smart AI integration.',
      iconBg: 'bg-[#FFEDD5] text-[#EA580C]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="6" />
          <circle cx="32" cy="16" r="6" />
          <circle cx="24" cy="32" r="6" />
          <line x1="20" y1="18" x2="28" y2="18" />
          <line x1="18" y1="21" x2="22" y2="27" />
          <line x1="30" y1="21" x2="26" y2="27" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Conversational AI & NLP Solutions',
      desc: 'AI copilots with natural language processing (NLP) to enhance user engagement.',
      iconBg: 'bg-[#FEF9C3] text-[#CA8A04]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 12 12 H 36 C 39.3 12 42 14.7 42 18 V 28 C 42 31.3 39.3 34 36 34 H 22 L 14 40 V 34 H 12 C 8.7 34 6 31.3 6 28 V 18 C 6 14.7 8.7 12 12 12 Z" />
          <circle cx="18" cy="23" r="2" fill="currentColor" />
          <circle cx="24" cy="23" r="2" fill="currentColor" />
          <circle cx="30" cy="23" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Predictive Analytics & Insights',
      desc: 'AI models that forecast trends, enabling data-driven decision-making.',
      iconBg: 'bg-[#FCE7F3] text-[#DB2777]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 38 L 20 26 L 28 32 L 38 16" strokeWidth="2.5" />
          <polyline points="30 16 38 16 38 24" strokeWidth="2.5" />
          <circle cx="20" cy="26" r="3" fill="currentColor" />
          <circle cx="28" cy="32" r="3" fill="currentColor" />
          <circle cx="38" cy="16" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Custom AI Development',
      desc: 'Tailored AI solutions designed to meet specific business challenges and requirements.',
      iconBg: 'bg-[#E0F2FE] text-[#0284C7]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 24 8 L 38 15 V 33 L 24 40 L 10 33 V 15 L 24 8 Z" />
          <circle cx="24" cy="24" r="5" />
          <line x1="24" y1="13" x2="24" y2="19" />
          <line x1="24" y1="29" x2="24" y2="35" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F4F8FA] border-b border-slate-200/80 text-left font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
            Comprehensive Copilot Software Development
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            Our expertise in AI-powered applications ensures seamless integration and optimal performance. We offer a wide range of services to help businesses harness AI technology effectively
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((item) => {
            const isSelected = activeCard === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(item.id)}
                className={`bg-white rounded-[16px] p-7 transition-all duration-300 cursor-pointer flex flex-col justify-start space-y-3.5 ${
                  isSelected
                    ? 'border-2 border-[#0082C8] ring-4 ring-[#0082C8]/10 shadow-lg scale-[1.01]'
                    : 'border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-[12px] ${item.iconBg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[16.5px] sm:text-[17.5px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-[#475569] leading-[1.75] font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Centered Action Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#005F96] hover:bg-[#004B77] text-white font-[800] text-[14.5px] rounded-[6px] px-8 py-3.5 transition-all shadow-md hover:shadow-lg font-sans"
          >
            Get A Free Quote For Your Project
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ComprehensiveCopilotServicesSection;
