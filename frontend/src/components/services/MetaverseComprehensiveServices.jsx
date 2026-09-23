import React, { useState, useEffect, useRef } from 'react';

const comprehensiveServices = [
  {
    title: 'Metaverse 3D Space & World Building',
    desc: 'Build persistent, hyper-realistic 3D virtual worlds, spatial terrains, and interactive architectural environments powered by Unity, Unreal Engine 5, and WebGL.'
  },
  {
    title: 'Web3, Smart Contracts & Tokenomics',
    desc: 'Integrate decentralized smart contracts, token economies, ERC-721/1155 NFTs, and non-custodial crypto wallets for verifiable digital asset ownership.'
  },
  {
    title: '3D Avatar Creation, Rigging & Customization',
    desc: 'Engineer high-fidelity customizable 3D avatars with facial motion capture, clothing physics, and cross-platform interoperable avatar standards.'
  },
  {
    title: 'Metaverse Gaming & Simulation Engines',
    desc: 'Develop multi-user real-time gaming arenas, spatial physics simulations, and interactive quest engines with low latency and high concurrency.'
  },
  {
    title: 'Decentralized Virtual Real Estate & Showrooms',
    desc: 'Design interactive virtual showrooms, expo booths, architectural twins, and digital land parcels that foster high-impact brand experiences.'
  },
  {
    title: 'Metaverse E-Commerce & Virtual Try-On',
    desc: 'Create spatial 3D shopping malls, real-time avatar fashion try-ons, and immersive checkout experiences bridging digital goods with physical delivery.'
  }
];

export const MetaverseComprehensiveServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-slide every 3.2 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comprehensiveServices.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardStep = 380;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="py-14 sm:py-20 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 sm:mb-12">
        <h2 className="font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 text-[28px] sm:text-[34px] lg:text-[40px] font-sans">
          Our Comprehensive Metaverse Development Services
        </h2>
        <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal font-sans">
          We provide a variety of Metaverse Solutions that are focused on improving business impact, decentralized monetization, and immersive user engagement!
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel (1:1 with reference) */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {comprehensiveServices.map((card, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-6 sm:p-7 flex flex-col justify-start shadow-2xs border border-[#D0EBFB] select-none min-h-[220px] sm:min-h-[230px] transition-all duration-300 hover:shadow-md hover:bg-[#D4EDFA]"
            >
              <h3 className="font-bold text-[17px] sm:text-[19px] text-[#0B0F19] mb-3 text-left leading-snug tracking-tight font-sans">
                {card.title}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-[1.65] text-left font-normal font-sans">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetaverseComprehensiveServices;
