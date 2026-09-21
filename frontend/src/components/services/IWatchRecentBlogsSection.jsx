import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const FirevyLogo = () => (
  <div className="flex items-center select-none">
    <img
      src="/firevy_logo_dark.png"
      alt="Firevy.Co"
      className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-2xs"
    />
  </div>
);

const iwatchBlogsData = [
  {
    id: 1,
    date: 'January 8, 2024',
    title: 'Mobile App Ideas to Boost Your Business Growth in 2023',
    excerpt: 'Explore innovative mobile app concepts and feature strategies designed to accelerate digital engagement and business revenue...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-[#EAE8FE] overflow-hidden select-none border-b border-slate-100 flex items-center">
        {/* Full 3D Rendered Background Illustration */}
        <img
          src="/images/swift_blog_1.jpg"
          alt="Mobile App Ideas 3D"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Soft Left Gradient Overlay to make Text 100% Crisp */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#EAE8FE] via-[#EAE8FE]/90 to-transparent z-10 pointer-events-none" />

        {/* Top Left: Official Firevy.Co Brand Logo */}
        <div className="absolute top-3.5 left-4 z-30">
          <img src="/firevy_logo_dark.png" alt="Firevy.Co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-xs" />
        </div>

        {/* Left Typography */}
        <div className="relative z-20 text-left pl-4 sm:pl-5 pt-5 space-y-1 font-sans max-w-[55%]">
          <span className="text-[#2563EB] font-[900] text-[15px] sm:text-[16.5px] block leading-tight tracking-tight">
            Mobile App
          </span>
          <span className="text-[#0F172A] font-[800] text-[13px] sm:text-[14px] block leading-snug tracking-tight">
            Ideas to Boost<br />Your Business<br />Growth in 2023
          </span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    date: 'November 30, 2023',
    title: 'Securing Your Mobile App : The Essential Cybersecurity Guide',
    excerpt: 'Before deploying an app, protect client data with robust cybersecurity protocols, biometric authentication, and active penetration testing...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-[#D7EFFF] overflow-hidden select-none border-b border-slate-100 flex items-center">
        {/* Full 3D Rendered Background Illustration with 3D Shield & Mobile Device */}
        <img
          src="/images/iwatch_blog_2.png"
          alt="Securing Your Mobile App 3D"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Soft Left Gradient Overlay to make Text 100% Crisp */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#D7EFFF] via-[#D7EFFF]/95 to-transparent z-10 pointer-events-none" />

        {/* Top Left: Official Firevy.Co Brand Logo */}
        <div className="absolute top-3.5 left-4 z-30">
          <img src="/firevy_logo_dark.png" alt="Firevy.Co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-xs" />
        </div>

        {/* Left Typography */}
        <div className="relative z-20 text-left pl-4 sm:pl-5 pt-5 space-y-0.5 font-sans max-w-[55%]">
          <span className="text-[#0F172A] font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Securing Your<br />Mobile App :
          </span>
          <span className="text-[#0284C7] font-[900] text-[13px] sm:text-[14px] block leading-snug tracking-tight">
            The Essential<br />Cybersecurity
          </span>
          <span className="text-[#0F172A] font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Guide
          </span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    date: 'September 21, 2023',
    title: 'Start Making Money Now: Create an MVP for Your Mobile App',
    excerpt: 'Step-by-step roadmap to building a high-impact minimum viable product (MVP), validating market demand, and generating early cashflow...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-[#E0F2FE] overflow-hidden select-none border-b border-slate-100 flex items-center">
        {/* Full 3D Rendered Background Illustration with 3D iPad & Dashboard UI */}
        <img
          src="/images/ipad_hero_3d_illustration.jpg"
          alt="Create an MVP 3D"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Soft Left Gradient Overlay to make Text 100% Crisp */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#E0F2FE] via-[#E0F2FE]/95 to-transparent z-10 pointer-events-none" />

        {/* Top Left: Official Firevy.Co Brand Logo */}
        <div className="absolute top-3.5 left-4 z-30">
          <img src="/firevy_logo_dark.png" alt="Firevy.Co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-xs" />
        </div>

        {/* Left Typography */}
        <div className="relative z-20 text-left pl-4 sm:pl-5 pt-5 space-y-0.5 font-sans max-w-[55%]">
          <span className="text-[#0F172A] font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Start Making<br />Money Now:
          </span>
          <span className="text-[#0F172A] font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Create an <span className="text-[#0284C7] font-[900]">MVP</span><br />
            for Your Mobile App
          </span>
        </div>
      </div>
    )
  }
];

export const IWatchRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white text-slate-900 text-left font-sans">
      {/* Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {iwatchBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Graphic with 1:1 Firevy.Co logo */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-50 flex items-center justify-center">
                {blog.renderGraphic()}
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

export default IWatchRecentBlogsSection;
