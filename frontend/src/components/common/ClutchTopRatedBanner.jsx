import React from 'react';
import Container from './Container';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';

export const ClutchTopRatedBanner = ({ title = "World Wide Top Rated IT Company on Clutch" }) => {
  // If explicitly requested as "Proud To Have...", fall back to the 4 square awards cards
  if (title && title.toLowerCase().includes('proud to have')) {
    return <TrustRecognitionBanner data={{ title }} />;
  }

  const badges = [
    {
      src: '/images/awards/most_review_softwarecompany_manifest.svg',
      alt: 'Most Reviewed Dedicated Software Development Companies'
    },
    {
      src: '/images/awards/top_mobile_clutchn.svg',
      alt: 'Top Dedicated Software Company Clutch 2022'
    },
    {
      src: '/images/awards/most_review_softwarecompany_manifest.svg',
      alt: 'Most Reviewed Software Development Companies'
    },
    {
      src: '/images/awards/most_web_review_manifest.svg',
      alt: 'Most Reviewed Software Developers'
    },
    {
      src: '/images/awards/top_mobile_app_goodfirm.svg',
      alt: 'Top Dedicated Software Development Company GoodFirms'
    },
    {
      src: '/images/awards/most_review_softwarecompany_manifest.svg',
      alt: 'Most Reviewed Software Development Company'
    }
  ];

  return (
    <section className="py-4 sm:py-5 bg-[#005D89] text-white border-y border-[#004d73] overflow-hidden text-left font-sans select-none">
      <Container className="max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
          {/* Left Column: Title matching Image 1 */}
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-[900] text-white tracking-tight leading-tight font-sans whitespace-normal lg:whitespace-nowrap">
              {title}
            </h2>
          </div>

          {/* Right Column: Trophy + Badges Marquee */}
          <div className="flex items-center gap-5 sm:gap-7 overflow-hidden w-full lg:w-auto">
            {/* Golden Trophy with Laurel Wreath (Exact reference image from Sapphire) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px] shrink-0 flex items-center justify-center">
              <img
                src="/images/awardwinning.png"
                alt="Award Winning IT Company on Clutch"
                className="w-full h-full object-contain drop-shadow-md"
                loading="eager"
              />
            </div>

            {/* Badges Carousel Track */}
            <div className="overflow-hidden relative flex-1">
              <div className="flex w-max items-center gap-5 sm:gap-7 animate-marquee hover:[animation-play-state:paused]">
                {/* Track 1 Badges */}
                <div className="flex items-center gap-5 sm:gap-7 shrink-0">
                  {badges.map((badge, idx) => (
                    <img
                      key={idx}
                      src={badge.src}
                      alt={badge.alt}
                      className="h-16 sm:h-[72px] lg:h-[78px] w-auto object-contain shrink-0 drop-shadow-sm hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ))}
                </div>
                {/* Track 2 Badges for Seamless Infinite Loop */}
                <div className="flex items-center gap-5 sm:gap-7 shrink-0" aria-hidden="true">
                  {badges.map((badge, idx) => (
                    <img
                      key={`loop-${idx}`}
                      src={badge.src}
                      alt={badge.alt}
                      className="h-16 sm:h-[72px] lg:h-[78px] w-auto object-contain shrink-0 drop-shadow-sm hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClutchTopRatedBanner;
