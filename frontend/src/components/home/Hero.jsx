import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const defaultSlides = [
  {
    _id: 'hero_slide_1',
    tag: 'AI Innovation',
    titleLine1: 'Your Vision,',
    titleLine2: 'Our Technology',
    subTag: '(Limitless Possibilities)',
    bullets: [
      'Named by **Clutch** as the **Top AI (Artificial Intelligence)** Company in India and USA.',
      'Trusted by **20+ Fortune 500 Companies and a Clutch Leader.**',
      "We've been Redefining Excellence for over **Two Decades.**"
    ],
    rightBoxTitle: 'Personalized Fitness Journeys',
    rightBoxSub: 'Powered by Intelligent AI',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
    backgroundImageUrl: '',
    bgType: 'video',
    isActive: true
  },
  {
    _id: 'hero_slide_2',
    tag: 'Enterprise Engineering',
    titleLine1: 'Scalable Systems,',
    titleLine2: 'Global Performance',
    subTag: '(Engineered for Growth)',
    bullets: [
      'Top 1% Senior **React, Node & Cloud Architects.**',
      '**ISO 9001:2015 & Enterprise SOC2** Ready Infrastructure.',
      '**Sub-50ms API Latency** with **99.99% Guaranteed Uptime.**'
    ],
    rightBoxTitle: 'Redefined Learning Experiences',
    rightBoxSub: 'With Intelligent AI Innovation',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
    backgroundImageUrl: '',
    bgType: 'video',
    isActive: true
  },
  {
    _id: 'hero_slide_3',
    tag: 'Custom App Solutions',
    titleLine1: 'Transforming Ideas,',
    titleLine2: 'Empowering Brands',
    subTag: '(Native & Cross-Platform)',
    bullets: [
      '**500+ High-Impact** Digital Products Delivered Worldwide.',
      '**Seamless Multi-Device** Web & Mobile UX Engineering.',
      '**Agile 2-Week Sprint Delivery** with Full Transparency.'
    ],
    rightBoxTitle: 'Immersive Product Design',
    rightBoxSub: 'Crafted for Modern Enterprise',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
    backgroundImageUrl: '',
    bgType: 'video',
    isActive: true
  }
];

// Helper to render bullet points with exact bold highlights matching reference screenshot
const renderFormattedBullet = (text) => {
  if (!text) return null;

  // Handle Markdown **bold**
  if (typeof text === 'string' && text.includes('**')) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-[800] text-white">{part.slice(2, -2)}</strong>;
      }
      return <span key={i} className="text-white/95 font-normal">{part}</span>;
    });
  }

  // Handle HTML <strong>
  if (typeof text === 'string' && text.includes('<strong>')) {
    const parts = text.split(/(<strong>.*?<\/strong>)/gi);
    return parts.map((part, i) => {
      if (part.toLowerCase().startsWith('<strong>') && part.toLowerCase().endsWith('</strong>')) {
        const content = part.replace(/<\/?strong>/gi, '');
        return <strong key={i} className="font-[800] text-white">{content}</strong>;
      }
      return <span key={i} className="text-white/95 font-normal">{part}</span>;
    });
  }

  // Fallback phrase highlighting if stored as plain text in database
  if (typeof text === 'string') {
    if (text.includes('Clutch') && (text.includes('Top AI') || text.includes('Artificial Intelligence'))) {
      return (
        <>
          <span className="text-white/95 font-normal">Named by </span>
          <strong className="font-[800] text-white">Clutch</strong>
          <span className="text-white/95 font-normal"> as the </span>
          <strong className="font-[800] text-white">Top AI (Artificial Intelligence)</strong>
          <span className="text-white/95 font-normal"> Company in India and USA.</span>
        </>
      );
    }
    if (text.includes('20+ Fortune 500 Companies and a Clutch Leader')) {
      return (
        <>
          <span className="text-white/95 font-normal">Trusted by </span>
          <strong className="font-[800] text-white">20+ Fortune 500 Companies and a Clutch Leader.</strong>
        </>
      );
    }
    if (text.includes('Two Decades')) {
      return (
        <>
          <span className="text-white/95 font-normal">We’ve been Redefining Excellence for over </span>
          <strong className="font-[800] text-white">Two Decades.</strong>
        </>
      );
    }
    if (text.includes('#1 Web Development')) {
      const parts = text.split('#1 Web Development');
      return (
        <>
          <span className="text-white/95 font-normal">{parts[0]}</span>
          <strong className="font-[800] text-white">#1 Web Development</strong>
          <span className="text-white/95 font-normal">{parts[1]}</span>
        </>
      );
    }
  }

  return <span className="text-white/95 font-normal">{text}</span>;
};

