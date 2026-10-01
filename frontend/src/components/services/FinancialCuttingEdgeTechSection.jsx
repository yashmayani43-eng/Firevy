import React, { useState } from 'react';
import Container from '../common/Container';

export const FinancialCuttingEdgeTechSection = ({ companyName = 'Firevy.Co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Real-Time Transaction & Matching Engines',
      desc: 'Sub-millisecond order routing, event-driven payment processing, and high-throughput distributed ledger synchronization for high-volume financial traffic.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="16" />
          <polyline points="20 10 20 20 26 24" />
          <path d="M12 20h2M26 20h2" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI Fraud Detection & AML Intelligence',
      desc: 'Machine learning heuristics, behavioral anomaly detection, and automated Anti-Money Laundering (AML) scoring preventing fraudulent transactions in real time.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 4l12 5v11c0 9-6 14-12 16-6-2-12-7-12-16V9l12-5z" />
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Open Banking & Multi-Bank Core APIs',
      desc: 'Seamless PSD2-compliant integrations with Plaid, Stripe, Yodlee, and legacy core banking mainframes for instant account aggregation and payment initiation.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <circle cx="13" cy="20" r="3" fill="#0084D1" />
          <circle cx="27" cy="20" r="3" fill="#0084D1" />
          <path d="M16 20h8" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Blockchain Smart Contracts & DeFi Ledgers',
      desc: 'Immutable distributed ledgers, tokenized real-world assets, automated escrow settlement smart contracts, and institutional-grade cryptocurrency custody.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="7" width="26" height="26" rx="4" />
          <circle cx="20" cy="20" r="6" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'PCI-DSS & Zero-Trust Cloud Security',
      desc: 'End-to-end HSM key management, field-level AES-256 data encryption, role-based access controls, and strict compliance with PCI-DSS Level 1 & SOC 2.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="16" width="20" height="18" rx="3" />
          <path d="M15 16v-6a5 5 0 0 1 10 0v6" />
          <circle cx="20" cy="25" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Predictive WealthTech & Algorithmic Analytics',
      desc: 'Robo-advisory pipelines, portfolio risk modeling, automated rebalancing algorithms, and real-time interactive financial reporting dashboards.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="6 32 14 24 22 28 34 14" />
          <polyline points="26 14 34 14 34 22" />
          <circle cx="34" cy="14" r="2" fill="#0084D1" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden w-full border-t border-slate-100">
      {/* Centered Heading */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies {companyName} Use For Financial<br className="hidden sm:inline" /> Software Development
        </h2>
      </div>

      {/* Full-Width Slider / Carousel Track */}
      <div className="relative overflow-hidden w-full select-none py-2">
        <div
          className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${carouselIndex * 460}px)`
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="w-[360px] sm:w-[420px] lg:w-[450px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-6 sm:p-7 min-h-[175px] sm:min-h-[185px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-lg hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
            >
              {/* Top Icon */}
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                {tech.title}
              </h3>

              {/* Tech Description */}
              <p className="font-normal text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.65]">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Center Navigation Controls */}
      <div className="flex items-center justify-center space-x-5 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          disabled={carouselIndex === 0}
          aria-label="Previous technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={carouselIndex >= maxIndex}
          aria-label="Next technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default FinancialCuttingEdgeTechSection;
