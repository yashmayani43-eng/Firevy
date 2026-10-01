import React, { useState } from 'react';
import Container from '../common/Container';

export const SoftwareProductDiscoveryCuttingEdgeTechSection = ({ companyName = 'Firevy.Co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'User Research & Behavioral Analytics',
      desc: 'Heatmapping, session telemetry, and funnel tracking via Mixpanel, Amplitude, and Hotjar to pinpoint customer friction points and quantify real demand.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="14" r="6" />
          <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <circle cx="31" cy="12" r="3" />
          <path d="M28 24c2.5-1.5 5.5-1.5 7.5 1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Interactive Rapid Prototyping & UX Spikes',
      desc: 'High-fidelity clickable prototypes in Figma and ProtoPie deployed to prospective users for usability testing before committing a single line of backend code.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="6" width="26" height="28" rx="3" />
          <path d="M13 14h14M13 20h8M13 26h10" strokeLinecap="round" />
          <circle cx="27" cy="26" r="2.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Architectural Spikes & Technical Feasibility',
      desc: 'Proof-of-concept benchmarking, third-party API stress testing, database concurrency modeling, and cloud infrastructure cost projection.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="20,6 34,14 34,28 20,36 6,28 6,14" />
          <line x1="20" y1="6" x2="20" y2="36" />
          <line x1="6" y1="14" x2="20" y2="21" />
          <line x1="34" y1="14" x2="20" y2="21" />
          <circle cx="20" cy="21" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Product-Market Fit & Value Proposition Canvas',
      desc: 'Jobs-to-be-Done (JTBD) frameworks, Strategyzer value modeling, and competitor whitespace analysis to confirm differentiated product positioning.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="2.5" fill="#0084D1" />
          <line x1="20" y1="6" x2="20" y2="2" />
          <line x1="20" y1="34" x2="20" y2="38" />
          <line x1="6" y1="20" x2="2" y2="20" />
          <line x1="34" y1="20" x2="38" y2="20" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'AI Persona & Sentiment Analysis',
      desc: 'Leveraging LLM sentiment modeling on thousands of competitor reviews, customer forums, and survey verbatims to extract actionable feature priorities.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="8" y="10" width="24" height="20" rx="4" />
          <circle cx="15" cy="18" r="2" fill="#0084D1" />
          <circle cx="25" cy="18" r="2" fill="#0084D1" />
          <path d="M15 24c1.5 2 3.5 2.5 5 2.5s3.5-.5 5-2.5" strokeLinecap="round" />
          <line x1="20" y1="6" x2="20" y2="10" />
          <circle cx="20" cy="5" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'RICE & MoSCoW Agile MVP Scoping',
      desc: 'Quantitative feature prioritization balancing reach, impact, confidence, and engineering effort to define an airtight, budget-conscious MVP launch backlog.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="8 32 16 22 24 26 34 12" />
          <polyline points="28 12 34 12 34 18" />
          <line x1="8" y1="34" x2="34" y2="34" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Cutting Edge Tools & Frameworks We Use
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            At {companyName}, our discovery sprints harness data telemetry, rapid prototyping, and architectural stress tests to de-risk investments before development begins.
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-[#0084D1]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0084D1]/10 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0084D1] transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Swipeable Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {technologies.map((tech) => (
                <div key={tech.id} className="w-full flex-shrink-0 px-2">
                  <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            {technologies.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  carouselIndex === i ? 'bg-[#0084D1] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SoftwareProductDiscoveryCuttingEdgeTechSection;
