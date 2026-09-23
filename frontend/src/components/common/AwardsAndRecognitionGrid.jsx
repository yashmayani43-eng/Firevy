import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { getMediaUrl } from '../../utils/mediaUrl';

const awardBadges = [
  {
    id: 1,
    title: 'Top Mobile App Developers 2024',
    organization: 'Clutch',
    year: '2024',
    image: '/images/clutch.png',
    desc: 'Recognized by Clutch as a top tier mobile application development firm globally.'
  },
  {
    id: 2,
    title: 'Top Software Development Company',
    organization: 'GoodFirms',
    year: '2023',
    image: '/images/goodfirms.png',
    desc: 'Rated among top software development agencies for customer satisfaction and delivery.'
  },
  {
    id: 3,
    title: 'Top Rated Plus Agency',
    organization: 'Upwork',
    year: '2024',
    image: '/images/9_upwork.png',
    desc: 'Top 1% performing team with 100% job success score on Upwork platform.'
  },
  {
    id: 4,
    title: 'Preferred Freelancer Badge',
    organization: 'Freelancer',
    year: '2023',
    image: '/images/10_freelancer.png',
    desc: 'Elite member of Freelancer Preferred program for enterprise solution delivery.'
  },
  {
    id: 5,
    title: 'Best Digital Transformation in Education',
    organization: 'GESIA & IDEATHON',
    year: '2019',
    image: '/images/gesia.png',
    desc: 'Honored at Vibrant Technology Summit for digitizing over 1600+ institutions.'
  },
  {
    id: 6,
    title: 'Indian Achievers Award',
    organization: 'Indian Achievers Forum',
    year: '2021',
    image: '/images/gcci.png',
    desc: 'Awarded for outstanding professional achievement & contribution to society.'
  },
  {
    id: 7,
    title: 'Top App Development Company 2022',
    organization: 'The Manifest',
    year: '2022',
    image: '/images/top_the_manifest_app_development_company_2022_award.webp',
    desc: 'Recognized for high client satisfaction and technical excellence in mobile solutions.'
  },
  {
    id: 8,
    title: 'ISO 27001:2013 Security Certified',
    organization: 'ISO International',
    year: 'Certified',
    image: '/images/iso_footer.png',
    desc: 'Global certification for information security management and data protection.'
  }
];

export const AwardsAndRecognitionGrid = ({
  title = "We’re Proud To Have Picked These Up Along The Way",
  subtitle = "Our expertise has been recognized by all. Work with Firevy.Co, and we’ll do our part to make your project worthy of high praise, too."
}) => {
  return (
    <section className="py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[34px] sm:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
            {subtitle}
          </p>
        </div>

        {/* Milestone Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 rounded-[20px] p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 text-left group">
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full bg-[#00668C] text-white font-[800] text-[14px]">
                2019
              </span>
              <Trophy className="w-8 h-8 text-amber-500 stroke-[1.8]" />
            </div>
            <h3 className="text-[22px] font-[800] text-slate-900 group-hover:text-[#00668C] transition-colors font-sans">
              Best Digital Transformation In Educational Sector
            </h3>
            <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
              Vidyalaya team has been striving hard for bringing digital transformation in schools. Under the “Digital India” campaign, we digitized over 1600+ schools in rural, urban & metro cities. Awarded at Vibrant Technology Summit 2019 by IDEATHON and GESIA.
            </p>
          </div>

          <div className="bg-slate-50 rounded-[20px] p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 text-left group">
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full bg-[#00668C] text-white font-[800] text-[14px]">
                2021
              </span>
              <Award className="w-8 h-8 text-amber-500 stroke-[1.8]" />
            </div>
            <h3 className="text-[22px] font-[800] text-slate-900 group-hover:text-[#00668C] transition-colors font-sans">
              Indian Achievers Award
            </h3>
            <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
              Won the Indian Achievers Award in 2021 in recognition of outstanding professional achievement and contribution in digitally transforming schools with an innovative ERP platform.
            </p>
          </div>
        </div>

        {/* 8-Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white rounded-[18px] border border-slate-200/90 shadow-sm p-6 text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-50 border border-slate-100 p-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={getMediaUrl(badge.image)}
                    alt={badge.title}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = '/images/clutch.png';
                    }}
                  />
                </div>
                <div>
                  <span className="text-[12px] font-[800] text-[#00668C] uppercase tracking-wider font-sans">
                    {badge.organization} • {badge.year}
                  </span>
                  <h3 className="text-[17px] font-[800] text-slate-900 font-sans mt-1 group-hover:text-[#00668C] transition-colors leading-snug">
                    {badge.title}
                  </h3>
                </div>
                <p className="text-[13.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognitionGrid;
