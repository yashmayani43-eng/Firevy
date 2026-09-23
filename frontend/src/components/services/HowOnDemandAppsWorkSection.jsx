import React, { useRef } from 'react';
import Container from '../common/Container';
import {
  Download,
  Search,
  FileText,
  BellRing,
  CheckCircle2,
  CreditCard,
  Truck,
  MonitorCheck,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const HowOnDemandAppsWorkSection = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Download & Sign In',
      desc: 'Customers download and sign in to the customer app.',
      icon: Download,
      position: 'bottom'
    },
    {
      number: '02',
      title: 'Search Services',
      desc: 'Users use search criteria to find on-demand services.',
      icon: Search,
      position: 'top'
    },
    {
      number: '03',
      title: 'Submit Request',
      desc: 'The user submits a request for a particular type of service.',
      icon: FileText,
      position: 'bottom'
    },
    {
      number: '04',
      title: 'Connect Provider',
      desc: 'The app notifies and connects service providers.',
      icon: BellRing,
      position: 'top'
    },
    {
      number: '05',
      title: 'Accept Request',
      desc: 'The service provider validates and accepts the request.',
      icon: CheckCircle2,
      position: 'bottom'
    },
    {
      number: '06',
      title: 'Easy Payment',
      desc: 'Users may pay through credit card or cash on delivery, whatever option is available.',
      icon: CreditCard,
      position: 'top'
    },
    {
      number: '07',
      title: 'Service Delivery',
      desc: 'The provider provides the requested service.',
      icon: Truck,
      position: 'bottom'
    },
    {
      number: '08',
      title: 'Real-time Tracking',
      desc: "Users can monitor the delivery's progress while it is in transit",
      icon: MonitorCheck,
      position: 'top'
    },
    {
      number: '09',
      title: 'Rate & Review',
      desc: 'Once a service is delivered, users rate and evaluate it',
      icon: Star,
      position: 'bottom'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 relative overflow-hidden">
      <Container>
        {/* Navigation Arrows Header controls matching screenshot */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <button
            onClick={() => handleScroll('left')}
            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 focus:outline-none"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 focus:outline-none"
            aria-label="Next step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            How Do On-Demand Apps Work?
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            On-demand app development process is quite easy , which you may consider for your own on-demand application development.
          </p>
        </div>

        {/* Main Diagram Image Display (Desktop / Tablet high fidelity matching screenshot) */}
        <div className="hidden md:block max-w-6xl mx-auto overflow-x-auto pb-6 scrollbar-none" ref={scrollContainerRef}>
          <div className="min-w-[1000px] flex items-center justify-center py-4">
            <img
              src="/images/how_do_ondemand_apps_work_flow.png"
              alt="How Do On-Demand Apps Work Process Diagram"
              className="w-full h-auto object-contain max-h-[420px]"
            />
          </div>
        </div>

        {/* Responsive Mobile / Tablet Layout Cards View */}
        <div className="block md:hidden max-w-xl mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between relative group hover:border-sky-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-full bg-sky-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default HowOnDemandAppsWorkSection;
