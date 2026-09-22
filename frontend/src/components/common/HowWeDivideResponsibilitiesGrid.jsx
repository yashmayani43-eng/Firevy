import React, { useState } from 'react';
import Container from './Container';
import {
  Users,
  Lock,
  Sliders,
  Clock,
  MessageSquare,
  Flag,
  Compass,
  Key,
  ListChecks,
  CheckSquare,
  MessageCircle,
  Award
} from 'lucide-react';

export const HowWeDivideResponsibilitiesGrid = ({ brandName = "Sapphire" }) => {
  const [activeTab, setActiveTab] = useState('sapphire');

  const sapphireCards = [
    {
      title: 'Create a dedicated team',
      Icon: Users
    },
    {
      title: 'Gather required access',
      Icon: Lock
    },
    {
      title: 'Plan project resources',
      Icon: Sliders
    },
    {
      title: 'Create a standard delivery practice',
      Icon: Clock
    },
    {
      title: 'Regular communication between stakeholders',
      Icon: MessageSquare
    },
    {
      title: 'Research on competitors',
      Icon: Flag
    }
  ];

  const clientCards = [
    {
      title: 'Define product roadmap',
      Icon: Compass
    },
    {
      title: 'Provide repository & cloud credentials',
      Icon: Key
    },
    {
      title: 'Prioritize feature backlog',
      Icon: ListChecks
    },
    {
      title: 'Conduct sprint review & testing',
      Icon: CheckSquare
    },
    {
      title: 'Provide prompt feedback',
      Icon: MessageCircle
    },
    {
      title: 'Final deployment sign-off',
      Icon: Award
    }
  ];

  const currentCards = activeTab === 'sapphire' ? sapphireCards : clientCards;

  return (
    <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100 text-center">
      <Container>
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight mb-8">
          How We Divide Your Project Responsibilities ?
        </h2>

        {/* Toggle Pill Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('sapphire')}
              className={`px-7 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'sapphire'
                  ? 'bg-[#0083B0] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {brandName}
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`px-7 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'client'
                  ? 'bg-[#0083B0] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Client
            </button>
          </div>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currentCards.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <div
                key={idx}
                className="bg-[#EBF7FC] hover:bg-[#E2F3FB] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 border border-cyan-100/70 shadow-xs transition-all duration-300 min-h-[160px]"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0083B0] shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-[15px] font-[700] text-slate-800 leading-snug">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowWeDivideResponsibilitiesGrid;
