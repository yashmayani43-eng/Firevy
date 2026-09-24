import React from 'react';
import Container from './Container';

const defaultTechCards = [
  {
    id: 'backend',
    title: 'Back End',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 24 6 L 31 10 L 24 14 L 17 10 Z" />
        <path d="M 17 10 V 17 L 24 21 V 14" />
        <path d="M 31 10 V 17 L 24 21" />
        <path d="M 16 20 L 23 24 L 16 28 L 9 24 Z" />
        <path d="M 9 24 V 31 L 16 35 V 28" />
        <path d="M 23 24 V 31 L 16 35" />
        <path d="M 32 20 L 39 24 L 32 28 L 25 24 Z" />
        <path d="M 25 24 V 31 L 32 35 V 28" />
        <path d="M 39 24 V 31 L 32 35" />
      </svg>
    ),
    col1: ['.NET', 'Java', 'Node'],
    col2: ['PHP', 'Ruby on Rails']
  },
  {
    id: 'frontend',
    title: 'Front End',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <circle cx="12" cy="14" r="1.2" fill="currentColor" />
        <circle cx="16" cy="14" r="1.2" fill="currentColor" />
        <circle cx="20" cy="14" r="1.2" fill="currentColor" />
        <rect x="11" y="23" width="9" height="10" rx="1.5" />
        <line x1="24" y1="24" x2="36" y2="24" strokeWidth="1.8" />
        <line x1="24" y1="28" x2="36" y2="28" strokeWidth="1.8" />
        <line x1="24" y1="32" x2="32" y2="32" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['React', 'Vue'],
    col2: ['Angular']
  },
  {
    id: 'database',
    title: 'Database',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="12" rx="14" ry="5.5" />
        <path d="M10 12 V22 C10 25 16 27.5 24 27.5 C32 27.5 38 25 38 22 V12" />
        <path d="M10 22 V32 C10 35 16 37.5 24 37.5 C32 35 38 32 38 32 V22" />
      </svg>
    ),
    col1: ['SQL Server', 'MongoDB', 'Elasticsearch'],
    col2: ['MySQL', 'PostgreSQL', 'Oracle']
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="28" height="20" rx="2" />
        <circle cx="24" cy="20" r="6" strokeWidth="1.8" />
        <ellipse cx="24" cy="20" rx="2.5" ry="6" strokeWidth="1.8" />
        <line x1="18" y1="20" x2="30" y2="20" strokeWidth="1.8" />
        <path d="M6 30 L42 30 C43 30, 43 33, 41 33 L7 33 C5 33, 5 30, 6 30 Z" />
        <path d="M24 24 L24 16 M21 19 L24 16 L27 19" strokeWidth="2" />
      </svg>
    ),
    col1: ['AWS', 'Azure', 'Kubernetes'],
    col2: ['Google Cloud', 'Docker']
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="11" />
        <path d="M19 20 L22 23 L29 16" strokeWidth="2.5" />
        <path d="M17 29 L14 41 L24 37 L34 41 L31 29" />
      </svg>
    ),
    col1: ['Selenium', 'Test Rail', 'Postman'],
    col2: ['Apache JMeter', 'BrowserStack', 'OWASP ZAP']
  },
  {
    id: 'mobility',
    title: 'Mobility',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="6" width="24" height="36" rx="4" />
        <line x1="20" y1="10" x2="28" y2="10" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="36" r="2" />
        <path d="M18 20 C18 16 30 16 30 20 C30 24 18 24 18 28 C18 32 30 32 30 28" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['iOS', 'Android', 'Flutter'],
    col2: ['React Native', 'Xamarin']
  }
];

export const TechnologyStackGrid = ({
  title = "Technology Stack",
  subtitle = "We employ cutting-edge technologies and tools to make sure your applications are built on the latest technology. Have a look at our tech stack:",
  cards = defaultTechCards
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Centered Heading & Subtitle (1:1 Reference Match) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            {subtitle}
          </p>
        </div>

        {/* 6 Tech Stack Cards Grid (3 Columns x 2 Rows Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F0F8FC] rounded-[14px] sm:rounded-[16px] p-6 sm:p-7 border border-[#E0F0FA] shadow-[0_2px_12px_rgba(0,95,150,0.03)] hover:shadow-[0_8px_24px_rgba(0,95,150,0.08)] transition-all duration-300 flex flex-col justify-start"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center space-x-3.5 mb-5 pb-1">
                <div className="shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* 2-Column Item List with Dash Prefix */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px] sm:text-[14px] text-[#475569] font-medium leading-[1.7]">
                <div className="space-y-1.5">
                  {card.col1.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#64748B] font-bold">-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {card.col2.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#64748B] font-bold">-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyStackGrid;
