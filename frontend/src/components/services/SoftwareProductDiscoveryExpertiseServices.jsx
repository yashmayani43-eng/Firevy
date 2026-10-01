import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'Market Validation & Opportunity Sizing',
    desc: 'Deep-dive competitive whitespace analysis, total addressable market (TAM) sizing, and quantitative customer demand confirmation before writing code.'
  },
  {
    title: 'UX Persona Mapping & Customer Journeys',
    desc: 'Empathy mapping, user journey orchestration, and Jobs-to-be-Done (JTBD) profiling to isolate core pain points and optimize user activation flows.'
  },
  {
    title: 'Rapid Clickable Interactive Prototyping',
    desc: 'Iterative, high-fidelity prototypes built in Figma to test navigation, user flows, and core value hypotheses with real target audiences.'
  },
  {
    title: 'Technical Architecture & Feasibility Spikes',
    desc: 'Hands-on architectural spikes, microservices vs monolith trade-offs, third-party API benchmarking, and database scalability blueprinting.'
  },
  {
    title: 'MVP Scoping & Prioritized Backlog Blueprint',
    desc: 'RICE and MoSCoW prioritization defining an impactful, feature-lean Minimum Viable Product backlog geared for rapid launch and early monetization.'
  },
  {
    title: 'Budget, Velocity & Cloud Cost Forecasting',
    desc: 'Accurate estimation of engineering sprints, team composition, cloud infrastructure operational expenses (OpEx), and time-to-market schedule.'
  }
];

export const SoftwareProductDiscoveryExpertiseServices = () => {
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#050B20] tracking-tight leading-snug">
          The Expertise Of Our Software Product Discovery Specialists
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From concept stress-testing to technical architectural de-risking, our multidisciplinary discovery teams bring certainty to product development investments.
        </p>
      </div>

      {/* Carousel Track */}
      <div className="w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-8 pb-4 pt-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((service, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[285px] sm:w-[350px] p-6 sm:p-7 rounded-xl border border-[#0084D1] bg-[#f8fbff] flex flex-col justify-start relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#050B20] mb-2 sm:mb-2.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {expertiseCards.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx ? 'w-7 bg-[#0084D1]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareProductDiscoveryExpertiseServices;
