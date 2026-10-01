import React from 'react';
import Container from '../common/Container';

export const AiDevelopmentKeyBenefitsSection = () => {
  const benefits = [
    {
      title: 'Enhanced Efficiency and Productivity',
      description: 'Using advanced AI solutions, businesses may increase overall efficiency and production by streamlining procedures, automating repetitive jobs, and completing complicated computations quickly and accurately.'
    },
    {
      title: 'Data-oriented Decision-making',
      description: 'Businesses with a strong online presence can benefit greatly from the accurate, fast, and large-scale data analysis and actionable insights provided by AI-powered systems, which support data-driven strategy and success.'
    },
    {
      title: 'Custom Experience Enhancement',
      description: 'Artificial intelligence (AI)-driven technologies such as chatbots, personalization algorithms, and predictive analytics increase customer expectations for your platform services by improving customer experience.'
    },
    {
      title: 'Market Competitiveness',
      description: 'The integration of AI in commercial applications delights clients with individualized services by efficiently utilizing data. Additionally, it automates time-consuming procedures, giving you more time to focus on original business ideas.'
    },
    {
      title: 'AI Integration Services',
      description: 'Our AI integration services guarantee seamless adoption by integrating AI-driven tools and models with your existing applications. We assist you in maximizing operations by smoothly integrating AI into your enterprise environment.'
    },
    {
      title: 'Data Engineering',
      description: 'We create and put into place reliable data pipelines that provide clear, accessible, and well-organized data. We offer the framework required for AI and machine learning projects to be successful, from data warehousing to ETL procedures.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#005F96] text-white font-sans relative overflow-hidden">
      <Container>
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-white tracking-tight leading-[1.2]">
            Key benefits of choosing AI Development Services
          </h2>
          <p className="text-[14px] sm:text-[15.5px] font-[400] text-white/95 leading-relaxed max-w-3xl mx-auto">
            As pioneers in the field of artificial intelligence software development, we advise companies to take advantage of the potential of data and AI to open up a multitude of doors. Here are the key benefits
          </p>
        </div>

        {/* 6 White Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[18px] p-6 sm:p-8 text-left shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start hover:-translate-y-1 cursor-pointer border border-white/20"
            >
              <h3 className="text-[18px] sm:text-[20px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AiDevelopmentKeyBenefitsSection;
