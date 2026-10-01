import React, { useRef, useState, useEffect } from 'react';

export const CuttingEdgeTechAiSection = ({
  title = "Cutting Edge Technology Firevy Use For Artificial Intelligence Development",
  subtitle = null,
  cardsList
}) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const defaultTechCards = [
    {
      id: 1,
      title: "Explainable AI (XAI)",
      desc: "It contributes to defining model correctness, fairness, transparency, and decision-making results driven by AI. When implementing AI models into production, an organization needs to be able to explain AI to gain the confidence of its stakeholders.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h7M7 16h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Quantum Machine Learning",
      desc: "At the vanguard of AI research and application, quantum machine learning holds the potential to solve some of the most difficult issues in a variety of industries.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Multimodal AI",
      desc: "AI systems are able to comprehend and react to users in a more instinctive and natural way because of multimodal artificial intelligence. It improves user experience and the efficacy and efficiency of interactions across a range of industries.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="8" cy="10" r="1.5" fill="currentColor" />
          <path d="M12 14l2-2 3 3" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Generative AI",
      desc: "We use top-notch models such as GPT-4, LLaMA, and Claude to help construct Autonomous Agents, realistic content generators, assistants and customer support automation, conversation intelligence solutions.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Neuro-Symbolic AI",
      desc: "In order to overcome the shortcomings of both neural and symbolic AI architectures, neuro-symbolic AI combines both to create a strong AI that is able to reason, learn, and model cognitive processes.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      )
    },
    {
      id: 6,
      title: "OpenAI's GPT-4",
      desc: "The big multimodal language model GPT-4 from OpenAI creates text based on both textual and visual input. We employ it for the analysis of qualitative data, including transcripts and conversations with customer service.",
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10" />
          <path d="M12 16v4" />
          <path d="M7 8h6M7 11h4" />
        </svg>
      )
    }
  ];

  const techCards = cardsList || defaultTechCards;

  // Auto-scroll every 2.5 seconds (2500ms), pauses when user hovers over the container
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If near the end, smooth scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 470, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -470, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 470, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100 overflow-hidden w-full">
      {/* Title Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight max-w-5xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[14.5px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mt-3">
            {subtitle}
          </p>
        )}
      </div>

      {/* Full Width Edge-to-Edge Horizontal Scroll Container */}
      <div 
        className="w-full pl-4 sm:pl-8 lg:pl-16 pr-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none py-3 pr-8 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {techCards.map((card) => (
            <div
              key={card.id}
              className="w-[340px] sm:w-[410px] lg:w-[460px] shrink-0 bg-[#E0F2FE]/80 rounded-[16px] p-7 sm:p-8 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-lg transition-all duration-300 min-h-[250px] cursor-pointer"
            >
              {/* Icon & Title */}
              <div className="space-y-3">
                {card.icon && (
                  <div className="shrink-0 mb-1">
                    {card.icon}
                  </div>
                )}
                <h3 className="font-[800] text-[18px] sm:text-[20px] text-[#0B0F19] tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Center Arrow Controls Below Cards */}
      <div className="flex items-center justify-center space-x-6 mt-8">
        <button
          onClick={handleScrollLeft}
          className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-[#0084D1] transition-colors p-2 active:scale-90 cursor-pointer select-none"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button
          onClick={handleScrollRight}
          className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-[#0084D1] transition-colors p-2 active:scale-90 cursor-pointer select-none"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default CuttingEdgeTechAiSection;

