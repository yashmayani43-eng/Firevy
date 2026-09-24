import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const AiDevelopersExpertiseCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const developerExpertiseCards = [
    {
      id: 'ml',
      title: 'Machine Learning',
      desc: 'To aid you in making crucial choices for your company, we deliver AI Development Services that use machine learning (ML) to analyze complex data, spot trends, and recognize similar patterns.',
      link: '/services/machine-learning-development'
    },
    {
      id: 'alexa',
      title: 'Alexa Skill Development',
      desc: 'Using the Alexa Skills Kit, you can create voice-enabled apps that make Alexa smarter, enhance the user experience, and allow you to interact with various devices such as the Amazon Echo family of devices, Fire TV, and other Internet of Things devices.',
      link: '/services/hire-alexa-skills-developers'
    },
    {
      id: 'chatbot',
      title: 'Chatbot Development',
      desc: 'Create intelligent chatbot systems, self-learning and scalable by using Artificial Intelligence (AI) and Machine Learning (ML). These applications should be able to comprehend the context of the discussion and give human-like experiences.',
      link: '/services/chatbot-development'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      desc: 'With the help of our natural language processing (NLP) software solutions, you may provide computers the ability to grasp and interpret data such as secret-related inquiries, business data entries, audio sources, and online data.',
      link: '/contact'
    },
    {
      id: 'image-rec',
      title: 'Image Recognition',
      desc: 'Custom applications for automatic techniques for picture identification, speed and precision.',
      link: '/contact'
    },
    {
      id: 'ar-vr',
      title: 'AR/VR Applications',
      desc: 'Our AI Development Company assists in the creation of immersive apps via augmented reality, virtual reality, and mixed reality with aesthetically pleasing UI/UX.',
      link: '/services/virtual-reality-app-development'
    }
  ];

  // Auto Scroll every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % developerExpertiseCards.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, developerExpertiseCards.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + developerExpertiseCards.length) % developerExpertiseCards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % developerExpertiseCards.length);
  };

  return (
    <section className="py-14 sm:py-18 bg-white font-sans text-left overflow-hidden border-b border-slate-100 select-none w-full">
      {/* Header Container */}
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-2.5">
          <h2 className="text-[26px] sm:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            The Expertise Of Our Artificial Intelligence Developers
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-relaxed">
            We have trained AI developers in our team. Take a look at the expertise of our developers:
          </p>
        </div>
      </Container>

      {/* Full-Width Auto-Scrolling Slider */}
      <div
        className="w-full overflow-hidden px-4 sm:px-8 lg:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex items-stretch gap-6 transition-transform duration-700 ease-out py-3"
          style={{
            transform: `translateX(-${currentIndex * 350}px)`
          }}
        >
          {developerExpertiseCards.map((card, idx) => (
            <div
              key={card.id}
              className={`w-[290px] sm:w-[330px] md:w-[360px] shrink-0 bg-[#EAF5FC] border border-[#CCE3F5] rounded-[18px] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
                currentIndex === idx ? 'ring-2 ring-[#0082C8]/40 shadow-md' : ''
              }`}
            >
              <div>
                <h3 className="text-[17.5px] sm:text-[19px] font-[800] text-slate-900 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.75] font-normal">
                  {card.desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center bg-[#0082C8] hover:bg-[#006CAF] text-white font-[700] text-[13px] px-5 py-2.5 rounded-[6px] transition-colors shadow-2xs cursor-pointer active:scale-95"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Slider Arrow Navigation & Indicators */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0082C8] hover:bg-slate-50 hover:border-[#0082C8]/40 shadow-xs hover:shadow-md transition-all flex items-center justify-center font-bold text-xl cursor-pointer select-none"
          aria-label="Previous developer expertise slide"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {developerExpertiseCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'bg-[#0082C8] w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0082C8] hover:bg-slate-50 hover:border-[#0082C8]/40 shadow-xs hover:shadow-md transition-all flex items-center justify-center font-bold text-xl cursor-pointer select-none"
          aria-label="Next developer expertise slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default AiDevelopersExpertiseCarouselSection;
