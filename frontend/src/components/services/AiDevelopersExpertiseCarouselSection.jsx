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
          className="flex items-stretch gap-6 transition-transform duration-700 ease-out py-2"
          style={{
            transform: `translateX(-${currentIndex * 444}px)`
          }}
        >
          {developerExpertiseCards.map((card, idx) => (
            <div
              key={card.id}
              className={`w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-[#D9EFFD] rounded-[16px] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 ${
                currentIndex === idx ? 'ring-2 ring-[#0082C8]/30 shadow-md' : ''
              }`}
            >
              <div className="space-y-2.5">
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-700 leading-[1.65] font-normal">
                  {card.desc}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center bg-[#0082C8] hover:bg-[#006CAF] text-white font-[700] text-[13px] px-5 py-2 rounded-[6px] transition-colors shadow-2xs cursor-pointer active:scale-95"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiDevelopersExpertiseCarouselSection;
