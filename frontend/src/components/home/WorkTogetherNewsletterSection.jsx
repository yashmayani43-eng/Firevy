import React from 'react';
import { Link } from 'react-router-dom';

export const WorkTogetherNewsletterSection = ({
  data,
  title,
  subtitle,
  buttonText,
  buttonLink,
  hideBanner = false,
  showBanner = true
}) => {
  const bannerTitle =
    title ||
    data?.bannerTitle ||
    data?.title ||
    "Hope You Will Provide Us A Chance To Prove Our Mettle.";
  const bannerDescription =
    subtitle ||
    data?.bannerDescription ||
    data?.description ||
    "Contact us by booking an appointment with our proficient techs today to learn more about how Sapphire can help you unlock technology visions and drive your product strategy.";
  const bannerButtonText = buttonText || data?.bannerButtonText || data?.buttonText || "Request A Free Quote";
  const bannerButtonLink = buttonLink || data?.bannerButtonLink || data?.buttonLink || "/contact";

  const shouldShowBanner = !hideBanner && showBanner && !data?.hideBanner;

  return (
    <>
      {/* 1. Sapphire Blue Work Together / Prove Our Mettle CTA Banner */}
      {shouldShowBanner && (
        <section className="py-14 sm:py-16 bg-[#006085] text-white text-center relative overflow-hidden font-sans border-b border-cyan-900">
          {/* Background Decorative Translucent Tile Shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-4 left-6 w-32 h-32 rounded-2xl bg-white/20" />
            <div className="absolute top-10 left-1/4 w-44 h-44 rounded-3xl bg-white/20" />
            <div className="absolute bottom-4 left-1/3 w-36 h-36 rounded-2xl bg-white/20" />
            <div className="absolute top-6 right-1/4 w-40 h-40 rounded-2xl bg-white/20" />
            <div className="absolute bottom-6 right-10 w-48 h-48 rounded-3xl bg-white/20" />
            <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-56 h-28 rounded-3xl bg-white/20" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <h2
              className="text-white tracking-tight mb-3 whitespace-pre-line section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '34px',
                lineHeight: '41px',
                color: 'rgb(255, 255, 255)'
              }}
            >
              {bannerTitle}
            </h2>
            <p className="text-[14.5px] sm:text-[16px] font-[400] text-blue-50/90 leading-relaxed max-w-3xl mx-auto mb-7 font-sans section-content-desc">
              {bannerDescription}
            </p>
            <div>
              <Link
                to={bannerButtonLink}
                className="inline-flex items-center justify-center px-9 py-3 rounded-[4px] bg-white hover:bg-slate-100 text-[#006085] font-[800] text-[15px] transition-all shadow-md hover:shadow-lg font-sans"
              >
                {bannerButtonText}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WorkTogetherNewsletterSection;
