import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const OfferingOnDemandAppExpertiseSection = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('.expertise-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 430;
        const gap = 24; // 24px gap
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 25) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const expertiseCards = [
    {
      title: 'Support and Maintenance',
      desc: 'Being a top on-demand development company, we guarantee that your on-demand solutions adapt to your business needs and the changing market dynamics by providing thorough support and upkeep.'
    },
    {
      title: 'On-Demand App Development Services',
      desc: 'Take the lead in the industry with custom on-demand Being a top on-demand development company, we guarantee that your on-demand solutions adapt to your business needs and the changing market dynamics by providing thorough support and upkeep.'
    },
    {
      title: 'On-Demand Software Development Services',
      desc: 'Work together to create and grow with a leading on-demand Software Development Company firm. Our all-inclusive Being a top on-demand development company, we guarantee that your on-demand solutions adapt to your business needs.'
    },
    {
      title: 'On-Demand Web Development',
      desc: 'Collaborate with a reputable on-demand web development firm for reliable solutions. In developing scalable, high-performance web applications that meet industry standards.'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            Offering On-demand App Development Expertise
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            Get our on-demand app developer services for dependable and user-friendly apps that are specific to the ever-changing on-demand industry. Our range of services includes:
          </p>
        </div>
      </Container>

      {/* Auto-scrolling Cards Track */}
      <div
        className="relative overflow-hidden w-full select-none pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-none px-4 sm:px-8 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="expertise-card bg-[#DDF0FA] w-[360px] sm:w-[420px] lg:w-[460px] min-h-[220px] rounded-[18px] p-6 sm:p-7 text-left flex flex-col justify-between shrink-0 shadow-xs border border-[#C5E5F7] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-3">
                <h3 className="font-[800] text-base sm:text-lg text-slate-900 leading-snug tracking-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal font-sans">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#00709E] hover:bg-[#005F96] text-white font-[700] text-xs sm:text-sm transition-all duration-200 shadow-xs cursor-pointer"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingOnDemandAppExpertiseSection;
