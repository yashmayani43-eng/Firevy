import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'Core Banking & Digital Neobanks',
    desc: 'Full-featured cloud core banking engines, high-speed multi-currency accounts, automated KYC verification, and virtual card provisioning.'
  },
  {
    title: 'Payment Gateways & Mobile Wallets',
    desc: 'PCI-DSS certified payment orchestration, QR & NFC contactless wallet processing, peer-to-peer (P2P) transfers, and merchant checkout APIs.'
  },
  {
    title: 'Algorithmic Trading & Investment Portals',
    desc: 'Sub-millisecond order routing, real-time market data streaming with WebSockets, automated stop-loss execution, and portfolio analytics.'
  },
  {
    title: 'Lending, Credit Scoring & Underwriting',
    desc: 'AI-driven alternative credit assessment, automated loan origination systems (LOS), digital promissory notes, and automated collection workflows.'
  },
  {
    title: 'WealthTech & Automated Asset Management',
    desc: 'Robo-advisory algorithms, goal-based savings, fractional share investing, portfolio rebalancing, and tax-loss harvesting engines.'
  },
  {
    title: 'RegTech, AML & Compliance Automation',
    desc: 'Continuous sanction list screening, automated SAR reporting, suspicious activity transaction monitoring, and immutable audit logs.'
  }
];

export const FinancialExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardStep = 390;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
          The Expertise Of Our Financial Software Developers
        </h2>
        <p className="text-[#475569] text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-2xl mx-auto font-normal font-sans">
          Contact us now to avail the expertise of our Financial software developers. Their expertise includes:
        </p>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="w-[330px] sm:w-[360px] shrink-0 bg-white rounded-[16px] p-7 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#005F96] font-bold text-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="font-[800] text-[18px] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.65] font-normal font-sans">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {expertiseCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-[#005F96]' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialExpertiseServices;
