import React from 'react';
import Container from '../common/Container';
import {
  HeartPulse,
  Truck,
  Utensils,
  Car,
  ShoppingBag,
  Wrench,
  Globe,
  Scissors,
  Sparkles,
  Shirt
} from 'lucide-react';

export const OnDemandAppCategoriesSection = () => {
  const categories = [
    {
      title: 'On Demand Health & Fitness App',
      icon: HeartPulse
    },
    {
      title: 'On Demand Courier App',
      icon: Truck
    },
    {
      title: 'On Demand Food Ordering App',
      icon: Utensils
    },
    {
      title: 'On Demand Cab Services App',
      icon: Car
    },
    {
      title: 'On Demand Grocery Delivery App',
      icon: ShoppingBag
    },
    {
      title: 'On Demand Repair & Maintenance App',
      icon: Wrench
    },
    {
      title: 'On Demand Logistics App',
      icon: Globe
    },
    {
      title: 'On Demand Beauty/Salon App',
      icon: Scissors
    },
    {
      title: 'On Demand Home Cleaning App',
      icon: Sparkles
    },
    {
      title: 'On Demand Laundry Services App',
      icon: Shirt
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
            We Create On-Demand Apps For These Categories
          </h2>
        </div>

        {/* 10 Category Cards (4 + 4 + 2 Centered Grid Layout) */}
        <div className="max-w-6xl mx-auto px-4 space-y-5 sm:space-y-6">
          {/* Top 8 Cards (4 x 2 grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.slice(0, 8).map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-7 text-center shadow-md hover:shadow-xl border border-slate-100/90 transition-all duration-300 flex flex-col items-center justify-center min-h-[160px] group cursor-pointer hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#0084D1] mb-3 transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="w-9 h-9 stroke-[1.6]" />
                  </div>
                  <h3 className="font-[800] text-sm sm:text-[15px] text-slate-900 leading-snug tracking-tight font-sans">
                    {cat.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom 2 Centered Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {categories.slice(8, 10).map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-7 text-center shadow-md hover:shadow-xl border border-slate-100/90 transition-all duration-300 flex flex-col items-center justify-center min-h-[160px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group cursor-pointer hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#0084D1] mb-3 transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="w-9 h-9 stroke-[1.6]" />
                  </div>
                  <h3 className="font-[800] text-sm sm:text-[15px] text-slate-900 leading-snug tracking-tight font-sans">
                    {cat.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OnDemandAppCategoriesSection;
