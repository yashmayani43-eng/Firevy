import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const dataAnalyticsBlogs = [
  {
    id: 1,
    date: 'January 8, 2024',
    title: 'Mobile App Ideas to Boost Your Business Growth in 2023',
    excerpt: 'Explore innovative mobile app concepts and feature strategies designed to accelerate digital...',
    bannerImg: '/images/data_analytics_blog1.jpg'
  },
  {
    id: 2,
    date: 'November 30, 2023',
    title: 'Securing Your Mobile App : The Essential Cybersecurity Guide',
    excerpt: 'Before deploying an app, protect client data with robust cybersecurity protocols, biometric...',
    bannerImg: '/images/data_analytics_blog2.jpg'
  },
  {
    id: 3,
    date: 'September 21, 2023',
    title: 'Start Making Money Now: Create an MVP for Your Mobile App',
    excerpt: 'Step-by-step roadmap to building a high-impact minimum viable product (MVP), validating market...',
    bannerImg: '/images/data_analytics_blog3.jpg'
  }
];

export const DataAnalyticsRecentBlogsSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden border-b border-slate-100">
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto mt-2">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {dataAnalyticsBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Image */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-50 select-none">
                <img
                  src={blog.bannerImg}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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

export default DataAnalyticsRecentBlogsSection;
