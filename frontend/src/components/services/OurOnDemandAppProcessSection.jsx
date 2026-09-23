import React from 'react';
import Container from '../common/Container';
import {
  Lightbulb,
  LayoutGrid,
  PenTool,
  Code2,
  CheckSquare,
  Monitor
} from 'lucide-react';

export const OurOnDemandAppProcessSection = () => {
  const topSteps = [
    {
      number: '01',
      title: 'Consultation',
      desc: "First, we identify the target audience of the app and understand your requirements thoroughly to make sure we don't miss anything.",
      icon: Lightbulb,
      iconBg: 'bg-[#F3E8FF]',
      iconColor: 'text-[#9333EA]',
      borderDot: 'bg-[#9333EA]'
    },
    {
      number: '02',
      title: 'UI/UX Design',
      desc: 'Once we understand the requirements, we start wireframing and mapping out user flow',
      icon: LayoutGrid,
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
      borderDot: 'bg-[#16A34A]'
    },
    {
      number: '03',
      title: 'Backend And API Development',
      desc: 'In this phase, we create features of the app, develop a backend and create on-demand APIs.',
      icon: PenTool,
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      borderDot: 'bg-[#EA580C]'
    }
  ];

  const bottomSteps = [
    {
      number: '06',
      title: 'Post-Launch',
      desc: 'Once we successfully launch the app, we do the app store optimization and make it available to download at the Play Store and App Store.',
      icon: Monitor,
      iconBg: 'bg-[#FEF9C3]',
      iconColor: 'text-[#CA8A04]',
      borderDot: 'bg-[#CA8A04]'
    },
    {
      number: '05',
      title: 'Validation And Launch',
      desc: 'Our developers will test the closed beta version of the on-demand app development and release it to the public after all features are fully working.',
      icon: CheckSquare,
      iconBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
      borderDot: 'bg-[#DB2777]'
    },
    {
      number: '04',
      title: 'On-Demand Development',
      desc: 'In this phase, our allocated team of developers starts writing the code, layout, main sections and releases in intervals.',
      icon: Code2,
      iconBg: 'bg-[#E0F2FE]',
      iconColor: 'text-[#0284C7]',
      borderDot: 'bg-[#0284C7]'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF6FA] font-sans text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            Our On-Demand App Development Process
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            We follow a transparent and agile process to develop the best on-demand apps. Have a look at our process
          </p>
        </div>

        {/* Process Flow Cards Container */}
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Top Row: Cards 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {topSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] sm:rounded-[22px] p-6 sm:p-7 shadow-md border border-slate-100/80 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] text-left relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Watermark Number */}
                  <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-[900] text-slate-200/70 select-none font-sans">
                    {step.number}
                  </span>

                  {/* Icon Badge */}
                  <div className={`w-11 h-11 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-[800] text-base sm:text-lg text-slate-900 tracking-tight font-sans">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Middle Timeline Connecting Track (Matching Screenshot 1:1) */}
          <div className="hidden md:flex items-center justify-center relative py-4 max-w-4xl mx-auto">
            <div className="w-full h-12 rounded-xl border border-slate-300/80 bg-slate-50/50 flex items-center justify-between px-12 relative">
              {/* Arrow indicators */}
              <span className="text-slate-400 text-xs select-none">→</span>
              <span className="text-slate-400 text-xs select-none">→</span>
              <span className="text-slate-400 text-xs select-none">←</span>
              <span className="text-slate-400 text-xs select-none">←</span>

              {/* Node Circles */}
              <div className="absolute -top-3 left-[16%] w-4 h-4 rounded-full bg-white border-2 border-[#9333EA]" />
              <div className="absolute -top-3 left-[50%] w-4 h-4 rounded-full bg-white border-2 border-[#16A34A]" />
              <div className="absolute -top-3 right-[16%] w-4 h-4 rounded-full bg-white border-2 border-[#EA580C]" />

              <div className="absolute -bottom-3 left-[16%] w-4 h-4 rounded-full bg-white border-2 border-[#CA8A04]" />
              <div className="absolute -bottom-3 left-[50%] w-4 h-4 rounded-full bg-white border-2 border-[#DB2777]" />
              <div className="absolute -bottom-3 right-[16%] w-4 h-4 rounded-full bg-white border-2 border-[#0284C7]" />
            </div>
          </div>

          {/* Bottom Row: Cards 06, 05, 04 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {bottomSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] sm:rounded-[22px] p-6 sm:p-7 shadow-md border border-slate-100/80 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] text-left relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Watermark Number */}
                  <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-[900] text-slate-200/70 select-none font-sans">
                    {step.number}
                  </span>

                  {/* Icon Badge */}
                  <div className={`w-11 h-11 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-[800] text-base sm:text-lg text-slate-900 tracking-tight font-sans">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal font-sans">
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

export default OurOnDemandAppProcessSection;
