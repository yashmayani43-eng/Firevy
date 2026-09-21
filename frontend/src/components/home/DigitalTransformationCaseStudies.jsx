import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DigitalTransformationCaseStudies = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 6 Real Enterprise Case Studies matching Home Page
  const fallbackCaseStudies = [
    {
      id: 'lt',
      company: 'Larsen & Toubro',
      bgColor: '#E6F4FA',
      logo: '/images/case_study_images/Images/new/finallogos_1/lt.png',
      desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its primary lines of business, almost 80 years of a strong, customer-focused strategy and a never-ending search for world-class quality.",
      bullets: [
        'Automated safety audits and inspections',
        '24/7 access to safety training resources',
        'Customizable dashboards and reporting tools',
        'Real-time incident reporting and tracking',
        '99% compliance with health and safety regulations'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/l&t.webp'
    },
    {
      id: 'mg',
      company: 'Morris Garages',
      bgColor: '#FFEAEA',
      logo: '/images/case_study_images/Images/new/finallogos_1/mg.png',
      desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
      bullets: [
        'Real-time health data analytics',
        'HIPAA-compliant data security',
        '24/7 access to health resources and support',
        'Personalized health recommendations',
        '98% improvement in employee health monitoring'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/mg.webp'
    },
    {
      id: 'adani',
      company: 'Adani Group',
      bgColor: '#EDEDF6',
      logo: '/images/case_study_images/Images/new/finallogos_1/adani.png',
      desc: "Adani EmCare is a Web + Mobile App used by Adani Group’s medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide preventive healthcare to the employees.",
      bullets: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals',
        'Generating over USD 30 billion in revenue'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/adani.webp'
    },
    {
      id: 'loreal',
      company: "L'Oreal",
      bgColor: '#F3F2EF',
      logo: '/images/case_study_images/Images/new/finallogos_1/loreal.png',
      desc: "This safety improvement application collects observations from organizational Staff and non-staff, and the respective department head will take care of closure observation, and some observation categories will be verified by top management.",
      bullets: [
        '97% reduction in safety incidents',
        'Scalable solution for large enterprises',
        'Recognized for excellence in safety innovation',
        'Automated safety reminders and alerts',
        'Real-time hazard identification and reporting'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/loreal.webp'
    },
    {
      id: 'waymark',
      company: 'Waymark Maps',
      bgColor: '#F9E5F7',
      logo: '/images/case_study_images/Images/new/finallogos_1/waymarkmaps.png',
      desc: "A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, and metro routes, Waymark offers an interactive map.",
      bullets: [
        'Turn-by-turn voice navigation',
        'Points of interest (POI) recommendations',
        'Real-time traffic updates and route optimization',
        'Offline map access for remote areas',
        'Augmented reality (AR) navigation features'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/waymark_map_app.webp'
    },
    {
      id: 'beecar',
      company: 'Bee Car Care',
      bgColor: '#F4F2EC',
      logo: '/images/case_study_images/Images/new/finallogos_1/beecar.png',
      desc: "If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Firevy.co has built a car wash application that allows people to book car wash services in a few clicks.",
      bullets: [
        '96% customer retention rate',
        '92% increase in service bookings',
        'Over 1,10,000 satisfied users',
        'Operating in 90+ locations',
        'User-friendly & Efficient interface for easy booking'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '/images/case_study_images/Images/new/beecar.webp'
    }
  ];

  const sectionTitle = data?.title || 'Digital Transformation Through Innovation and Collective Knowledge';
  const sectionDescription = data?.description || 'At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.';
  
  const caseStudies = (data?.caseStudies && data.caseStudies.length > 0) 
    ? data.caseStudies 
    : fallbackCaseStudies;

  const total = caseStudies.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // 4-second auto-scroll interval
  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 relative font-sans w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] tracking-tight text-slate-900 mb-2 font-sans">
          {sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
          {sectionDescription}
        </p>
      </div>

      {/* Slider Container (Full Width per Slide) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-8">
        <div className="relative overflow-hidden w-full rounded-[28px]">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.id || idx}
                className="w-full shrink-0 rounded-[28px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md transition-all duration-500"
                style={{
                  backgroundColor: cs.bgColor || '#E6F4FA',
                  minHeight: '460px'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
                  {/* LEFT HALF: Description & Points */}
                  <div className="lg:col-span-6 flex flex-col justify-between text-left">
                    <div>
                      {typeof cs.logo === 'string' ? (
                        <div className="mb-4">
                          <img
                            src={cs.logo}
                            alt={cs.company || 'Company Logo'}
                            className="h-10 sm:h-12 w-auto object-contain max-w-[200px]"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      ) : (
                        cs.logo || (
                          <div className="mb-4 text-xl sm:text-2xl font-[950] text-slate-900">
                            {cs.company}
                          </div>
                        )
                      )}

                      <p className="text-xs sm:text-[13.5px] font-[400] text-slate-700 leading-relaxed font-sans mb-5">
                        {cs.desc || cs.description}
                      </p>

                      {cs.bullets && cs.bullets.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {cs.bullets.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-slate-900 font-bold font-sans">
                              <span className="text-slate-950 font-[950] shrink-0 mt-0.5 text-sm">»</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to={cs.caseStudyLink || cs.link || '/portfolio'}
                        className="px-6 py-3 bg-[#111827] hover:bg-slate-800 text-white font-[800] text-xs sm:text-sm rounded-full transition-all shadow-md font-sans"
                      >
                        View Case Study
                      </Link>
                      <Link
                        to={cs.portfolioLink || '/portfolio'}
                        className="px-6 py-3 bg-white/90 border border-slate-400 hover:bg-white text-slate-900 font-[800] text-xs sm:text-sm rounded-full transition-all shadow-xs font-sans"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT HALF: Image Mockup Graphic */}
                  <div className="lg:col-span-6 flex items-center justify-center min-h-[300px]">
                    {cs.mainImg || cs.image || cs.rightMockupImg ? (
                      <div className="w-full h-full rounded-[24px] bg-white/80 p-3 sm:p-4 flex items-center justify-center border border-slate-200/80 shadow-sm overflow-hidden text-left min-h-[320px]">
                        <img
                          src={cs.mainImg || cs.image || cs.rightMockupImg}
                          alt={cs.company || 'Case Study Mockup'}
                          className="max-h-[380px] w-auto max-w-full object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    ) : cs.rightMockup ? (
                      cs.rightMockup
                    ) : (
                      <div className="w-full h-full rounded-[24px] bg-white p-6 flex flex-col justify-center items-center border border-slate-200 text-slate-400">
                        <div className="text-4xl mb-2">📱</div>
                        <span className="text-xs font-bold">{cs.company} Showcase</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs cursor-pointer"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs cursor-pointer"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
