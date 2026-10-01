import React, { useState } from 'react';
import Container from '../common/Container';

export const TravelCuttingEdgeTechSection = ({ companyName = 'Firevy.Co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'GDS & Multi-Supplier Aggregation (NDC)',
      desc: 'Seamless real-time inventory synchronization across Amadeus, Sabre, Travelport, HotelBeds, and IATA NDC XML/REST protocols for flights, hotels, and rentals.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="16" />
          <path d="M4 20h32M20 4a24 24 0 0 1 0 32M20 4a24 24 0 0 0 0 32" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI Dynamic Pricing & Revenue Optimization',
      desc: 'Predictive pricing models, competitor fare tracking, automated seasonal yield management, and personalized upsell recommendations based on traveler intent.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="6 32 14 24 22 28 34 14" />
          <polyline points="26 14 34 14 34 22" />
          <circle cx="34" cy="14" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Omni-Channel B2B & B2C Booking Engines',
      desc: 'Sub-second reservation pipelines, multi-currency payment checkout, automated voucher issuing, and corporate travel policy compliance controls.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <path d="M12 16h16M12 22h10M26 22l3 3 5-5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'GPS Tracking, Maps & Itinerary Wayfinding',
      desc: 'Interactive visual mapping, offline map navigation, airport terminal floorplans, and location-aware points of interest (POI) discovery.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 4 C14 4 10 9 10 16 C10 24 20 36 20 36 C20 36 30 24 30 16 C30 9 26 4 20 4 Z" />
          <circle cx="20" cy="16" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Live Flight Telemetry & Disruption Management',
      desc: 'Real-time flight status monitoring, automated push alerts for gate changes, instant one-click compensation claims, and dynamic hotel rebooking.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 6 L23 16 L34 20 L23 23 L22 34 L18 29 L16 34 L15 23 L4 20 L15 16 Z" />
          <circle cx="20" cy="20" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Blockchain Loyalty & Travel Pass Identity',
      desc: 'Decentralized loyalty reward ledgers, cross-brand mileage exchanges, verified digital traveler credentials, and automated smart-contract refunds.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="7" width="26" height="26" rx="4" />
          <circle cx="20" cy="20" r="6" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
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
          Cutting Edge Technologies {companyName} Use For Travel<br className="hidden sm:inline" /> Software Development
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

export default TravelCuttingEdgeTechSection;
