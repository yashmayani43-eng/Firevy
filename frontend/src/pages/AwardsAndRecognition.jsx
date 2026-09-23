import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import { getMediaUrl } from '../utils/mediaUrl';
import { Award, Star, Trophy, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

export const AwardsAndRecognition = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title="Awards & Recognition | Firevy.Co"
        description="Explore the awards and recognition Firevy.Co has received from Clutch, GoodFirms, Upwork, and industry forums for excellence in web & mobile app development."
        canonical="/awards-and-recognition"
      />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00668C]/10 text-[#00668C] font-[700] text-[13px] tracking-wide uppercase font-sans">
                <Trophy className="w-4 h-4 stroke-[2.2]" />
                <span>Excellence & Recognition</span>
              </div>
              <h1 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                Awards & Recognition
              </h1>
              <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl">
                Firevy.Co marks their presence with a proven track record. We enjoy the highest rating with verified unbiased reviews across top global review platforms.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15.5px] transition-all shadow-md group font-sans"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center relative select-none">
              <div className="relative w-full max-w-[540px] max-h-[380px] flex items-center justify-center">
                <img
                  src={getMediaUrl('/images/events-hero.svg')}
                  alt="Awards and Recognition"
                  className="w-full h-auto max-h-[380px] object-contain drop-shadow-xl rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <AboutKeyMetrics
        data={{
          title: "Recognition And Rewards Motivate Us To Outperform",
          description: "Since 2002, we have been going that extra mile to create exceptional digital transformations for our clients. Genuine customer reviews on review platforms are proof that Firevy.Co offers top-notch web & mobile app development services."
        }}
      />

      {/* 3. FEATURED AWARDS TIMELINE SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[34px] sm:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Major Industry Milestones
            </h2>
            <p className="text-[15.5px] text-slate-600 leading-relaxed font-sans">
              Key national and international awards celebrating our contribution to digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: 2019 Award */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 text-left group">
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
                Vidyalaya team has been striving hard for bringing digital transformation in schools. Under the “Digital India” campaign, we digitized over 1600+ schools in rural, urban & metro cities, including Tribal District Residential Schools with the motto of “Ek Kadam Shiksha Ki Aur”. Awarded at Vibrant Technology Summit 2019 by IDEATHON and GESIA.
              </p>
            </div>

            {/* Card 2: 2021 Award */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 text-left group">
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
                Won the Indian Achievers Award in 2021 in recognition of outstanding professional achievement and contribution in digitally transforming schools with an innovative ERP platform. Indian Achievers Forum acknowledged our team for spreading digital excellence nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AWARDS & BADGES GRID */}
      <section className="py-20 bg-white font-sans text-slate-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[34px] sm:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              We’re Proud To Have Picked These Up Along The Way
            </h2>
            <p className="text-[15.5px] text-slate-600 leading-relaxed font-sans">
              Our expertise has been recognized by top global software review platforms. Work with Firevy.Co, and we’ll do our part to make your project worthy of high praise, too.
            </p>
          </div>

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

      {/* 5. CLIENT REVIEWS SECTION */}
      <ClientReviewsDarkSection />

      {/* 6. MONUMENTAL QUOTE BANNER */}
      <section className="py-16 bg-white border-t border-b border-slate-100 text-center font-sans">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 space-y-6">
          <blockquote className="text-[20px] sm:text-[25px] font-[700] text-slate-900 max-w-4xl mx-auto leading-relaxed font-sans italic">
            “This journey of Firevy.Co has been monumental. To receive this recognition from our clients is truly the icing on the cake. Team Firevy.Co is now more ready, and more motivated, than ever.”
          </blockquote>
          <p className="text-[14.5px] font-[700] text-[#00668C] uppercase tracking-widest font-sans">
            Engage our team and enjoy your business growth.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[800] text-[15.5px] transition-all shadow-md font-sans"
            >
              CONTACT US HERE
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default AwardsAndRecognition;
