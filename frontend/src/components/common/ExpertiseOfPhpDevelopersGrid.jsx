import React from 'react';
import Container from './Container';
import {
  Smartphone,
  ShoppingCart,
  ArrowRightLeft,
  Wrench,
  Monitor,
  Settings
} from 'lucide-react';

export const ExpertiseOfPhpDevelopersGrid = () => {
  const cards = [
    {
      id: 1,
      title: 'PHP APPLICATION DEVELOPMENT',
      desc: 'You may hire dedicated PHP developers from us to build PHP web portals and apps that are highly secure, responsive, robust, and performant. We became one of the top PHP development company in USA because to our skilled PHP programmers.',
      Icon: Smartphone,
      badgeBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 2,
      title: 'E-COMMERCE DEVELOPMENT IN PHP',
      desc: 'Hire PHP Developers Online who are experts in PHP e-commerce systems like Magento, WooCommerce, PrestaShop, ZenCart, and OpenCart. Employ leading PHP developers that will offer a flawless shopping experience for your customers by adhering to PHP best practices for your e-commerce platform.',
      Icon: ShoppingCart,
      badgeBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      id: 3,
      title: 'PHP MIGRATION SERVICES',
      desc: 'Hire PHP developers in USA if you wish to migrate your web applications from comparable languages like Java, .Net, and Python to a dynamic and resilient PHP platform at a reasonable cost.',
      Icon: ArrowRightLeft,
      badgeBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 4,
      title: 'SUPPORT AND MAINTENANCE FOR PHP SITES',
      desc: 'To stay current with industry trends, you should hire PHP developers in the USA that provide interactive site support and maintenance. Our support and maintenance services are designed to keep your website safe and competitive.',
      Icon: Wrench,
      badgeBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 5,
      title: 'PHP-BASED CMS DEVELOPMENT',
      desc: 'Hire PHP developers in Canada who are experts in PHP-based Content Management Systems known for their user-friendliness. Employ our PHP experts to create your own bespoke CMS.',
      Icon: Monitor,
      badgeBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: 6,
      title: 'INTEGRATIONS AND UPGRADES IN PHP',
      desc: 'Hire PHP developers in the UK from us who are adept at designing unique PHP applications and integrating and enhancing your current PHP-based application.',
      Icon: Settings,
      badgeBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0F6FB] font-sans text-slate-900 border-b border-slate-200/60 text-center">
      <Container>
        {/* Header Title & Subtitle */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
            The Expertise Of Our PHP Developers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Our PHP developers have several years of experience. Here are some of the solutions we provide when you Hire Dedicated PHP Programmers from us
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left mb-12">
          {cards.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start space-y-4 group min-h-[300px]"
              >
                {/* Icon Badge */}
                <div className={`w-12 h-12 rounded-xl ${item.badgeBg} flex items-center justify-center ${item.iconColor} shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-[15px] font-[800] text-slate-900 tracking-tight uppercase leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div>
          <a
            href="#quote-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-[800] px-8 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
          >
            Get A Free Quote For Your Project
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ExpertiseOfPhpDevelopersGrid;
