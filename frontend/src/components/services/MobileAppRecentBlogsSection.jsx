import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const mobileAppBlogsData = [
  {
    id: 1,
    date: 'January 8, 2024',
    title: 'Mobile App Ideas to Boost Your Business Growth in 2023',
    excerpt: 'Explore innovative mobile app concepts and feature strategies designed to accelerate digital...',
    banner: {
      bgGradient: 'from-[#E8EEFD] via-[#EDE8FA] to-[#FDE8F3]',
      tagTitle: (
        <>
          <span className="font-[800] text-[#2563EB] text-[13px] sm:text-[14px] block">Mobile App</span>
          <span className="font-[700] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Ideas to Boost</span>
          <span className="font-[700] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Your Business</span>
          <span className="font-[800] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Growth in 2023</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          <defs>
            <linearGradient id="phoneGrad3d1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312E81" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
            <linearGradient id="cardGrad3d1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
            <filter id="shadow3d1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#1E1B4B" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 3D Angled Phone Frame with Bright White Screen */}
          <g filter="url(#shadow3d1)" transform="rotate(-8 80 70)">
            <rect x="52" y="12" width="64" height="114" rx="14" fill="url(#phoneGrad3d1)" />
            <rect x="55" y="15" width="58" height="108" rx="11" fill="#FFFFFF" />
            <rect x="74" y="19" width="20" height="3" rx="1.5" fill="#E2E8F0" />

            {/* Colorful Screen Widgets */}
            <rect x="61" y="28" width="46" height="26" rx="6" fill="#3B82F6" />
            <circle cx="72" cy="41" r="5" fill="#FFFFFF" opacity="0.9" />
            <rect x="80" y="36" width="20" height="3" rx="1.5" fill="#FFFFFF" />
            <rect x="80" y="42" width="14" height="3" rx="1.5" fill="#BFDBFE" />

            <rect x="61" y="60" width="46" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="66" y="66" width="18" height="18" rx="5" fill="#EC4899" />
            <rect x="87" y="68" width="15" height="3" rx="1.5" fill="#94A3B8" />
            <rect x="87" y="74" width="12" height="3" rx="1.5" fill="#CBD5E1" />

            <rect x="66" y="89" width="36" height="8" rx="4" fill="#F97316" />
          </g>

          {/* Floating 3D Play/Media Card Badge */}
          <g filter="url(#shadow3d1)" transform="translate(104, 20)">
            <rect x="0" y="0" width="40" height="36" rx="9" fill="url(#cardGrad3d1)" />
            <circle cx="20" cy="18" r="9" fill="#FFFFFF" opacity="0.95" />
            <polygon points="18,13 25,18 18,23" fill="#F43F5E" />
          </g>

          {/* Floating 3D User Bubble */}
          <g filter="url(#shadow3d1)" transform="translate(114, 66)">
            <circle cx="18" cy="18" r="16" fill="#A855F7" />
            <circle cx="18" cy="14" r="5.5" fill="#FFFFFF" />
            <path d="M 10 27 C 10 22, 14 20, 18 20 C 22 20, 26 22, 26 27 Z" fill="#FFFFFF" />
          </g>
        </svg>
      )
    }
  },
  {
    id: 2,
    date: 'November 30, 2023',
    title: 'Securing Your Mobile App: The Essential Cybersecurity Guide',
    excerpt: 'Before deploying an app, protect client data with robust cybersecurity protocols, biometric...',
    banner: {
      bgGradient: 'from-[#E0F2FE] via-[#E6F4FE] to-[#DDF4FF]',
      tagTitle: (
        <>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Securing Your</span>
          <span className="font-[800] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Mobile App :</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">The <span className="font-[800] text-[#7C3AED]">Essential</span></span>
          <span className="font-[800] text-[#7C3AED] text-[10.5px] sm:text-[11.5px] block leading-tight">Cybersecurity</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Guide</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          <defs>
            <linearGradient id="phoneGrad3d2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="lockGrad3d2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="shadow3d2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#0EA5E9" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 3D Vertical Phone Display with Light Screen */}
          <g filter="url(#shadow3d2)" transform="translate(68, 12)">
            <rect x="0" y="0" width="62" height="114" rx="12" fill="url(#phoneGrad3d2)" />
            <rect x="3" y="3" width="56" height="108" rx="9" fill="#F8FAFC" />

            {/* Screen UI: Security Shield Diagram */}
            <rect x="10" y="16" width="42" height="48" rx="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 31 24 C 38 24 42 27 42 34 C 42 45 31 52 31 52 C 31 52 20 45 20 34 C 20 27 24 24 31 24 Z" fill="#7C3AED" />
            <path d="M 31 31 V 44 M 27 37 H 35" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

            <rect x="12" y="74" width="38" height="8" rx="4" fill="#0EA5E9" opacity="0.8" />
            <rect x="16" y="88" width="30" height="6" rx="3" fill="#CBD5E1" />
          </g>

          {/* Floating 3D Security Keyhole Padlock Badge */}
          <g filter="url(#shadow3d2)" transform="translate(88, 60)">
            <path d="M 12 12 V -2 C 12 -12, 28 -12, 28 -2 V 12" fill="none" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="0" y="8" width="40" height="34" rx="8" fill="url(#lockGrad3d2)" />
            <circle cx="20" cy="22" r="4" fill="#FFFFFF" />
            <rect x="18" y="22" width="4" height="8" rx="1" fill="#FFFFFF" />
          </g>

          {/* Floating 3D Security User Badge */}
          <g filter="url(#shadow3d2)" transform="translate(42, 74)">
            <circle cx="15" cy="15" r="14" fill="#6366F1" />
            <circle cx="15" cy="11" r="5" fill="#FFFFFF" />
            <path d="M 7 22 C 7 17, 11 16, 15 16 C 19 16, 23 17, 23 22 Z" fill="#FFFFFF" />
          </g>
        </svg>
      )
    }
  },
  {
    id: 3,
    date: 'September 21, 2023',
    title: 'Start Making Money Now: Create an MVP for Your Mobile App',
    excerpt: 'Step-by-step roadmap to building a high-impact minimum viable product (MVP), validating market...',
    banner: {
      bgGradient: 'from-[#E0F2FE] via-[#EAF5FF] to-[#F0F7FF]',
      tagTitle: (
        <>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Start Making</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Money Now:</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Create an <span className="font-[800] text-[#2563EB]">MVP</span></span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">for Your Mobile App</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          <defs>
            <linearGradient id="screenGrad3d3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
            <filter id="shadow3d3" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* 3D Dashboard Window Screen */}
          <g filter="url(#shadow3d3)" transform="translate(28, 20)">
            <rect x="0" y="0" width="92" height="68" rx="9" fill="url(#screenGrad3d3)" stroke="#3B82F6" strokeWidth="2" />
            <rect x="0" y="0" width="92" height="15" rx="9" fill="#2563EB" />
            <circle cx="8" cy="7.5" r="2.5" fill="#FF5F56" />
            <circle cx="16" cy="7.5" r="2.5" fill="#FFBD2E" />
            <circle cx="24" cy="7.5" r="2.5" fill="#27C93F" />

            {/* Line Graph Card */}
            <rect x="8" y="23" width="40" height="36" rx="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
            <path d="M 12 50 L 20 40 L 28 44 L 38 30" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="38" cy="30" r="3" fill="#F59E0B" />

            {/* Right Bar Widgets */}
            <rect x="52" y="23" width="32" height="6" rx="3" fill="#2563EB" />
            <rect x="52" y="33" width="26" height="4" rx="2" fill="#94A3B8" />
            <rect x="52" y="41" width="20" height="4" rx="2" fill="#CBD5E1" />
          </g>

          {/* 3D Character Standing & Waving (Yellow Shirt, Blue Jeans) */}
          <g filter="url(#shadow3d3)" transform="translate(114, 42)">
            {/* Head & Hair */}
            <circle cx="16" cy="12" r="7" fill="#FDBA74" />
            <path d="M 9 10 C 9 4, 23 4, 23 10 Z" fill="#451A03" />

            {/* Yellow Shirt */}
            <path d="M 8 21 C 8 18, 24 18, 24 21 L 26 38 L 6 38 Z" fill="#F59E0B" />

            {/* Waving Arm */}
            <path d="M 23 20 L 31 12" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="11" r="2.5" fill="#FDBA74" />

            {/* Blue Pants */}
            <rect x="9" y="38" width="6" height="24" rx="2" fill="#1D4ED8" />
            <rect x="17" y="38" width="6" height="24" rx="2" fill="#1D4ED8" />

            {/* Shoes */}
            <rect x="7" y="60" width="9" height="4" rx="2" fill="#0F172A" />
            <rect x="17" y="60" width="9" height="4" rx="2" fill="#0F172A" />
          </g>

          {/* Floating Gold Badge */}
          <g filter="url(#shadow3d3)" transform="translate(128, 14)">
            <circle cx="10" cy="10" r="9" fill="#F59E0B" />
            <polygon points="10,4 12,8 16,8 13,11 14,15 10,12 6,15 7,11 4,8 8,8" fill="#FFFFFF" />
          </g>
        </svg>
      )
    }
  }
];

