import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import { getMediaUrl } from '../utils/mediaUrl';
import {
  Award,
  Globe,
  Star,
  Users,
  Calendar,
  FileText,
  Sparkles,
  MessageSquare,
  Briefcase,
  ShieldCheck,
  Target,
  Heart,
  BookOpen,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const whyChooseUsCards = [
  {
    id: 1,
    title: 'Fortune 100 clientele',
    desc: 'Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 100-1000 clients to list.',
    icon: <Award className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 2,
    title: 'ISO Certified 27001',
    desc: 'We are an ISO certified company, hence you can expect genuinity with no frauds or misery.',
    icon: <Globe className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 3,
    title: '1500+ Success Stories',
    desc: 'Covered 1500+ satisfied clients for the product (education domain) across the globe.',
    icon: <Star className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 4,
    title: 'Clients Presence',
    desc: "Clients in more than 25 countries across the globe are advocates of Firevy.Co's deliverability, quality, and production.",
    icon: <Users className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 5,
    title: 'Since',
    desc: '2002! Yes, having presence in market from more than 20 years and still counting. Choosing us benefits you to get your product deployed under expert technicians as per your expectations.',
    icon: <Calendar className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 6,
    title: 'Awards & Achievements',
    desc: 'Firevy.Co is an award winning and well known name in education domain with amazing ranking on google (SEO) and holding more than 15+ awards for the product.',
    icon: <Award className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 7,
    title: 'No Hidden Costs',
    desc: 'Pay for what service you get and nothing else, Firevy.Co has a strict policy of avoiding any additional charges and taking payments once the work is completely done (in freelancing portals).',
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 8,
    title: 'Recommendations',
    desc: '127+ verified reviews on clutch platform, top-rated profile on Upwork (100% client retention and satisfaction noted), amongst top 1% players on freelancer portal (Preferred freelancer badge), and some other recommendation on Good firms, cafeteria, and other review platforms.',
    icon: <Sparkles className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 9,
    title: 'Free Guidance',
    desc: 'New to web development or app development? Please feel free for any guidance or consultation, Firevy.Co provides it completely free of charge and keeps no charge for guiding or communicating with new clients in the market.',
    icon: <MessageSquare className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 10,
    title: 'One Stop Shop',
    desc: 'Tired of finding & paying for individuals with different skills? Firevy.Co comes up with a one roof solution, enabling you to get everything from designs to QA and support at a single stop. Allow Firevy.Co to minimize your efforts.',
    icon: <Briefcase className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 11,
    title: 'Trust',
    desc: 'Hire Firevy.Co and get secured. Handover all your worries and concerns to a 23+ years + 27001 ISO-Certified firm and get rid of any frauds or worries. Not only this, Our reputation is our shadow, hence we cannot at all afford ruining our reputation because of any fraud or misbehaves.',
    icon: <ShieldCheck className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 12,
    title: 'Enterprise Solutions',
    desc: 'Enterprise solutions quality guaranteed; covered clients with employee strength more than 500000, and their branches spread in more than 300 locations.',
    icon: <Target className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 13,
    title: 'Customer Retention',
    desc: "Adani group has been part of Firevy.Co's client library since 2012.",
    icon: <Heart className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 14,
    title: 'Proud To Have',
    desc: '2 decades of experience in education domain and 10+ of experience in Healthcare domain.',
    icon: <Award className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 15,
    title: 'Diversified Portfolio',
    desc: 'We provide diversified services in domain industries like: Cement, power, refinery, logistics, engineering, Finance, Automotive, steel, energy, chemicals.',
    icon: <BookOpen className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 16,
    title: 'Dedicated',
    desc: 'Facing issues of unavailability from freelancers? Firevy.Co comes with full time availability with multiple options of developers incase the one gets unavailable.',
    icon: <Users className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 17,
    title: 'Cost And ROI',
    desc: 'Firevy.Co takes care of your budget and helps you to workout even in low budgets, the idea of going for a MVP comes into picture under such scenarios and we proceed with helping you with a model that helps you to generate ROI first.',
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 18,
    title: 'Boutique Agency',
    desc: 'Services that Firevy.Co provides from a single roof includes: Web Development, Mobile App Development, Cloud & DevOps, Product Development, Software Testing & QA, Digital Marketing, Software Maintenance & Support.',
    icon: <Briefcase className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 19,
    title: 'Domain Expertise',
    desc: 'Firevy.Co comes up with attitude of learning though it has been providing its services from last 2 decades. With time we have evolved to latest technologies and languages like flutter, react-native, ML, react JS, Node JS, etc. Making it easy for you to find all under a single roof.',
    icon: <Globe className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 20,
    title: 'Secured & Safe',
    desc: 'Firevy.Co is bound to keep all your data private by signing NDAs We understand sensitivity of project information, and insured to work on high-security/high-safety systems. In this way we will implement essential steps to protect proprietary and personal data.',
    icon: <ShieldCheck className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 21,
    title: 'Easy Handover',
    desc: "Honest enough to say 'Sorry, not good fit for you'. Need to switch your preference? Please don't hesitate at all. Firevy.Co provides the complete KT (Knowledge Transfer) to next party keep you updated of everything with an easy exit process.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 22,
    title: 'Enterprise Apps',
    desc: 'Firevy.Co is not only focused on on-demand services apps development. But, also have an expert eye on providing enterprise apps and solution like ERP development, CRM development, CRMS, SaaS product development, and Sharepoint/Ninetex solutions too.',
    icon: <Target className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 23,
    title: 'Problem Solving',
    desc: 'Firevy.Co believes in client satisfaction, hence enables you to work or communicate with techie who would not only provide problem solving approaches, but will also help to make a road map and fulfill your requirement in best possible manner.',
    icon: <Sparkles className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 24,
    title: 'Strategy Development',
    desc: "As we follow agile methodology you'll find precise and accurate development strategies, but it is not limited to development strategies, we also focus on after development and client retention strategy which has helped us alot to maintain 100% client retention in past.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 25,
    title: 'Flexible Availability',
    desc: '40 hours/week, 8 hours/day. -Available on weekends as well (in case of urgent deliveries) would need to be informed before a day. -Would be working dedicatedly on your projects, reporting to you daily with updates and progress.',
    icon: <Users className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 26,
    title: 'Cost Optimization',
    desc: "Choosing Firevy.Co might be beneficial for you has you can hire a team at a cost of single individual. Firevy.Co's hourly rate are having wide ranges depending upon what developers you choose. Making you comfortable to choose developers according to the complexity of your task.",
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 27,
    title: 'Focused On UI/UX',
    desc: 'User experience is quite important and Firevy.Co pressures it more. We offer clients to go with an initial milestone of designs only. Finalizing it first, and then proceeding it with the final development after complete satisfaction of your on the designs.',
    icon: <Sparkles className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 28,
    title: 'Timely Delivery',
    desc: 'A proven track record of on-time delivery. We decide the deadline of the applications in the initial negotiation phases. Setting the timeframe by considering the time to be taken for debugging and training - Enabling you a get a complete road view of your project before you award.',
    icon: <Calendar className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 29,
    title: 'Digitization',
    desc: 'Expanding and working on providing modern tech solutions that can involved with help of Artificial intelligence, Machine learning, Virtual reality, and IoT as well - helping us to transform digitally and be a keen competition in the market.',
    icon: <Globe className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 30,
    title: 'Cloud Computing',
    desc: 'World is switching to cloud! Everyone is getting rid of online servers and offline storage stuff. Firevy.Co comes up with an updated support in cloud technologies as well like AWS, Docker, Jenkins, Oracle, DevOps, and many more.',
    icon: <Target className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 31,
    title: 'Testing Prototypes',
    desc: 'We know and understand the importance of testing, hence the testing does not come at the end of the project, but we offer you multiple testing levels like unit testing, prototype testing, UI/UX testing, and deployment testing.',
    icon: <ShieldCheck className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 32,
    title: 'English Proficiency',
    desc: 'No miscommunication or language barrier. Firevy.Co comes up with the best and energetic team completely trained and quoted with proficiency in English from Sales to support. Giving you a very homely feel via easy means of communication.',
    icon: <MessageSquare className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 33,
    title: 'The BRD Policy',
    desc: "Firevy.Co comes up with a policy, where everything would be freezed and pre-written in a BRD (Business requirement document) Work starts only after client's approval on the BRD. Let's avoid the possible communication gaps and any possible future disputes.",
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 34,
    title: 'Initial Design Milestone',
    desc: 'Facing trust issues? Worried about your project budgets? Start with Firevy.Co at just a short milestone for the rough wireframes and mockups! Essure the quality and decide, wanna proceed with us or not. Release the milestone only if satisfied by the work. No need to pay big amounts in name of advance.',
    icon: <CheckCircle2 className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 35,
    title: 'On-Demand POCs',
    desc: 'Looking for someone who can provide you quickest solution for a on-demand service app (MVPs)? Firevy.Co is a perfect place to help you with such POCs at cost efficient rates + quickest delivery through white labeling.',
    icon: <Briefcase className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 36,
    title: 'Always In Touch',
    desc: "Weather it's clients, partners, people, or prospects, Firevy.Co believes in staying touch with everyone and look forward for a better and strong relationship.",
    icon: <Heart className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 37,
    title: 'Innovation',
    desc: 'Innovation is birth of new Invention . Firevy.Co comes up with innovative techniques making your projects/products more precise and up to date with adding modern touches.',
    icon: <Sparkles className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 38,
    title: 'Support Help',
    desc: 'We do not believe in keeping relations with clients till development only. We believe in maintaining long term and positive relations with clients by providing them the support and maintenance module as well.',
    icon: <ShieldCheck className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 39,
    title: 'Flexibility',
    desc: 'Firevy.Co also offers to work in different timezone , hence making you comfortable by offering our flexibility.',
    icon: <Globe className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 40,
    title: 'Support & Maintenance',
    desc: 'We commit (in writing) to provide software configuration, software orientation, software customization, software maintenance and software backup services',
    icon: <Briefcase className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 41,
    title: 'Application Ownership',
    desc: "We are a white-label service provider where we commit our clients to provide all Graphics, Source code, and related content as it's their property. They can utilize it even when they plan to scale or need some upgrades etc.",
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 42,
    title: 'Clear Communication',
    desc: "Our team does not believe in siting in a room and keeps on coding endlessly. Every developer is confident enough in his/her speech, suggestions and solutions. They are not only limited to answer to your query, but also you'll find a problem solving approach.",
    icon: <MessageSquare className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 43,
    title: 'Enthusiasm & Passion',
    desc: "Good interpersonal relationship between business partners directly influences the success of both parties. So when a vendor shows genuine care about the client's success, it's a game-changer.",
    icon: <Users className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 44,
    title: 'Training Acceptance',
    desc: "Always a yes from Firevy.Co side regarding any challenges that come as an hurdle in the development and other phases. Giving you a complete easy to work with environment where every detailed study would be done by Firevy.Co team. It's an honor to learn new things daily.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 45,
    title: 'Platform Selection',
    desc: 'Firevy.Co helps you to understand the importance of using a particular technology stack with its pros and cons. Letting you to leave all your worries to us and just provide you end results as per your expectations.',
    icon: <Target className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 46,
    title: 'Quality Assurance',
    desc: 'QA personnel often perform software testing as soon as developers produce executable code, rather than waiting for the application to be completely coded.',
    icon: <ShieldCheck className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 47,
    title: 'Evolving Ideas',
    desc: "It's not always limited to scope or a BRD, No scope document can bound a limit for evolution of new phases in the app. Firevy.Co helps you to add +1 to your visions, keeping and developing things in a realistic manner.",
    icon: <Sparkles className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 48,
    title: 'Thought Process',
    desc: "Your project is our Responsibility; we do it with integrity; and deliver it with honesty - thought process followed by Firevy.Co since it's existence in the market.",
    icon: <Award className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 49,
    title: 'Flexible Models',
    desc: 'We offer clients 3 different models as per their comfort. They can hire developers hourly, dedicatedly, and fixed costs models',
    icon: <Users className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 50,
    title: 'Result Oriented',
    desc: 'Firevy.Co works behind your vision, and makes your vision as its mission and thrive hard to get the results as expected by you.',
    icon: <Target className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 51,
    title: 'Agility',
    desc: 'No need to worry of any miscommunication or communication gaps as your project is safe - divided in phases, allocated in sprints, and acknowledged to you via daily reports.',
    icon: <CheckCircle2 className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  }
];

export const WhyChooseUs = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title="Why Choose Us? | Reasons Why Clients Trust Us | Firevy.Co"
        description="Discover why leading enterprises and startups trust Firevy.Co as their primary tech partner. Explore our 51 reasons for client excellence."
        canonical="/why-choose-us"
      />

      {/* 1. HERO SECTION: "Why Choose Us?" */}
      <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                Why Choose Us?
              </h1>
              <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl">
                We understand the seriousness of your project, and here are the few reasons that why should you join the Firevy.Co club and get added to the list of 1500+ clients who have been trusting us since 2 decades.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15.5px] transition-all shadow-md group font-sans"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center relative select-none">
              <div className="relative w-full max-w-[540px] max-h-[380px] flex items-center justify-center">
                <img
                  src={getMediaUrl('/images/why-choose-hero.svg')}
                  alt="Why Choose Us"
                  className="w-full h-auto max-h-[380px] object-contain drop-shadow-xl rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 51 REASONS GRID */}
      <section className="py-20 bg-white text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Why Firevy.Co?
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-[400] font-sans">
              Reasons why our clients keep coming back to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChooseUsCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-8 text-left space-y-3.5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-[#00668C]/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-[19.5px] font-[800] text-slate-900 font-sans tracking-tight group-hover:text-[#00668C] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Connect Button */}
          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2.5 px-9 py-4 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[16px] transition-all shadow-md group font-sans"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="py-16 bg-white border-t border-b border-slate-100 text-slate-900 text-center font-sans">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 space-y-6">
          <p className="text-[20px] sm:text-[24px] font-[700] text-slate-900 max-w-3xl mx-auto leading-relaxed font-sans">
            Learn how Firevy.Co can help you build better relationships with your customers. Start a conversation today.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
            >
              REQUEST A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default WhyChooseUs;
