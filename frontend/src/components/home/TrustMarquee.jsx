import React, { useState, useEffect } from 'react';
import { getMediaUrl } from '../../utils/mediaUrl';
import { homePageService } from '../../services/homePageService';

const defaultBrandLogos = [
  { name: 'Almarai', color: 'text-blue-600', symbol: '🥛', image: '/images/almarai_corporate_logo.png', isActive: true },
  { name: 'ORIENT CEMENT', color: 'text-emerald-600', symbol: '🏗️', image: '/images/orient_logo.svg', isActive: true },
  { name: 'AMERICAN EXPRESS', color: 'text-blue-700', symbol: '💳', image: '/images/logo_american_express.svg', isActive: true },
  { name: 'Alembic', color: 'text-blue-600', symbol: '🧪', image: '/images/alembic_logo.svg', isActive: true },
  { name: 'HONDA', color: 'text-red-600', symbol: '🏎️', image: '/images/honda_logo.png', isActive: true },
  { name: 'LafargeHolcim', color: 'text-slate-800', symbol: '🏢', image: '/images/logo_lafargeHolcim.svg', isActive: true },
  { name: 'Cummins', color: 'text-red-600', symbol: '⚙️', image: '/images/ncummins.png', isActive: true },
  { name: "L'ORÉAL", color: 'text-slate-900', symbol: '✨', image: '/images/logo_loreal.png', isActive: true },
  { name: 'OPSYS care', color: 'text-blue-600', symbol: '🏥', image: '/images/opsys_care_logo.svg', isActive: true },
  { name: 'SEASWORTH JEWELS', color: 'text-[#0D1A2D]', symbol: '💍', image: '/images/seasworth_jewels.png', isActive: true },
  { name: 'TATVAM OVERSEAS', color: 'text-[#C6A87D]', symbol: '✨', image: '/images/tatvam_overseas.jpg', isActive: true },
  { name: 'DH', color: 'text-[#8B0014]', symbol: '💎', image: '/images/dh_logo.jpg', isActive: true },
  { name: 'PARAM', color: 'text-red-700', symbol: '🔴', image: '/images/param_logo.svg', isActive: true },
  { name: 'TDSG', color: 'text-red-600', symbol: '➕', image: '/images/logo_tdsg.png', isActive: true },
  { name: 'ASTRAL PIPES', color: 'text-blue-600', symbol: '💧', image: '/images/logo_astral.png', isActive: true },
  { name: 'CLP INDIA', color: 'text-yellow-600', symbol: '⚡', image: '/images/logo_clp_india.svg', isActive: true },
  { name: 'adani', color: 'text-blue-600', symbol: '🌱', image: '/images/logo_adani.svg', isActive: true },
  { name: 'LARSEN & TOUBRO', color: 'text-blue-900', symbol: '⚙️', image: '/images/logo_larsen_toubro.svg', isActive: true },
  { name: 'TOYOTA', color: 'text-red-600', symbol: '🚗', image: '/images/toyota_logo.webp', isActive: true }
];

export const TrustMarquee = ({ data }) => {
  const [dynamicLogos, setDynamicLogos] = useState(data?.logos || null);

  useEffect(() => {
    if (data?.logos && Array.isArray(data.logos) && data.logos.length > 0) {
      setDynamicLogos(data.logos);
      return;
    }
    let isMounted = true;
    homePageService.getHomePageData()
      .then((res) => {
        if (isMounted && res?.sections?.trustMarquee?.logos) {
          setDynamicLogos(res.sections.trustMarquee.logos);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [data]);

  const activeLogos = dynamicLogos || data?.logos || defaultBrandLogos;
  const brandLogos = (Array.isArray(activeLogos) && activeLogos.filter((l) => l.isActive !== false).length > 0)
    ? activeLogos.filter((l) => l.isActive !== false)
    : defaultBrandLogos;

  return (
    <section className="py-6 bg-white border-y border-slate-200 text-slate-900 overflow-hidden relative font-sans shadow-sm">
      {/* Infinite Auto-Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Fades on Left & Right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-8 sm:mx-10 py-1.5 px-3 opacity-90 hover:opacity-100 transition-all duration-200 cursor-pointer shrink-0 h-10 sm:h-12"
            >
              {logo.image ? (
                <img
                  src={getMediaUrl(logo.image)}
                  alt={logo.name || 'Brand Logo'}
                  className="h-7 sm:h-9 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-200 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
              ) : null}
              <span className={`${logo.image ? 'hidden' : 'inline-block'} text-base sm:text-lg font-black tracking-wider ${logo.color || 'text-slate-800'} font-sans uppercase`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

