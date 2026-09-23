import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import OurRecentProjectsGrid from './OurRecentProjectsGrid';
import SectorsThrivingSection from './SectorsThrivingSection';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Brain,
  Zap,
  ShieldCheck,
  Clock,
  Headphones,
  Users,
  Layers,
  Star,
  ExternalLink,
  Code2,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Search,
  Bot,
  Terminal,
  Database,
  Smartphone,
  Globe,
  Award,
  BarChart,
  Lock,
  Workflow,
  FileCheck
} from 'lucide-react';

export const ArtificialIntelligenceDevelopmentService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState(0);

  const renderTechBrandLogo = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('openai') || nameLower.includes('gpt') || nameLower.includes('dall-e') || nameLower.includes('sora')) {
      return (
        <svg className="w-9 h-9 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9 5.98 5.98 0 0 0 3.78 2.81 6.06 6.06 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-6.88zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17c.02.01.04.03.04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.79.79 0 0 0 .79 0l5.84-3.37v2.33c0 .03-.01.05-.03.06l-4.84 2.79a4.5 4.5 0 0 1-6.14-1.64zm-1.38-10.92a4.47 4.47 0 0 1 2.34-1.97v5.68c0 .28.15.53.4.68l5.83 3.37-2.02 1.17a.08.08 0 0 1-.07 0l-4.85-2.8a4.5 4.5 0 0 1-1.63-6.13zm16.6 3.03l-5.84-3.37 2.02-1.17c.02-.01.04-.01.07 0l4.85 2.8a4.5 4.5 0 0 1-1.1 8.13v-5.68a.8.8 0 0 0-.4-.7zm2.02-3.02l-.14-.09-4.78-2.76a.79.79 0 0 0-.79 0l-5.84 3.37V7.6c0-.03.01-.05.03-.06l4.85-2.79a4.5 4.5 0 0 1 6.67 4.67zm-11.06-3.85a4.48 4.48 0 0 1 2.88 1.04l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74l-2.02-1.17a.08.08 0 0 1-.04-.05V8.28a4.5 4.5 0 0 1 4.49-4.49z"/>
        </svg>
      );
    }
    if (nameLower.includes('mistral')) {
      return (
        <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-lg p-1.5 text-white font-black tracking-tighter text-xs">
          MISTRAL
        </div>
      );
    }
    if (nameLower.includes('hugging')) {
      return <span className="text-3xl">🤗</span>;
    }
    if (nameLower.includes('claude') || nameLower.includes('anthropic')) {
      return (
        <div className="w-10 h-10 rounded-full bg-[#D97757] flex items-center justify-center text-white font-bold text-lg">
          ✦
        </div>
      );
    }
    if (nameLower.includes('cohere')) {
      return (
        <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-sm">
          c
        </div>
      );
    }
    if (nameLower.includes('llama') || nameLower.includes('meta')) {
      return (
        <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg">
          🦙
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0082C8] font-bold">
        <Cpu className="w-6 h-6" />
      </div>
    );
  };

  const techCategories = [
    {
      name: 'LLM Models',
      tagline: 'Leverage the power of NLP to automate text processing and enhance language comprehension, enabling chatbots, search engines, and much more.',
      items: [
        { name: 'Open AI' },
        { name: 'Mistral' },
        { name: 'Hugging Face' },
        { name: "Anthropic's Claude" },
        { name: 'Cohere' },
        { name: 'Llama' }
      ]
    },
    {
      name: 'Image & Vision Models',
      tagline: 'Empower digital systems to interpret visual data, extract key features, and generate hyper-realistic content seamlessly.',
      items: [
        { name: 'DALL-E 3' },
        { name: 'Midjourney' },
        { name: 'Stable Diffusion' },
        { name: 'YOLOv8' },
        { name: 'OpenCV' },
        { name: 'Segment Anything' }
      ]
    },
    {
      name: 'RAG (Retrieval Augmented Generation)',
      tagline: 'Connect foundation LLMs with real-time enterprise knowledge bases for hallucination-free, high-precision context retrieval.',
      items: [
        { name: 'Pinecone' },
        { name: 'Milvus' },
        { name: 'ChromaDB' },
        { name: 'LangChain' },
        { name: 'LlamaIndex' },
        { name: 'Qdrant' }
      ]
    },
    {
      name: 'Embeddings & Vector Databases',
      tagline: 'Convert high-dimensional text and media assets into dense vector spaces for fast semantic search and clustering.',
      items: [
        { name: 'OpenAI Embeddings' },
        { name: 'Cohere Rerank' },
        { name: 'Weaviate' },
        { name: 'Faiss' },
        { name: 'Pinecone' },
        { name: 'PGVector' }
      ]
    },
    {
      name: 'Generative AI',
      tagline: 'Deploy autonomous agents, synthetic media pipelines, and multi-modal generative intelligence at enterprise scale.',
      items: [
        { name: 'GPT-4o' },
        { name: 'Claude 3.5 Sonnet' },
        { name: 'Gemini 1.5 Pro' },
        { name: 'RunWay ML' },
        { name: 'ElevenLabs' },
        { name: 'Sora' }
      ]
    },
    {
      name: 'KPIs',
      tagline: 'Benchmark, monitor, and continuously optimize model latency, perplexity, inference cost, and response accuracy.',
      items: [
        { name: 'ROUGE / BLEU Score' },
        { name: 'Latent Precision' },
        { name: 'TTFT (Time to First Token)' },
        { name: 'Model Hallucination Rate' },
        { name: 'Inference Cost per 1K' },
        { name: 'GPU Utilization' }
      ]
    },
    {
      name: 'AI Frameworks',
      tagline: 'Build end-to-end Machine Learning pipelines with scalable, production-tested open-source frameworks.',
      items: [
        { name: 'PyTorch' },
        { name: 'TensorFlow' },
        { name: 'Scikit-Learn' },
        { name: 'Ray Train' },
        { name: 'Keras' },
        { name: 'ONNX Runtime' }
      ]
    },
    {
      name: 'DL Framework (Deep Learning Framework)',
      tagline: 'Fine-tune deep neural networks, transformer architectures, and custom model backbones efficiently.',
      items: [
        { name: 'PyTorch 2.0' },
        { name: 'JAX / Flax' },
        { name: 'DeepSpeed' },
        { name: 'vLLM' },
        { name: 'Triton Inference Server' },
        { name: 'TensorRT' }
      ]
    }
  ];

  const stats = [
    { value: '$30 Billion', label: 'The expected expansion of the AI-powered automation market by 2030.' },
    { value: '60%', label: 'The percentage of global enterprises implementing AI technologies by 2024, showing its widespread adoption.' },
    { value: '$3 Trillion', label: 'Projected economic value AI will bring to industries like healthcare, finance, and manufacturing by 2025.' },
    { value: '$350 Billion', label: 'The anticipated value of the European AI market by 2027, reflecting increasing investment across regions.' },
    { value: '12% - 18%', label: 'The forecasted growth rate of the AI-driven cybersecurity market, underlining AI impact in safeguarding digital spaces.' },
    { value: '$500 Billion', label: 'The estimated value of the global AI-driven fraud detection market by 2030, demonstrating its growing importance in financial security.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'AI Consulting',
      shortDesc: 'Our AI consulting services are designed to accelerate your business transformation. We help optimize your operations and create a forward-thinking AI strategy that aligns perfectly with your long-term goals.',
      cards: [
        { title: 'AI Roadmap Development', iconType: 'chip' },
        { title: 'AI Solution Implementation', iconType: 'lightbulb' },
        { title: 'Data Strategy & Management', iconType: 'nodes' },
        { title: 'AI Governance and Ethics', iconType: 'governance' },
        { title: 'AI Risk Assessment & Compliance', iconType: 'risk' },
        { title: 'AI-Driven Process Optimization', iconType: 'optimization' }
      ]
    },
    {
      id: 1,
      title: 'RAG (Retrieval Augmented Generation for LLMs)',
      shortDesc: 'Harness the power of continuous data flow to fuel Large Language Models (LLMs) with the latest, most accurate information. This ensures your AI systems stay relevant and capable of addressing complex queries efficiently.',
      cards: [
        { title: 'RAG Consulting & Architecture', iconType: 'chip' },
        { title: 'RAG Models Customization', iconType: 'lightbulb' },
        { title: 'RAG Integration Services', iconType: 'nodes' },
        { title: 'Vector Database Support', iconType: 'governance' },
        { title: 'Real-Time Data Ingestion', iconType: 'risk' },
        { title: 'Optimized Query Performance', iconType: 'optimization' }
      ]
    },
    {
      id: 2,
      title: 'Custom LLMs for Enterprises',
      shortDesc: "We offer tailored LLMs specifically built for your business needs. By integrating these advanced AI models, we enhance operational workflows, decision-making processes, and customer experiences, all tailored to your enterprise's unique requirements.",
      cards: [
        { title: 'LLM Model Customization', iconType: 'chip' },
        { title: 'Enterprise AI Solutions', iconType: 'lightbulb' },
        { title: 'Industry-Specific LLMs', iconType: 'nodes' },
        { title: 'LLM Integration & Deployment', iconType: 'governance' },
        { title: 'LLM Security & Compliance', iconType: 'risk' },
        { title: 'LLM Fine-Tuning & Training', iconType: 'optimization' }
      ]
    },
    {
      id: 3,
      title: 'AI in Mobile Apps',
      shortDesc: 'Stay ahead of the curve by integrating AI into your mobile applications. Our AI-driven solutions create smarter, more responsive mobile apps that improve user experience, engagement, and overall performance.',
      cards: [
        { title: 'AI Mobile Solutions', iconType: 'chip' },
        { title: 'Mobile App Automation', iconType: 'lightbulb' },
        { title: 'Personalized UI Experience', iconType: 'nodes' },
        { title: 'Smart User Interfaces', iconType: 'governance' },
        { title: 'Mobile Security & Fraud', iconType: 'risk' },
        { title: 'Chatbot & Assistant Integration', iconType: 'optimization' }
      ]
    },
    {
      id: 4,
      title: 'AI in Software',
      shortDesc: 'Infuse your software with AI capabilities to enhance functionality, optimize processes, and deliver superior performance. By automating complex tasks, we help you achieve faster development cycles and improved software quality.',
      cards: [
        { title: 'AI-Enhanced Software', iconType: 'chip' },
        { title: 'Process & Workflow Automation', iconType: 'lightbulb' },
        { title: 'Predictive Analytics Engine', iconType: 'nodes' },
        { title: 'Legacy Software Integration', iconType: 'governance' },
        { title: 'Automated Testing & Debugging', iconType: 'risk' },
        { title: 'Scalable AI Architectures', iconType: 'optimization' }
      ]
    }
  ];

  const expertOfferings = [
    {
      title: 'Generative AI',
      desc: 'We use top-notch models such as GAN, Diffusion, and LLM to help construct Autonomous AI agents, multi-modal virtual assistants, customer support, automated content generation, conversation intelligence, and other unique solutions.',
      link: '/services/generative-ai-development'
    },
    {
      title: 'OpenAI’s GPT-4 & Custom LLMs',
      desc: 'The big multimodal language model GPT-4 from OpenAI creates text based on both textual and visual input. We employ it for the analysis of qualitative data, including transcripts and conversations with customer service.',
      link: '/contact'
    },
    {
      title: 'Neuro-Symbolic AI',
      desc: 'In order to overcome the shortcomings of both neural and symbolic AI architectures, neuro-symbolic AI combines both to create a strong AI that is able to reason, learn, and model cognitive processes.',
      link: '/contact'
    },
    {
      title: 'Explainable AI (XAI)',
      desc: 'It contributes to defining model correctness, fairness, transparency, and decision-making results driven by AI. When implementing AI models into production, an organization needs to be able to explain AI to gain stakeholder confidence.',
      link: '/contact'
    },
    {
      title: 'Quantum Machine Learning',
      desc: 'At the vanguard of AI research and application, quantum machine learning holds the potential to solve some of the most difficult issues across multiple high-throughput data-intensive industries.',
      link: '/contact'
    },
    {
      title: 'Multimodal AI',
      desc: 'AI systems are able to comprehend and react to users in a more instinctive and natural way because of multimodal artificial intelligence. It improves user experience, efficiency, and interactive fidelity across touchpoints.',
      link: '/contact'
    }
  ];

  const llmTechnologies = [
    { name: 'Open AI', desc: 'GPT-4, GPT-3.5 Turbo fine-tuning and API integration.' },
    { name: 'Mistral AI', desc: 'High-performance open-weight models for edge & private VPC.' },
    { name: 'Hugging Face', desc: 'Custom transformers and open-source model deployment.' },
    { name: 'Anthropic Claude', desc: 'Claude 3 Opus & Sonnet with 200k context windows.' },
    { name: 'Cohere', desc: 'Enterprise embeddings, rerankers, and retrieval models.' },
    { name: 'Meta Llama 3', desc: 'Self-hosted, secure open-source foundation LLMs.' }
  ];

  const aiBenefits = [
    {
      title: 'Enhanced Efficiency and Productivity',
      desc: 'Using advanced AI solutions, businesses may increase overall efficiency and production by streamlining procedures, automating repetitive jobs, and completing complex computations quickly.'
    },
    {
      title: 'Data-oriented Decision-making',
      desc: 'Businesses with a strong online presence can benefit greatly from the accurate, fast, and large-scale data analysis and actionable insights provided by AI-powered systems.'
    },
    {
      title: 'Custom Experience Enhancement',
      desc: 'Artificial intelligence (AI)-driven technologies such as chatbots, personalization algorithms, and predictive analytics increase customer expectations by improving user experience.'
    },
    {
      title: 'Market Competitiveness',
      desc: 'The integration of AI in commercial applications delights clients with individualized services by efficiently utilizing data, giving you more time to focus on core growth.'
    },
    {
      title: 'AI Integration Services',
      desc: 'Our AI integration services guarantee seamless adoption by integrating AI-driven tools and models with your existing enterprise applications and legacy systems.'
    },
    {
      title: 'Data Engineering',
      desc: 'We create and put into place reliable data pipelines that provide clear, accessible, and well-organized data for machine learning and LLM training.'
    }
  ];

  const developerExpertise = [
    {
      title: 'Machine Learning',
      desc: 'To aid you in making crucial choices for your company, we deliver AI Development Services that use machine learning (ML) to analyze complex data, spot trends, and recognize similar patterns.',
      link: '/services/machine-learning-development'
    },
    {
      title: 'Alexa Skill Development',
      desc: 'Using the Alexa Skills Kit, you can create voice-enabled apps that make Alexa smarter, enhance the user experience, and allow you to interact with Echo and IoT devices.',
      link: '/services/hire-alexa-skills-developers'
    },
    {
      title: 'Chatbot Development',
      desc: 'Create intelligent chatbot systems, self-learning and scalable by using Artificial Intelligence (AI) and Machine Learning (ML) that provide human-like conversation experiences.',
      link: '/services/chatbot-development'
    },
    {
      title: 'Natural Language Processing',
      desc: 'With the help of our NLP software solutions, you provide computers the ability to grasp and interpret data such as search inquiries, text documents, and audio sources.',
      link: '/contact'
    },
    {
      title: 'Image Recognition',
      desc: 'Custom applications for automated information analysis and classification using computer vision techniques for picture identification, object detection, and speed.',
      link: '/contact'
    },
    {
      title: 'AR/VR Applications',
      desc: 'Our AI Development Company assists in the creation of immersive apps via augmented reality, virtual reality, and mixed reality with aesthetically pleasing UI/UX.',
      link: '/services/virtual-reality-app-development'
    }
  ];

  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: 'If you represent a company with a defined project scope that needs dedicated execution, ask about fixed price milestone contracts.',
      bullets: ['Optimal flexibility', 'Agile team', 'Small to mid-sized projects', 'Complete control over budget']
    },
    {
      title: 'Time & Material',
      desc: 'If you represent a company with evolving project requirements needing ongoing engineering, ask about hourly time and material billing.',
      bullets: ['No hidden costs', 'Working based on actual hours', 'Monthly billing cycles', 'Pay only for measurable work']
    },
    {
      title: 'Dedicated Team',
      desc: 'Build a dedicated squad of AI developers, MLOps engineers, and data scientists integrated directly into your agile standups.',
      bullets: ['Direct resource management', '160 hours of assured monthly work', 'Seamless team scaling', 'Complete IP protection']
    },
    {
      title: 'Buckets Approach',
      desc: 'A flexible prepaid bucket of development hours allowing payment convenience and deployment of specialists on demand.',
      bullets: ['Direct resource monitoring', 'Lower project risk', 'Budget control', 'Pay for actual hours utilized']
    }
  ];

  const faqs = [
    {
      q: '1. Why invest in Artificial Intelligence development services?',
      a: 'Investing in AI solutions empowers enterprises to automate routine tasks, analyze big data for predictive insights, reduce operational expenses, and deliver personalized user experiences that outperform competitors.'
    },
    {
      q: '2. How does your AI development company build custom AI software?',
      a: 'We evaluate your business objectives, prepare and clean datasets, select and fine-tune state-of-the-art neural architectures (like LLMs, NLP, Computer Vision, or RAG), and integrate scalable APIs into your existing enterprise infrastructure.'
    },
    {
      q: '3. What is the difference between Generative AI and traditional AI?',
      a: 'Traditional AI excels in classification, pattern matching, and rule-based prediction, while Generative AI creates net new text, images, synthetic data, voice, and code based on deep learning transformer models.'
    },
    {
      q: '4. Can you integrate AI models with our legacy ERP and CRM platforms?',
      a: 'Yes, our AI engineering squad specializes in custom middleware, secure REST/GraphQL API wrappers, and cloud container deployments ensuring zero disruption to existing legacy systems.'
    },
    {
      q: '5. How do you protect corporate proprietary data when training AI models?',
      a: 'We implement zero-trust data architectures, on-premises or private VPC deployments, strict NDAs, data anonymization pipelines, and SOC2/ISO compliant data governance practices.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Artificial Intelligence Development Company in USA | AI Development Services"
        description="Sapphire Software Solutions is a top artificial intelligence development company in USA. We have trained AI developers expertise in machine learning, custom LLMs, RAG, and chatbot development."
        canonical="/services/artificial-intelligence-development"
      />

      {/* =========================================================================
          1. HERO SECTION (Matching Reference Site 1:1)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & 2 Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Artificial Intelligence Development Company in USA
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75] font-normal font-sans">
                Are you looking to Mold the future of your company ability to thrive with Artificial Intelligence Solutions for Business? We are the industry leader as a Custom AI Development Company in Artificial intelligence development services that are more intelligent.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Hire AI Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 shadow-xl">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="Artificial Intelligence Development Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. TRUSTED BRAND LOGOS STRIP
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. DELIVERING TOP RATED AI DEVELOPMENT SERVICES GLOBALLY
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-md border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="Delivering Top Rated AI Development Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Delivering Top Rated AI Development Services Globally
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We guarantee Affordable AI development services and innovative AI Software Development Services, online apps, and mobile software by combining the efforts of our skilled professionals. Our best artificial intelligence development company will aid decision-makers in obtaining a better understanding of their respective business ecosystems, whether those decision-makers work for tech startups, retail companies, hospitals, or corporations. Top Rated AI app development company guarantee additional digital possibilities are made available to Best Enterprise AI Development Company by minimizing the associated risks using our cutting-edge artificial intelligence software development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BRIEF ABOUT CUSTOM AI DEVELOPMENT SERVICES (Left Text, Right Illustration)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/70 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Title & Text */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
                Brief About Custom AI Development Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Scalable and reliable AI development services help businesses build intelligent, future-ready solutions with speed and cost efficiency. Our custom AI development services, including Generative AI development services, are thoroughly tested and guided by skilled AI and deep learning engineers to deliver secure, high-performing digital products.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Hire Leading AI Development Agency to bring a significant breakthrough in your domain, keeping up with the wave of digitalization, and they apply to fledgling startups and large corporations. Hire AI developers for custom AI solutions for bespoke software solutions driven by AI for many businesses, including those in the financial technology, retail, education, and supply sectors.
              </p>
            </div>

            {/* Right Column: Illustration Image (Same as User 2nd Image) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/brief_ai_development_illustration.png"
                  alt="Brief About Custom AI Development Services Illustration"
                  className="w-full h-auto object-contain max-h-[380px] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. THE GROWING INFLUENCE OF AI (6 Metric Stat Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              The Growing Influence of AI
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              AI is revolutionizing industries worldwide. It’s time to harness its potential and stay ahead in the competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-start space-y-3"
              >
                <div className="text-[28px] sm:text-[32px] font-[900] text-[#006B8F]">
                  {s.value}
                </div>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. AI SOLUTIONS TAILORED FOR YOUR BUSINESS (Matches exact reference design)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-y border-slate-200/80">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              AI Solutions Tailored for Your Business
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-relaxed">
              With our innovative AI services, we are committed to driving smart, scalable, and impactful solutions across various domains of your business, helping you stay competitive in a rapidly evolving digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Left Column: Stacked Card List (All 5 cards showing title + description) */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              {tailoredSolutions.map((sol, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={sol.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-5 sm:p-6 rounded-[14px] transition-all cursor-pointer bg-white text-left ${
                      isActive
                        ? 'border-[1.5px] border-[#0284C7] ring-2 ring-[#0284C7]/10 shadow-sm'
                        : 'border border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[16px] sm:text-[17px] font-[700] text-slate-900 tracking-tight flex items-center gap-2">
                        <span>{sol.title}</span>
                        {isActive && <ArrowRight className="w-4 h-4 text-[#0284C7] shrink-0 inline" />}
                      </h3>
                    </div>
                    <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.7] mt-2 font-normal">
                      {sol.shortDesc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Blue/Grey Panel with 6 Cards */}
            <div className="lg:col-span-6 bg-[#ECF4F8] rounded-[24px] p-6 sm:p-8 flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                {tailoredSolutions[activeTab].cards.map((c, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-white rounded-[18px] p-6 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 min-h-[170px] sm:min-h-[190px] hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-3.5 flex items-center justify-center">
                      {c.iconType === 'chip' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="10" y="10" width="28" height="28" rx="6" fill="#F0F8FF" stroke="#0082C8" />
                          <text x="24" y="28.5" textAnchor="middle" fill="#0082C8" fontSize="11" fontWeight="800" stroke="none">AI</text>
                          <line x1="16" y1="4" x2="16" y2="10" />
                          <line x1="24" y1="4" x2="24" y2="10" />
                          <line x1="32" y1="4" x2="32" y2="10" />
                          <line x1="16" y1="38" x2="16" y2="44" />
                          <line x1="24" y1="38" x2="24" y2="44" />
                          <line x1="32" y1="38" x2="32" y2="44" />
                          <line x1="4" y1="16" x2="10" y2="16" />
                          <line x1="4" y1="24" x2="10" y2="24" />
                          <line x1="4" y1="32" x2="10" y2="32" />
                          <line x1="38" y1="16" x2="44" y2="16" />
                          <line x1="38" y1="24" x2="44" y2="24" />
                          <line x1="38" y1="32" x2="44" y2="32" />
                        </svg>
                      )}
                      {c.iconType === 'lightbulb' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 36h12m-10 4h8" />
                          <path d="M15 22a9 9 0 1 1 18 0c0 3.8-2.2 7-5 8.7V34H20v-3.3c-2.8-1.7-5-4.9-5-8.7z" fill="#F0F8FF" />
                          <circle cx="33" cy="14" r="2" fill="#0082C8" />
                          <circle cx="15" cy="14" r="2" fill="#0082C8" />
                          <path d="M33 14l3-3m-21 3l-3-3" />
                          <circle cx="24" cy="22" r="3" />
                        </svg>
                      )}
                      {c.iconType === 'nodes' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="24" cy="24" r="8" fill="#F0F8FF" />
                          <text x="24" y="27.5" textAnchor="middle" fill="#0082C8" fontSize="9" fontWeight="800" stroke="none">AI</text>
                          <circle cx="10" cy="14" r="3.5" />
                          <circle cx="38" cy="14" r="3.5" />
                          <circle cx="10" cy="34" r="3.5" />
                          <circle cx="38" cy="34" r="3.5" />
                          <line x1="13" y1="16" x2="18" y2="20" />
                          <line x1="35" y1="16" x2="30" y2="20" />
                          <line x1="13" y1="32" x2="18" y2="28" />
                          <line x1="35" y1="32" x2="30" y2="28" />
                        </svg>
                      )}
                      {c.iconType === 'governance' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="8" y="10" width="32" height="22" rx="4" fill="#F0F8FF" />
                          <line x1="8" y1="16" x2="40" y2="16" />
                          <circle cx="12" cy="13" r="1.5" fill="#0082C8" />
                          <circle cx="17" cy="13" r="1.5" fill="#0082C8" />
                          <path d="M20 38h8m-4-6v6" />
                          <path d="M28 22l3 3 6-6" strokeWidth="2.5" />
                        </svg>
                      )}
                      {c.iconType === 'risk' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 6h18l10 10v26a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="#F0F8FF" />
                          <rect x="13" y="12" width="14" height="6" rx="1" fill="#0082C8" />
                          <text x="20" y="16.5" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" stroke="none">RISK</text>
                          <circle cx="22" cy="28" r="5" />
                          <line x1="26" y1="32" x2="32" y2="38" strokeWidth="2.8" />
                        </svg>
                      )}
                      {c.iconType === 'optimization' && (
                        <svg className="w-12 h-12 text-[#0082C8]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="24" cy="24" r="14" fill="#F0F8FF" />
                          <path d="M24 16a8 8 0 0 1 7 4" />
                          <line x1="24" y1="24" x2="30" y2="18" strokeWidth="2.5" />
                          <circle cx="24" cy="24" r="3" fill="#0082C8" />
                          <path d="M24 6v4m0 28v4m-18-18h4m28 0h4" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-[14.5px] sm:text-[15px] font-[700] text-slate-900 leading-snug">
                      {c.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. TECHNOLOGIES POWERING OUR AI SOLUTIONS (Pills Tabs + Logo Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Technologies Powering Our AI Solutions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We utilize the latest advancements in AI technology and foundation models to develop high-performing enterprise solutions that not only meet today's demands but also pave the way for future success.
            </p>
          </div>

          {/* Category Pills Box */}
          <div className="bg-[#ECF4F8] rounded-[20px] p-3 sm:p-4 max-w-5xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTechTab(idx)}
                  className={`px-4 sm:px-4.5 py-2 rounded-[8px] text-[13px] font-[700] transition-all cursor-pointer ${
                    activeTechTab === idx
                      ? 'bg-[#0082C8] text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-[#0082C8] hover:bg-slate-50 border border-slate-200/60'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Tagline */}
          <p className="text-center text-[14px] sm:text-[15px] text-[#475569] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            {techCategories[activeTechTab].tagline}
          </p>

          {/* 6 White Logo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techCategories[activeTechTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center space-y-3 min-h-[130px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {renderTechBrandLogo(item.name)}
                </div>
                <h3 className="text-[16px] font-[800] text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7.5 CLUTCH TOP RATED BANNER (Dark Blue Full-Width Bar with 5 Badges)
          ========================================================================= */}
      <section className="py-6 sm:py-7 bg-[#005B85] text-white font-sans text-left">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-2">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-400/50 shrink-0">
                <Award className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-[18px] sm:text-[21px] font-[800] tracking-tight">
                World Wide Top Rated IT Company on Clutch
              </h3>
            </div>

            {/* 5 Clutch Badges */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 overflow-x-auto max-w-full py-1">
              <div className="bg-[#00486B] border border-yellow-400/40 rounded-[10px] px-3 py-1.5 flex items-center space-x-2 shrink-0 shadow-sm">
                <span className="text-yellow-400 text-base">🏆</span>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-yellow-300 uppercase font-black tracking-wider">Top Rated</div>
                  <div className="text-[11px] font-bold text-white">IT Company</div>
                </div>
              </div>
              <div className="bg-[#00486B] border border-sky-400/40 rounded-[10px] px-3 py-1.5 flex items-center space-x-2 shrink-0 shadow-sm">
                <span className="text-sky-300 text-base">⭐</span>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-sky-300 uppercase font-black tracking-wider">Top App</div>
                  <div className="text-[11px] font-bold text-white">Developers 2024</div>
                </div>
              </div>
              <div className="bg-[#00486B] border border-rose-400/40 rounded-[10px] px-3 py-1.5 flex items-center space-x-2 shrink-0 shadow-sm">
                <span className="text-rose-400 text-base">🛡️</span>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-rose-300 uppercase font-black tracking-wider">Top Software</div>
                  <div className="text-[11px] font-bold text-white">Developers</div>
                </div>
              </div>
              <div className="bg-[#00486B] border border-slate-300/40 rounded-[10px] px-3 py-1.5 flex items-center space-x-2 shrink-0 shadow-sm">
                <span className="text-slate-200 text-base font-black">C</span>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-slate-300 uppercase font-black tracking-wider">Clutch 5.0</div>
                  <div className="text-[11px] font-bold text-white">★★★★★</div>
                </div>
              </div>
              <div className="bg-[#00486B] border border-red-500/40 rounded-[10px] px-3 py-1.5 flex items-center space-x-2 shrink-0 shadow-sm">
                <span className="text-red-400 text-base">🏅</span>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-red-300 uppercase font-black tracking-wider">Top AI</div>
                  <div className="text-[11px] font-bold text-white">Company</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. GET A 100% CUSTOMIZABLE ARTIFICIAL INTELLIGENCE DEVELOPMENT BY EXPERTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Get A 100% Customizable Artificial Intelligence Development By Experts.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[260px]">
              <div className="text-[#0082C8] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#006B8F] leading-tight">
                Scale your business with our AI solutions
              </h3>
            </div>

            {/* Right Paragraphs */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We have a large pool of committed deep learning engineers working hard to reduce operating expenses, optimize efficiency, increase customer happiness, and drive company development. We encourage your company to adopt a strategy for wiser decision-making by integrating our AI technology into your most stream-intensive processes. This will simplify your company's routine, unforeseen business mistakes and increase customer demand.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our specialists provide artificial intelligence development tools that do not replace human talent; instead, they should be regarded as a potent business enhancement. We put a lot of effort into modernizing your company's disaster adapter by making a workflow for you to take advantage of our artificial intelligence web environment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8.5 CUTTING EDGE TECHNOLOGY FIREVY USE FOR ARTIFICIAL INTELLIGENCE DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#ECF4F8] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Cutting Edge Technology Firevy Use For Artificial Intelligence Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-8">
            {expertOfferings.slice(0, 4).map((off, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0082C8] flex items-center justify-center font-bold mb-4">
                    {idx === 0 && <FileCheck className="w-5 h-5" />}
                    {idx === 1 && <Code2 className="w-5 h-5" />}
                    {idx === 2 && <Layers className="w-5 h-5" />}
                    {idx === 3 && <Sparkles className="w-5 h-5" />}
                  </div>
                  <h3 className="text-[16.5px] font-[800] text-slate-900 mb-2.5">{off.title}</h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed mb-4">{off.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Slider Navigation Arrows */}
          <div className="flex items-center justify-center space-x-3">
            <button className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-xs cursor-pointer font-bold">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-xs cursor-pointer font-bold">
              →
            </button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. KEY BENEFITS OF CHOOSING AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Key Benefits of Choosing AI Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Take advantage of the potential of data and AI to open up a multitude of enterprise growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiBenefits.map((ben, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#006B8F]/10 text-[#006B8F] flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900 mb-2">{ben.title}</h3>
                <p className="text-[13.5px] text-[#475569] leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. OUR DEVELOPERS EXPERTISE (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Expertise of Our Trained AI Developers
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We have trained AI developers in our team providing end-to-end expertise across AI domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {developerExpertise.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200/90 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-[18px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                </div>
                <Link
                  to={exp.link}
                  className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          11. FLEXIBLE HIRING MODELS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Flexible AI Engagement & Hiring Models
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We offer four different types of hiring models that are designed to suit your diverse needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hiringModels.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[19px] font-[800] text-slate-900 mb-3">{m.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {m.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center text-[12.5px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006B8F] mr-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 bg-[#006B8F] hover:bg-[#005478] text-white rounded-lg font-bold text-xs text-center transition-all shadow-sm"
                >
                  Hire Now
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          12. SECTORS THRIVING THROUGH BESPOKE AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <SectorsThrivingSection />

      {/* =========================================================================
          13. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          14. OUR RECENT PROJECTS
          ========================================================================= */}
      <OurRecentProjectsGrid />

      {/* =========================================================================
          15. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          16. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          17. FREQUENTLY ASKED QUESTIONS (2-Column Sapphire Layout)
          ========================================================================= */}
      <SapphireFaqSection faqList={faqs} />

      {/* =========================================================================
          18. WE HAVE BEEN FEATURED IN (Exact 18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          19. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top Artificial Intelligence Development Company in USA to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire AI Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ArtificialIntelligenceDevelopmentService;
