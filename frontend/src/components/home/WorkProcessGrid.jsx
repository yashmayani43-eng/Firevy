import React from 'react';

const topRowSteps = [
  {
    step: '01',
    title: 'Requirement Gathering',
    desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
    bg: 'bg-[#ECE7FE] border-[#DDD8FE]',
    nodeColor: '#A855F7',
    icon: (
      <svg className="w-12 h-12 text-[#8B5CF6]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v2" />
        <path d="M7.5 7.5l1.5 1.5" />
        <path d="M24.5 7.5l-1.5 1.5" />
        <path d="M4 16h2" />
        <path d="M26 16h2" />
        <path d="M11 16a5 5 0 0 1 10 0c0 2-1.5 3.5-2.5 4.5v1.5h-5V20.5c-1-1-2.5-2.5-2.5-4.5z" />
        <line x1="13.5" y1="25" x2="18.5" y2="25" />
        <line x1="14.5" y1="28" x2="17.5" y2="28" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Designs, Wireframes, & Mockups',
    desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
    bg: 'bg-[#E5F7E8] border-[#C8EED0]',
    nodeColor: '#22C55E',
    icon: (
      <svg className="w-12 h-12 text-[#0D9488]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3.2" fill="#0D9488" stroke="#0D9488" />
        <circle cx="24" cy="8" r="3.2" fill="#0D9488" stroke="#0D9488" />
        <circle cx="16" cy="24" r="3.2" fill="#0D9488" stroke="#0D9488" />
        <line x1="11.5" y1="8" x2="20.5" y2="8" />
        <line x1="9.5" y1="10.8" x2="14.5" y2="21.5" />
        <line x1="22.5" y1="10.8" x2="17.5" y2="21.5" />
        <circle cx="16" cy="14" r="1.5" fill="#0D9488" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Prototype Demo',
    desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
    bg: 'bg-[#FDF0E7] border-[#FADCD0]',
    nodeColor: '#F97316',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="10" height="18" rx="2.5" />
        <line x1="8" y1="11" x2="12" y2="11" />
        <circle cx="10" cy="23" r="0.8" fill="currentColor" />
        <rect x="17" y="5" width="10" height="18" rx="2.5" />
        <line x1="20" y1="8" x2="24" y2="8" />
        <circle cx="22" cy="20" r="0.8" fill="currentColor" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Changes And Confirmation',
    desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
    bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
    nodeColor: '#F59E0B',
    icon: (
      <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="16" cy="16" r="1.8" fill="currentColor" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
      </svg>
    )
  }
];

const bottomRowSteps = [
  {
    step: '08',
    title: 'SEO',
    desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.',
    bg: 'bg-[#F6FBDD] border-[#E5F2A8]',
    nodeColor: '#84CC16',
    icon: (
      <svg className="w-12 h-12 text-[#65A30D]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="9" />
        <line x1="20.5" y1="20.5" x2="28" y2="28" strokeWidth="3" />
        <text x="14" y="17" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#65A30D" stroke="none" fontFamily="sans-serif">SEO</text>
      </svg>
    )
  },
  {
    step: '07',
    title: 'Support And Maintenance',
    desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement',
    bg: 'bg-[#F6E8FD] border-[#E9D5FF]',
    nodeColor: '#A855F7',
    icon: (
      <svg className="w-12 h-12 text-[#9333EA]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="3" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <circle cx="7.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="10.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="13.5" cy="9" r="0.8" fill="currentColor" />
        <path d="M19 16a2.5 2.5 0 0 0-3.5 0l-4 4a1.8 1.8 0 0 0 2.5 2.5l4-4a2.5 2.5 0 0 0 0-3.5" />
        <path d="M19.5 15.5l1.5-1.5" />
      </svg>
    )
  },
  {
    step: '06',
    title: 'Deployment',
    desc: "We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.",
    bg: 'bg-[#E2F7F8] border-[#BAE6FD]',
    nodeColor: '#06B6D4',
    icon: (
      <svg className="w-12 h-12 text-[#0891B2]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="3" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <circle cx="7.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="10.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="13.5" cy="9" r="0.8" fill="currentColor" />
        <line x1="16" y1="15" x2="16" y2="21" />
        <polyline points="13 18.5 16 21.5 19 18.5" />
        <line x1="11" y1="23.5" x2="21" y2="23.5" />
      </svg>
    )
  },
  {
    step: '05',
    title: 'Development',
    desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.',
    bg: 'bg-[#FDE7EE] border-[#FBCFE8]',
    nodeColor: '#EC4899',
    icon: (
      <svg className="w-12 h-12 text-[#DB2777]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="3" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <circle cx="7.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="10.5" cy="9" r="0.8" fill="currentColor" />
        <circle cx="13.5" cy="9" r="0.8" fill="currentColor" />
        <polyline points="12 17 9 20 12 23" />
        <polyline points="20 17 23 20 20 23" />
        <line x1="17.5" y1="16" x2="14.5" y2="24" />
      </svg>
    )
  }
];

export const WorkProcessGrid = ({ data }) => {
  const title = data?.title || 'Process We Follow';

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 relative font-sans overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-[800] tracking-tight text-slate-950 font-sans">
            {title}
          </h2>
        </div>

        {/* Top Row Cards (01 -> 02 -> 03 -> 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRowSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className={`rounded-[20px] p-6 sm:p-7 border ${stepItem.bg} flex flex-col justify-between min-h-[290px] shadow-xs hover:shadow-md transition-all duration-300 relative group`}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="shrink-0 flex items-center justify-start">
                  {stepItem.icon}
                </div>
                <span className="text-[34px] sm:text-[38px] font-[900] text-slate-800 font-sans tracking-tight leading-none">
                  {stepItem.step}
                </span>
              </div>

              <div className="space-y-2 mt-auto text-left">
                <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-950 leading-tight font-sans">
                  {stepItem.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                  {stepItem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Process Connector Track (1:1 Reference Match to Image 1) */}
        <div className="hidden lg:block w-full my-2 select-none pointer-events-none">
          <svg
            viewBox="0 0 1200 130"
            className="w-full h-auto max-w-[1240px] mx-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Row: 4 Vertical Downward Arrows (from Cards 01-04 to Top Nodes) */}
            <g stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Above Node 01 */}
              <line x1="141" y1="2" x2="141" y2="28" />
              <polyline points="137,24 141,28 145,24" />

              {/* Above Node 02 */}
              <line x1="447" y1="2" x2="447" y2="28" />
              <polyline points="443,24 447,28 451,24" />

              {/* Above Node 03 */}
              <line x1="753" y1="2" x2="753" y2="28" />
              <polyline points="749,24 753,28 757,24" />

              {/* Above Node 04 */}
              <line x1="1059" y1="2" x2="1059" y2="28" />
              <polyline points="1055,24 1059,28 1063,24" />
            </g>

            {/* Main Rounded Pathway Container Box matching Image 1 */}
            <rect
              x="50"
              y="32"
              width="1100"
              height="66"
              rx="16"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />

            {/* Top Lane Connections (01 -> 02 -> 03 -> 04) */}
            <g stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round">
              <line x1="152" y1="48" x2="436" y2="48" />
              <line x1="458" y1="48" x2="742" y2="48" />
              <line x1="764" y1="48" x2="1048" y2="48" />
            </g>

            {/* Top Lane Grey Right Arrows */}
            <g fill="#94A3B8">
              <polygon points="300,44 308,48 300,52" />
              <polygon points="606,44 614,48 606,52" />
              <polygon points="912,44 920,48 912,52" />
            </g>

            {/* Top Row Nodes (Hollow circles with colored outlines) */}
            {/* Node 01: Purple */}
            <circle cx="141" cy="48" r="8" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.5" />
            {/* Node 02: Green */}
            <circle cx="447" cy="48" r="8" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2.5" />
            {/* Node 03: Orange */}
            <circle cx="753" cy="48" r="8" fill="#FFFFFF" stroke="#F97316" strokeWidth="2.5" />
            {/* Node 04: Yellow */}
            <circle cx="1059" cy="48" r="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />

            {/* Bottom Lane Connections (08 <- 07 <- 06 <- 05) */}
            <g stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round">
              <line x1="152" y1="82" x2="436" y2="82" />
              <line x1="458" y1="82" x2="742" y2="82" />
              <line x1="764" y1="82" x2="1048" y2="82" />
            </g>

            {/* Bottom Lane Grey Left Arrows */}
            <g fill="#94A3B8">
              <polygon points="908,82 916,78 916,86" />
              <polygon points="602,82 610,78 610,86" />
              <polygon points="296,82 304,78 304,86" />
            </g>

            {/* Bottom Row Nodes (Hollow circles with colored outlines) */}
            {/* Node 08: Lime */}
            <circle cx="141" cy="82" r="8" fill="#FFFFFF" stroke="#84CC16" strokeWidth="2.5" />
            {/* Node 07: Purple */}
            <circle cx="447" cy="82" r="8" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.5" />
            {/* Node 06: Cyan */}
            <circle cx="753" cy="82" r="8" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="2.5" />
            {/* Node 05: Pink */}
            <circle cx="1059" cy="82" r="8" fill="#FFFFFF" stroke="#EC4899" strokeWidth="2.5" />

            {/* Bottom Row: 4 Vertical Downward Arrows (from Bottom Nodes to Cards 08-05) */}
            <g stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Below Node 08 */}
              <line x1="141" y1="98" x2="141" y2="126" />
              <polyline points="137,122 141,126 145,122" />

              {/* Below Node 07 */}
              <line x1="447" y1="98" x2="447" y2="126" />
              <polyline points="443,122 447,126 451,122" />

              {/* Below Node 06 */}
              <line x1="753" y1="98" x2="753" y2="126" />
              <polyline points="749,122 753,126 757,122" />

              {/* Below Node 05 */}
              <line x1="1059" y1="98" x2="1059" y2="126" />
              <polyline points="1055,122 1059,126 1063,122" />
            </g>
          </svg>
        </div>

        {/* Bottom Row Cards (08 <- 07 <- 06 <- 05) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-0">
          {bottomRowSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className={`rounded-[20px] p-6 sm:p-7 border ${stepItem.bg} flex flex-col justify-between min-h-[290px] shadow-xs hover:shadow-md transition-all duration-300 relative group`}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="shrink-0 flex items-center justify-start">
                  {stepItem.icon}
                </div>
                <span className="text-[34px] sm:text-[38px] font-[900] text-slate-800 font-sans tracking-tight leading-none">
                  {stepItem.step}
                </span>
              </div>

              <div className="space-y-2 mt-auto text-left">
                <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-950 leading-tight font-sans">
                  {stepItem.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                  {stepItem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessGrid;
