import React from 'react';
import Container from './Container';
import {
  DollarSign,
  UserCheck,
  TrendingUp,
  Target,
  Zap,
  Lightbulb
} from 'lucide-react';

export const BenefitsOfHiringDedicatedDevelopers = ({
  title = "Benefits of Hiring Dedicated Developers",
  subtitle = "Using dedicated developers can help you save time and money, so that you can focus more on core business activities."
}) => {
  const benefits = [
    {
      id: 1,
      title: 'Cost-efficiency',
      desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool. We provide access to top-talent frequently from low-cost locations, lowering labor costs without sacrificing quality.',
      Icon: DollarSign
    },
    {
      id: 2,
      title: 'Access to specialized skills',
      desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time and without errors.',
      Icon: UserCheck
    },
    {
      id: 3,
      title: 'Scalability and Flexibility',
      desc: 'Dedicated developers allow team size and composition changes without full-time employment. They can swiftly adapt to project needs and market circumstances, ensuring timely delivery and resource optimization.',
      Icon: TrendingUp
    },
    {
      id: 4,
      title: 'Focused and Committed Effort',
      desc: 'Dedicated developers are more productive and committed since they only work on their tasks. This dedication generally improves code quality, turnaround times, and development process efficiency.',
      Icon: Target
    },
    {
      id: 5,
      title: 'Reduced Time to Market',
      desc: 'Dedicated developers can speed up project development by using their experience and attention. Businesses can optimize operations, eliminate bottlenecks, and finish projects quickly by hiring dedicated developers.',
      Icon: Zap
    },
    {
      id: 6,
      title: 'Enhanced Innovation and Creativity',
      desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers maintain a creative atmosphere where in-house and external talent merge their expertise.',
      Icon: Lightbulb
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70 text-center">
      <Container>
        {/* Header Title & Subtitle */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase pt-1">
            BENEFITS INCLUDE
          </div>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {benefits.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-[#0083B0] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsOfHiringDedicatedDevelopers;
