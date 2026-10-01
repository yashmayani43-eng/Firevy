import React, { useState, useEffect } from 'react';
import { getMediaUrl } from '../../utils/mediaUrl';
import { homePageService } from '../../services/homePageService';

const defaultBrandLogos = [
  { name: 'TDSG', color: 'text-red-600', symbol: '➕', image: '/images/logo_tdsg.png', isActive: true },
  { name: 'ASTRAL PIPES', color: 'text-blue-600', symbol: '💧', image: '/images/logo_astral.png', isActive: true },
  { name: 'CLP INDIA', color: 'text-yellow-600', symbol: '⚡', image: '/images/logo_clp_india.svg', isActive: true },
  { name: 'adani', color: 'text-blue-600', symbol: '🌱', image: '/images/logo_adani.svg', isActive: true },
  { name: 'TOYOTA', color: 'text-red-600', symbol: '🚗', image: '/images/toyota_logo.webp', isActive: true },
  { name: 'Almarai', color: 'text-blue-600', symbol: '🥛', image: '/images/almarai_corporate_logo.png', isActive: true },
  { name: 'ORIENT CEMENT', color: 'text-emerald-600', symbol: '🏗️', image: '/images/orient_logo.svg', isActive: true },
  { name: 'AMERICAN EXPRESS', color: 'text-blue-700', symbol: '💳', image: '/images/logo_american_express.svg', isActive: true },
  { name: 'Alembic', color: 'text-blue-600', symbol: '🧪', image: '/images/alembic_logo.svg', isActive: true },
  { name: 'LafargeHolcim', color: 'text-slate-800', symbol: '🏢', image: '/images/logo_lafargeHolcim.svg', isActive: true },
  { name: 'Cummins', color: 'text-red-600', symbol: '⚙️', image: '/images/ncummins.png', isActive: true },
  { name: "L'ORÉAL", color: 'text-slate-900', symbol: '✨', image: '/images/logo_loreal.png', isActive: true },
  { name: 'LARSEN & TOUBRO', color: 'text-blue-900', symbol: '⚙️', image: '/images/logo_larsen_toubro.svg', isActive: true }
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

  const rawLogos = dynamicLogos || data?.logos;
  const hasImageLogos = Array.isArray(rawLogos) && rawLogos.some((l) => l.image && l.isActive !== false);
  const activeLogos = hasImageLogos
    ? rawLogos.filter((l) => l.isActive !== false)
    : defaultBrandLogos;
  const brandLogos = activeLogos.length > 0 ? activeLogos : defaultBrandLogos;

  return (
    <section className="py-6 bg-white border-y border-slate-200 text-slate-900 overflow-hidden relative font-sans shadow-xs">
      {/* Infinite Auto-Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Fades on Left & Right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-6 sm:mx-8 py-2 px-3 opacity-90 hover:opacity-100 transition-all duration-200 cursor-pointer shrink-0 h-12 sm:h-14"
            >
              {logo.image ? (
                <img
                  src={getMediaUrl(logo.image)}
                  alt={logo.name || 'Brand Logo'}
                  className="h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[170px] object-contain transition-transform duration-200 hover:scale-105"
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

