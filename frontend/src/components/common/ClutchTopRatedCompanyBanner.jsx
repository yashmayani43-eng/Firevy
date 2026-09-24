import React from 'react';
import Container from './Container';

export const ClutchTopRatedCompanyBanner = ({ title }) => {
  return (
    <section className="py-4 sm:py-5 bg-[#005F96] text-white font-sans text-left border-y border-cyan-800/60 overflow-hidden">
      <Container className="max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Title & Laurel Wreath Trophy */}
          <div className="flex items-center space-x-4 shrink-0">
            <h3 className="text-[19px] sm:text-[23px] font-[900] text-white tracking-tight leading-tight font-sans">
              {title || (
                <>
                  World Wide Top Rated IT<br className="hidden sm:inline" /> Company on Clutch
                </>
              )}
            </h3>

            {/* Golden Laurel Wreath Trophy Cup */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="goldWreathGradCommon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF176" />
                    <stop offset="40%" stopColor="#FFD700" />
                    <stop offset="75%" stopColor="#FFA000" />
                    <stop offset="100%" stopColor="#FF8F00" />
                  </linearGradient>
                  <linearGradient id="goldCupGradCommon" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFF9C4" />
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#E65100" />
                  </linearGradient>
                </defs>
                <path d="M50 80 C32 78 18 64 18 45 C18 30 28 18 42 14" stroke="url(#goldWreathGradCommon)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M50 80 C68 78 82 64 82 45 C82 30 72 18 58 14" stroke="url(#goldWreathGradCommon)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <ellipse cx="40" cy="15" rx="3.5" ry="7" transform="rotate(-40 40 15)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="32" cy="22" rx="3.5" ry="7" transform="rotate(-30 32 22)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="25" cy="32" rx="3.5" ry="7" transform="rotate(-15 25 32)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="21" cy="44" rx="3.5" ry="7" transform="rotate(0 21 44)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="22" cy="56" rx="3.5" ry="7" transform="rotate(15 22 56)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="28" cy="67" rx="3.5" ry="7" transform="rotate(30 28 67)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="36" cy="75" rx="3.5" ry="7" transform="rotate(45 36 75)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="60" cy="15" rx="3.5" ry="7" transform="rotate(40 60 15)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="68" cy="22" rx="3.5" ry="7" transform="rotate(30 68 22)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="75" cy="32" rx="3.5" ry="7" transform="rotate(15 75 32)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="79" cy="44" rx="3.5" ry="7" transform="rotate(0 79 44)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="78" cy="56" rx="3.5" ry="7" transform="rotate(-15 78 56)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="72" cy="67" rx="3.5" ry="7" transform="rotate(-30 72 67)" fill="url(#goldWreathGradCommon)" />
                <ellipse cx="64" cy="75" rx="3.5" ry="7" transform="rotate(-45 64 75)" fill="url(#goldWreathGradCommon)" />
                <polygon points="50,77 54,81 50,85 46,81" fill="url(#goldWreathGradCommon)" />
                <path d="M38 67 H62 L60 72 H40 Z" fill="url(#goldCupGradCommon)" />
                <rect x="42" y="64" width="16" height="3" fill="url(#goldWreathGradCommon)" />
                <rect x="47" y="55" width="6" height="9" fill="url(#goldWreathGradCommon)" />
                <path d="M35 28 H65 V46 C65 53 57 58 50 58 C43 58 35 53 35 46 Z" fill="url(#goldCupGradCommon)" />
                <ellipse cx="50" cy="28" rx="15" ry="3" fill="#FFFDE7" />
                <path d="M35 32 C26 32 26 44 35 46" stroke="url(#goldWreathGradCommon)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M65 32 C74 32 74 44 65 46" stroke="url(#goldWreathGradCommon)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* 5 Specific Reference Badges Row matching Image 2 */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 overflow-x-auto max-w-full py-1">
            {/* Badge 1: Red Ribbon Badge - Most Reviewed Dedicated Software Dev */}
            <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
              <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
              <text x="45" y="30" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">DEDICATED</text>
              <text x="45" y="38" textAnchor="middle" fill="#B91C1C" fontSize="5.2" fontWeight="800">SOFTWARE DEVELOPMENT</text>
              <text x="45" y="46" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">COMPANY 2024</text>
              <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
              <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
              <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
              <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
              <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
            </svg>

            {/* Badge 2: Red Ribbon Badge - Most Reviewed Software Developers */}
            <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
              <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
              <text x="45" y="34" textAnchor="middle" fill="#B91C1C" fontSize="6.5" fontWeight="900">SOFTWARE</text>
              <text x="45" y="44" textAnchor="middle" fill="#1E293B" fontSize="6.5" fontWeight="900">DEVELOPERS</text>
              <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
              <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
              <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
              <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
              <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
            </svg>

            {/* Badge 3: Blue Circular Seal Badge - GoodFirms */}
            <svg className="w-[92px] sm:w-[102px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 100 110" fill="none">
              <circle cx="50" cy="48" r="44" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
              <circle cx="50" cy="48" r="38" fill="#0369A1" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              <g fill="#F59E0B" fontSize="8" textAnchor="middle">
                <text x="32" y="24">★</text>
                <text x="41" y="20">★</text>
                <text x="50" y="18">★</text>
                <text x="59" y="20">★</text>
                <text x="68" y="24">★</text>
              </g>
              <path d="M44 26h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6v-7z" fill="#FBBF24" />
              <rect x="42" y="25" width="16" height="2" fill="#FDE047" />
              <rect x="48" y="39" width="4" height="4" fill="#D97706" />
              <rect x="45" y="43" width="10" height="2" fill="#FBBF24" />
              <text x="50" y="52" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
              <text x="50" y="58" textAnchor="middle" fill="white" fontSize="5" fontWeight="800">SOFTWARE</text>
              <text x="50" y="64" textAnchor="middle" fill="white" fontSize="5" fontWeight="800">DEVELOPMENT COMPANY</text>
              <path d="M10 74L20 68H80L90 74L80 82H20L10 74Z" fill="#1D4ED8" stroke="white" strokeWidth="1" />
              <text x="50" y="78" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="900" letterSpacing="0.5">goodfirms.co</text>
              <path d="M18 80L10 94L24 88L26 80H18Z" fill="#1E40AF" />
              <path d="M82 80L90 94L76 88L74 80H82Z" fill="#1E40AF" />
            </svg>

            {/* Badge 4: Red Ribbon Badge - Most Reviewed On-Demand Software Dev */}
            <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
              <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
              <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
              <text x="45" y="30" textAnchor="middle" fill="#B91C1C" fontSize="5.5" fontWeight="800">ON-DEMAND SOFTWARE</text>
              <text x="45" y="38" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="800">DEVELOPMENT COMPANY</text>
              <text x="45" y="46" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">2024</text>
              <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
              <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
              <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
              <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
              <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
            </svg>

            {/* Badge 5: Hexagonal Clutch Badge */}
            <svg className="w-[85px] sm:w-[95px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
              <polygon points="45,2 85,22 85,88 45,108 5,88 5,22" fill="white" stroke="#334155" strokeWidth="2" />
              <polygon points="45,6 81,24 81,86 45,104 9,86 9,24" fill="none" stroke="#64748B" strokeWidth="0.8" />
              <path d="M18 16H72V34H18V16Z" fill="#1E293B" />
              <text x="45" y="24" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
              <text x="45" y="30" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">SOFTWARE COMPANY</text>
              <text x="45" y="58" textAnchor="middle" fill="#0F172A" fontSize="16" fontFamily="sans-serif" fontWeight="900" letterSpacing="-0.5">Clutch</text>
              <circle cx="63" cy="48" r="2" fill="#DA291C" />
              <line x1="20" y1="68" x2="70" y2="68" stroke="#CBD5E1" strokeWidth="1" />
              <text x="45" y="78" textAnchor="middle" fill="#334155" fontSize="6.5" fontWeight="900" letterSpacing="0.3">DEVELOPERS</text>
              <text x="45" y="88" textAnchor="middle" fill="#64748B" fontSize="8" fontWeight="900">2022</text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClutchTopRatedCompanyBanner;
