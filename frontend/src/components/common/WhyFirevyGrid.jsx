import React from 'react';
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
  BookOpen
} from 'lucide-react';

const defaultCards = [
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
    desc: 'Pay for what service you get and nothing else, Firevy.Co has a strict policy of avoiding any additional charges and taking payments once the work is completely done.',
    icon: <FileText className="w-8 h-8 text-[#00668C] stroke-[1.8]" />
  },
  {
    id: 8,
    title: 'Recommendations',
    desc: '127+ verified reviews on clutch platform, top-rated profile on Upwork (100% client retention and satisfaction noted), amongst top 1% players on freelancer portal, and some other recommendation on Good firms, cafeteria, and other review platforms.',
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
  }
];

export const WhyFirevyGrid = ({
  title = "Why Firevy.Co?",
  subtitle = "Reasons why our clients keep coming back to us",
  cards = defaultCards
}) => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] sm:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-[400] font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-8 text-left space-y-3.5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-[#00668C]/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[19px] font-[800] text-slate-900 font-sans tracking-tight group-hover:text-[#00668C] transition-colors">
                {card.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-[400] font-sans">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFirevyGrid;
