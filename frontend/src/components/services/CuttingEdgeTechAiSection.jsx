import React, { useState } from 'react';
import Container from '../common/Container';

export const CuttingEdgeTechAiSection = ({
  title = "Technology Sapphire Use For Artificial Intelligence Development",
  subtitle = null,
  cardsList
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const defaultTechCards = [
    {
      id: 1,
      title: "OpenAI's GPT-4",
      desc: "The big multimodal language model GPT-4 from OpenAI creates text based on both textual and visual input. We employ it for the analysis of qualitative data, including transcripts and conversations with customer service.",
      icon: (
        <svg className="w-6 h-6 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10" />
          <path d="M12 16v4" />
          <path d="M7 8h6M7 11h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Neuro-Symbolic AI",
      desc: "In order to overcome the shortcomings of both neural and symbolic AI architectures, neuro-symbolic AI combines both to create a strong AI that is able to reason, learn, and model cognitive processes.",
      icon: (
        <svg className="w-6 h-6 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Explainable AI (XAI)",
      desc: "It contributes to defining model correctness, fairness, transparency, and decision-making results driven by AI. When implementing AI models into production, an organization needs to be able to explain AI to gain the confidence of its stakeholders.",
      icon: (
        <svg className="w-6 h-6 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 13h6M8 17h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Quantum Machine Learning",
      desc: "At the vanguard of AI development, quantum machine learning holds the potential to solve complex computational problems in a fraction of the time required by classical computers.",
      icon: (
        <svg className="w-6 h-6 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M6 8l4 4-4 4M14 12h4" />
        </svg>
      )
    }
  ];

  const techCards = cardsList || defaultTechCards;

  return (
    <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
      <Container>
        {/* Centered Title & Optional Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2">
          <h2 className="text-[26px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Light Blue Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-8">
          {techCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#E0F2FE]/70 rounded-[14px] p-6 border border-sky-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:border-sky-300 transition-all duration-300 min-h-[220px]"
            >
              {/* Top Row: Icon (if available) + Title */}
              <div className="space-y-3">
                {card.icon && (
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-xs shrink-0 border border-sky-100">
                    {card.icon}
                  </div>
                )}
                <h3 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? techCards.length - 1 : prev - 1))}
            className="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-[#005F96] hover:text-white hover:border-[#005F96] transition-all flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer text-xs font-bold"
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % techCards.length)}
            className="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-[#005F96] hover:text-white hover:border-[#005F96] transition-all flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer text-xs font-bold"
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CuttingEdgeTechAiSection;
