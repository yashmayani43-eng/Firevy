import React, { useState } from 'react';
import Container from './Container';

export const PhpCompanyVideoBanner = ({
  title = "PHP Development Company",
  videoUrl = "https://www.youtube.com/embed/L_LUpnjgPso"
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-white font-sans text-slate-900 relative overflow-hidden text-center border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight mb-10 font-sans">
          {title}
        </h2>

        {/* Card Container with Background Glow Orbs */}
        <div className="relative max-w-4xl mx-auto flex justify-center items-center">
          
          {/* Top-Left Soft Blue Circle Glow */}
          <div className="absolute -top-10 -left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-cyan-200/50 blur-2xl pointer-events-none" />

          {/* Bottom-Right Soft Pink Circle Glow */}
          <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-rose-200/50 blur-2xl pointer-events-none" />

          {/* Main Dark Blue Video Card */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#091124] via-[#112347] to-[#1a3763] border-4 border-white shadow-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Card Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] sm:min-h-[380px] p-6 sm:p-10 items-center relative z-10 text-left">
              
              {/* Left Side: PHP Oval Badge & Title */}
              <div className="md:col-span-6 space-y-4 flex flex-col justify-center items-start">
                {/* Oval PHP Logo */}
                <div className="inline-flex items-center justify-center bg-[#4F5D95] border-2 border-[#384572] rounded-full px-7 py-2.5 shadow-lg">
                  <span className="text-3xl sm:text-4xl font-[900] italic text-white tracking-wider font-sans">
                    php
                  </span>
                </div>

                {/* Development Services Text */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#C084FC] tracking-tight leading-tight drop-shadow-md">
                  Development<br />
                  <span className="text-[#E9D5FF]">Services</span>
                </h3>
              </div>

              {/* Right Side: Graphic Illustration (Hands on Keyboard & Code Monitor) */}
              <div className="md:col-span-6 flex justify-end items-center mt-6 md:mt-0">
                <svg className="w-full max-w-[340px] h-auto" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing Code Monitor */}
                  <rect x="180" y="20" width="150" height="130" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <rect x="186" y="26" width="138" height="118" rx="4" fill="#0F172A" />
                  {/* Code lines inside monitor */}
                  <rect x="196" y="38" width="40" height="4" rx="2" fill="#38BDF8" />
                  <rect x="242" y="38" width="60" height="4" rx="2" fill="#64748B" />
                  <rect x="196" y="48" width="90" height="4" rx="2" fill="#E2E8F0" />
                  <rect x="196" y="58" width="70" height="4" rx="2" fill="#38BDF8" />
                  <rect x="196" y="68" width="110" height="4" rx="2" fill="#C084FC" />
                  <rect x="196" y="78" width="80" height="4" rx="2" fill="#E2E8F0" />
                  <rect x="196" y="88" width="50" height="4" rx="2" fill="#38BDF8" />
                  <rect x="196" y="98" width="100" height="4" rx="2" fill="#64748B" />
                  <rect x="196" y="108" width="65" height="4" rx="2" fill="#E2E8F0" />

                  {/* Keyboard 3D Perspective */}
                  <polygon points="120,180 290,130 330,175 140,230" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5" />
                  {/* Glowing Keys Grid */}
                  <polygon points="135,182 285,138 315,172 150,218" fill="#312E81" />
                  {/* Key rows */}
                  <line x1="142" y1="190" x2="292" y2="146" stroke="#818CF8" strokeWidth="1.5" opacity="0.6" />
                  <line x1="147" y1="200" x2="297" y2="156" stroke="#818CF8" strokeWidth="1.5" opacity="0.6" />
                  <line x1="152" y1="210" x2="302" y2="166" stroke="#818CF8" strokeWidth="1.5" opacity="0.6" />

                  {/* Mouse */}
                  <ellipse cx="325" cy="200" rx="12" ry="8" fill="#38BDF8" />

                  {/* Developer Hands Typing */}
                  <path d="M 60 250 C 90 220, 130 200, 180 195" stroke="#FDBA74" strokeWidth="16" strokeLinecap="round" />
                  <path d="M 120 250 C 150 210, 180 180, 230 175" stroke="#FDBA74" strokeWidth="16" strokeLinecap="round" />
                  {/* Sleeves */}
                  <path d="M 40 250 L 90 230" stroke="#4C1D95" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 100 250 L 140 220" stroke="#4C1D95" strokeWidth="22" strokeLinecap="round" />
                </svg>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Outer Pulsing Ring */}
                  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-400/30 animate-ping opacity-75" />
                  
                  {/* Play Circle Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md border-2 border-white/40 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Video Modal Popup */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
                <h3 className="font-bold text-base sm:text-lg">{title}</h3>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>

              {/* Video Player */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title={title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PhpCompanyVideoBanner;