export const Hero = ({ data }) => {
  // Normalize slides array from data.slides, top-level data fields, or defaultSlides
  const slides = (data?.slides && Array.isArray(data.slides) && data.slides.filter(s => s.isActive !== false).length > 0)
    ? data.slides.filter(s => s.isActive !== false)
    : (data && (data.tag || data.titleLine1 || data.titleLine2 || data.title || data.bullets)
      ? [{
        tag: data.tag,
        titleLine1: data.titleLine1,
        titleLine2: data.titleLine2,
        title: data.title,
        subTag: data.subTag || data.subtitle,
        bullets: data.bullets,
        primaryCtaText: data.primaryCtaText,
        primaryCtaLink: data.primaryCtaLink,
        backgroundVideoUrl: data.backgroundVideoUrl,
        backgroundImageUrl: data.backgroundImageUrl,
        bgType: data.bgType,
        rightBoxTitle: data.rightBoxTitle,
        rightBoxSub: data.rightBoxSub,
        isActive: true
      }]
      : defaultSlides);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Keep index within bounds if slide count changes
  useEffect(() => {
    if (currentSlideIndex >= slides.length) {
      setCurrentSlideIndex(0);
    }
  }, [slides.length, currentSlideIndex]);

  // Auto-rotate slides smoothly every 7 seconds (pauses on mouse hover)
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const currentSlide = slides[currentSlideIndex] || slides[0] || defaultSlides[0];

  const tag = currentSlide.tag || defaultSlides[0].tag;
  const titleLine1 = currentSlide.titleLine1 || (currentSlide.title ? currentSlide.title : defaultSlides[0].titleLine1);
  const titleLine2 = currentSlide.titleLine2 || (currentSlide.title ? '' : defaultSlides[0].titleLine2);
  const subTag = currentSlide.subTag || currentSlide.subtitle || defaultSlides[0].subTag;
  const bullets = (Array.isArray(currentSlide.bullets) && currentSlide.bullets.length > 0)
    ? currentSlide.bullets
    : defaultSlides[0].bullets;
  const primaryCtaText = currentSlide.primaryCtaText || defaultSlides[0].primaryCtaText;
  const primaryCtaLink = currentSlide.primaryCtaLink || defaultSlides[0].primaryCtaLink;
  const rightBoxTitle = currentSlide.rightBoxTitle || defaultSlides[0].rightBoxTitle;
  const rightBoxSub = currentSlide.rightBoxSub || defaultSlides[0].rightBoxSub;

  const getVideoUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
      return url;
    }
    if (url.startsWith('/uploads/') || url.startsWith('uploads/')) {
      const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const cleanUrl = url.startsWith('/') ? url : `/${url}`;
      return `${backendBase.replace(/\/$/, '')}${cleanUrl}`;
    }
    return url;
  };

  const bgType = currentSlide.bgType || (currentSlide.backgroundImageUrl ? 'image' : 'video');
  const backgroundVideoUrl = currentSlide.backgroundVideoUrl || defaultSlides[0].backgroundVideoUrl;
  const backgroundImageUrl = currentSlide.backgroundImageUrl || '';

  const resolvedVideoUrl = getVideoUrl(backgroundVideoUrl);

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-[94vh] flex items-end pt-48 sm:pt-56 lg:pt-64 pb-5 sm:pb-7 lg:pb-8 overflow-hidden bg-[#011120] font-sans text-left"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Background Video / Image Layer with Precise Sapphire-Style Navy Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {bgType === 'image' && backgroundImageUrl ? (
          <img
            key={backgroundImageUrl}
            src={backgroundImageUrl}
            alt={tag || 'Hero Banner'}
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] transition-opacity duration-700"
          />
        ) : (
          <video
            key={resolvedVideoUrl}
            src={resolvedVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
        )}
        {/* Dual Dark Navy Gradient Overlays matching Sapphire Solutions reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011422] via-[#011627]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011120]/75 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Hero Main Content Container - Positioned Lower Down */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-14 pb-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 w-full"
          >

            {/* Left Column: Headline, Subtitle, Bullets, CTA */}
            <div className="max-w-3xl space-y-3 sm:space-y-3.5">

              {/* Main Headline: Single H1 containing Tag + Title Line 1 + Line 2 with Exact Same Font Size */}
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[800] tracking-tight leading-[1.12] font-sans">
                {tag && <span className="block text-white mb-0.5">{tag}</span>}
                {(titleLine1 || titleLine2) && (
                  <span className="block">
                    {titleLine1 && <span className="text-[#009BE5]">{titleLine1} </span>}
                    {titleLine2 && <span className="text-[#E83D98]">{titleLine2}</span>}
                  </span>
                )}
              </h1>

              {/* Subtitle in Parentheses */}
              {subTag && (
                <p className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] font-[400] text-white/95 tracking-normal font-sans pt-0.5">
                  {subTag}
                </p>
              )}

              {/* Dynamic Bullet Points List with bold keyword highlights matching reference */}
              {bullets && bullets.length > 0 && (
                <ul className="space-y-2.5 pt-2 max-w-2xl text-slate-100 text-[14.5px] sm:text-[15.5px] font-normal font-sans leading-relaxed">
                  {bullets.map((bullet, idx) => {
                    if (!bullet) return null;
                    return (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="text-white text-base font-bold leading-none mt-1 select-none">•</span>
                        <span className="leading-snug">{renderFormattedBullet(bullet)}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Primary CTA Button: Let's Talk */}
              {primaryCtaText && (
                <div className="pt-4">
                  <Link
                    to={primaryCtaLink || '/contact'}
                    className="inline-flex items-center justify-center px-7 py-2.5 rounded-[4px] bg-[#007CA4] hover:bg-[#006A8E] text-white font-[600] text-[15px] transition-all shadow-md font-sans tracking-wide cursor-pointer"
                  >
                    <span>{primaryCtaText}</span>
                  </Link>
                </div>
              )}

              {/* Slide Indicator Dots */}
              {slides.length > 1 && (
                <div className="flex items-center space-x-2 pt-4 select-none">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlideIndex
                          ? 'w-8 bg-[#009BE5]'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Bottom-Right Highlight Text matching Reference Screenshot */}
            {(rightBoxTitle || rightBoxSub) && (
              <div className="flex flex-col items-start text-left shrink-0 pb-2 self-end">
                {rightBoxTitle && (
                  <h3 className="text-[20px] sm:text-[23px] lg:text-[25px] font-[800] text-white tracking-tight leading-tight font-sans">
                    {rightBoxTitle}
                  </h3>
                )}
                {rightBoxSub && (
                  <p className="text-[19px] sm:text-[22px] lg:text-[24px] font-[800] text-[#009BE5] tracking-tight leading-tight font-sans mt-0.5">
                    {rightBoxSub}
                  </p>
                )}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