export const MobileAppRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white text-slate-900 text-left font-sans">
      {/* Section Header Matching Screenshot */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {mobileAppBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Matching Screenshot */}
              <div className={`relative w-full h-36 sm:h-40 overflow-hidden bg-gradient-to-br ${blog.banner.bgGradient} p-3.5 sm:p-4 flex flex-col justify-between select-none`}>
                {/* Top Left Firevy.Co Logo */}
                <div className="flex items-center">
                  <img
                    src="/firevy_logo_dark.png"
                    alt="Firevy.Co"
                    className="h-4 sm:h-4.5 w-auto max-w-[95px] object-contain select-none"
                  />
                </div>

                {/* Banner Content Layout: Tag text on left, Illustration on right */}
                <div className="flex items-end justify-between gap-2 mt-auto">
                  <div className="max-w-[130px] sm:max-w-[140px] mb-0.5">
                    {blog.banner.tagTitle}
                  </div>
                  <div className="shrink-0 flex items-center justify-end -mr-1 -mb-1">
                    {blog.banner.illustration}
                  </div>
                </div>
              </div>

              {/* Bottom Details Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3 font-sans text-left bg-white">
                <div className="space-y-2">
                  {/* Date */}
                  <span className="text-xs font-semibold text-[#8C98A4] font-sans block">
                    {blog.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-[800] text-[#0F172A] leading-snug line-clamp-2 group-hover:text-[#005F96] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[12.5px] text-[#475569] font-normal leading-relaxed line-clamp-2 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-[700] text-[#005F96] group-hover:underline">
                    <span>Get more details</span>
                    <span className="ml-1 text-sm font-bold transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered "View All" Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-xs sm:text-sm px-8 py-2.5 rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 tracking-wide cursor-pointer"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppRecentBlogsSection;
