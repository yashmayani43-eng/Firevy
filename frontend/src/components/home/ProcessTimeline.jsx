import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Layout, 
  Monitor, 
  CheckCircle2, 
  Code2, 
  Rocket, 
  Wrench, 
  Search
} from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const EXACT_PASTEL_THEMES = [
  // 01: Requirement Gathering (Lavender)
  {
    bg: 'bg-[#f0e8ff]',
    border: 'border-[#e2d4fc]',
    iconColor: 'text-[#9333ea]',
  },
  // 02: Designs, Wireframes (Light Green)
  {
    bg: 'bg-[#e8f8e8]',
    border: 'border-[#d2f0d2]',
    iconColor: 'text-[#16a34a]',
  },
  // 03: Prototype Demo (Light Peach)
  {
    bg: 'bg-[#ffe8e0]',
    border: 'border-[#ffd4c4]',
    iconColor: 'text-[#ea580c]',
  },
  // 04: Changes And Confirmation (Light Yellow)
  {
    bg: 'bg-[#fff8d8]',
    border: 'border-[#feeea4]',
    iconColor: 'text-[#ca8a04]',
  },
  // 05: Development (Light Pink)
  {
    bg: 'bg-[#ffe4e8]',
    border: 'border-[#fcc8d0]',
    iconColor: 'text-[#db2777]',
  },
  // 06: Deployment (Light Sky Blue)
  {
    bg: 'bg-[#e0f7fa]',
    border: 'border-[#b2ebf2]',
    iconColor: 'text-[#0284c7]',
  },
  // 07: Support And Maintenance (Light Purple)
  {
    bg: 'bg-[#f5e6ff]',
    border: 'border-[#ebd0ff]',
    iconColor: 'text-[#9333ea]',
  },
  // 08: SEO (Light Yellow/Lime)
  {
    bg: 'bg-[#f8fcd0]',
    border: 'border-[#eef8a4]',
    iconColor: 'text-[#65a30d]',
  },
];

const DEFAULT_STEPS = [
  {
    number: '01',
    title: 'Requirement Gathering',
    desc: 'Requirement gathering from both sides and come to the same page.',
    Icon: FileText
  },
  {
    number: '02',
    title: 'Designs, Wireframes, & Mockups',
    desc: 'Creating wireframes & visual designs for flow of web/app/platform.',
    Icon: Layout
  },
  {
    number: '03',
    title: 'Prototype Demo',
    desc: 'Interactive clickable prototype demo of app/web/platform.',
    Icon: Monitor
  },
  {
    number: '04',
    title: 'Changes And Confirmation',
    desc: "Refining details on existing platform. We'll proceed with client's confirmation on the same.",
    Icon: CheckCircle2
  },
  {
    number: '05',
    title: 'Development',
    desc: 'Agile frontend & backend code engineering with clean modular architecture.',
    Icon: Code2
  },
  {
    number: '06',
    title: 'Deployment',
    desc: 'Automated CI/CD pipeline deployment to production cloud infrastructure.',
    Icon: Rocket
  },
  {
    number: '07',
    title: 'Support And Maintenance',
    desc: '24/7 proactive monitoring, security updates, and performance optimizations.',
    Icon: Wrench
  },
  {
    number: '08',
    title: 'SEO',
    desc: 'Search engine optimization, schema structured tags, and performance tuning.',
    Icon: Search
  }
];

export const ProcessTimeline = ({ data }) => {
  const badge = data?.badge || 'HOW WE WORK';
  const title = data?.title || 'Process We Follow';
  const subtitle = data?.subtitle || 'A structured 8-step software engineering process designed to ensure transparent delivery and high quality outcomes.';

  const rawSteps = data?.steps && Array.isArray(data.steps) && data.steps.length > 0
    ? data.steps
    : DEFAULT_STEPS;

  const steps = rawSteps.map((step, idx) => {
    const fallback = DEFAULT_STEPS[idx % DEFAULT_STEPS.length];
    return {
      number: step.number || fallback.number,
      title: step.title || fallback.title,
      desc: step.desc || fallback.desc,
      Icon: fallback.Icon,
      theme: EXACT_PASTEL_THEMES[idx % EXACT_PASTEL_THEMES.length]
    };
  });

  const topSteps = steps.slice(0, 4);
  const bottomStepsDisplayed = [steps[7], steps[6], steps[5], steps[4]].filter(Boolean);

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* DESKTOP PROCESS FLOW */}
        <div className="hidden lg:block relative max-w-6xl mx-auto my-8 space-y-6">
          {/* TOP ROW: CARDS 01 TO 04 */}
          <div className="grid grid-cols-4 gap-6">
            {topSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`w-full min-h-[140px] p-5 rounded-xl ${step.theme.bg} border ${step.theme.border} shadow-none flex flex-col justify-center text-left transition-all duration-300 hover:shadow-sm`}
              >
                <p className="text-xs sm:text-[13.5px] text-slate-800 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ROW: CARDS 08, 07, 06, 05 */}
          <div className="grid grid-cols-4 gap-6">
            {bottomStepsDisplayed.map((step, idx) => {
              const StepIcon = step.Icon || Search;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`w-full min-h-[140px] p-5 rounded-xl ${step.theme.bg} border ${step.theme.border} shadow-none flex flex-col justify-between text-left transition-all duration-300 hover:shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <div className={step.theme.iconColor}>
                      <StepIcon size={32} strokeWidth={1.8} />
                    </div>
                    <span className="text-3xl lg:text-4xl font-extrabold font-sans tracking-tight text-slate-900">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-3 leading-snug uppercase tracking-wide">
                    {step.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE FLOW */}
        <div className="lg:hidden flex flex-col space-y-4 my-6">
          {steps.map((step, idx) => {
            const StepIcon = step.Icon || FileText;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative p-5 rounded-xl ${step.theme.bg} border ${step.theme.border} text-left shadow-none`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={step.theme.iconColor}>
                      <StepIcon size={24} strokeWidth={1.8} />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                  </div>
                  <span className="text-2xl font-black font-sans text-slate-900">
                    {step.number}
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProcessTimeline;


