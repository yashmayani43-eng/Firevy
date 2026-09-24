import React from 'react';
import Container from '../common/Container';

export const KeyBenefitsCopilotSection = ({
  title = "Key Benefits of AI Copilot Solutions",
  subtitle = "Our AI Copilot development services provide businesses with numerous advantages, driving efficiency and growth",
  benefitsList
}) => {
  const defaultBenefits = [
    {
      id: 1,
      title: 'Enhanced Productivity',
      desc: 'Automate repetitive tasks, allowing employees to focus on high-value activities.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="10" width="24" height="30" rx="4" />
          <line x1="18" y1="18" x2="30" y2="18" />
          <line x1="18" y1="24" x2="26" y2="24" />
          <line x1="18" y1="30" x2="22" y2="30" />
          <path d="M 20 6 H 28 V 10 H 20 Z" fill="currentColor" opacity="0.1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Improved Decision-Making',
      desc: 'AI-driven insights help businesses make data-backed strategic decisions.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="22" r="10" />
          <circle cx="24" cy="22" r="4" />
          <path d="M 16 34 L 10 42" />
          <path d="M 32 34 L 38 42" />
          <path d="M 24 32 V 42" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cost Savings',
      desc: 'Reduce operational costs by leveraging AI-powered automation and efficiency.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 14 34 C 18 30, 30 30, 34 34" />
          <circle cx="24" cy="20" r="8" />
          <text x="24" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" stroke="none">$</text>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Scalability & Flexibility',
      desc: 'Our AI solutions are designed to grow alongside your business needs.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="28" width="8" height="14" rx="2" />
          <rect x="20" y="20" width="8" height="22" rx="2" />
          <rect x="32" y="12" width="8" height="30" rx="2" />
          <polyline points="8 20 20 12 32 6" />
          <polyline points="26 6 32 6 32 12" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Seamless Integration',
      desc: 'Easily integrate AI copilots with existing business systems and software.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="18" r="6" />
          <circle cx="32" cy="18" r="6" />
          <circle cx="24" cy="34" r="6" />
          <line x1="21" y1="20" x2="27" y2="20" />
          <line x1="18" y1="23" x2="22" y2="29" />
          <line x1="30" y1="23" x2="26" y2="29" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Enhanced User Experience',
      desc: 'AI-powered chatbots and virtual assistants improve customer interactions and engagement.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 12 18 C 12 11.4 17.4 6 24 6 C 30.6 6 36 11.4 36 18 V 26 C 36 32.6 30.6 38 24 38 Z" />
          <circle cx="18" cy="20" r="2.5" fill="currentColor" />
          <circle cx="30" cy="20" r="2.5" fill="currentColor" />
          <path d="M 19 28 Q 24 32, 29 28" />
        </svg>
      )
    }
  ];

  const benefits = benefitsList || defaultBenefits;

  return (
    <section className="py-16 sm:py-20 bg-[#F4F8FA] border-b border-slate-200/80 text-left font-sans select-none">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start space-y-3.5 hover:border-slate-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-[12px] bg-sky-50 flex items-center justify-center shrink-0">
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefitsCopilotSection;
