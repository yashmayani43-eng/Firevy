import React from 'react';
import Container from '../common/Container';
import { motion } from 'framer-motion';

export const OurRecentProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Chatbot App Development',
      image: '/images/project_card_1.png',
      alt: 'AI ChatBot Application'
    },
    {
      id: 2,
      title: 'AI Traffic Management System',
      image: '/images/project_card_2.png',
      alt: 'Traffic Management System Using AI'
    },
    {
      id: 3,
      title: 'Real Estate App Development',
      image: '/images/project_card_3.png',
      alt: 'Real Estate App Development'
    },
    {
      id: 4,
      title: 'AI Travel App Development',
      image: '/images/project_card_4.png',
      alt: 'AI Travel App Development'
    },
    {
      id: 5,
      title: 'On Demand AI Recruitment',
      image: '/images/project_card_5.png',
      alt: 'On Demand AI Recruitment'
    },
    {
      id: 6,
      title: 'Car Rental App Development',
      image: '/images/project_card_6.png',
      alt: 'Car Rental App Development'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            Our Recent Projects
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
          </p>
        </div>

        {/* 6 Projects Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative group flex flex-col items-center cursor-pointer"
            >
              <div className="w-full h-auto overflow-hidden bg-slate-50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button className="bg-[#006699] hover:bg-[#00527b] text-white font-semibold text-sm px-8 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none">
            View All
          </button>
        </div>
      </Container>
    </section>
  );
};

export default OurRecentProjectsGrid;
