import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const SubscribeNewsletterSection = ({
  title = "Subscribe us and Get the latest updates and news"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-12 sm:py-14 bg-[#EDF6FC] text-center font-sans border-t border-b border-blue-100/80">
      <Container className="max-w-7xl">
        <h2 className="text-[26px] sm:text-[32px] font-[800] text-slate-900 tracking-tight leading-tight mb-7 font-sans">
          {title}
        </h2>

        {subscribed ? (
          <div className="max-w-xl mx-auto p-4 rounded-lg bg-emerald-50 text-emerald-800 text-sm font-bold border border-emerald-200">
            Thank you for subscribing to Firevy.Co latest updates!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
              {/* Input: Your name */}
              <input
                type="text"
                required
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#005F96] font-sans"
              />

              {/* Input: Your Email ID */}
              <input
                type="email"
                required
                placeholder="Your Email ID *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#005F96] font-sans"
              />

              {/* Input: Mobile Number with Country Code */}
              <div className="w-full lg:w-72 flex items-center rounded-[6px] bg-white border border-slate-300 overflow-hidden">
                <div className="flex items-center space-x-1 px-3 py-3 bg-slate-50 border-r border-slate-200 text-slate-700 text-[13px] font-[600] shrink-0 font-sans">
                  <span>+91</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none font-sans"
                />
              </div>

              {/* Cloudflare Captcha Widget Mock */}
              <div className="bg-white border border-slate-300 rounded-[6px] px-3.5 py-2 flex items-center space-x-2 shrink-0">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-[11px] font-[600] text-slate-700 font-sans">Success!</span>
                <div className="border-l border-slate-200 pl-2 text-[9px] text-slate-400 font-sans leading-tight text-left">
                  <span className="font-bold text-orange-600 block">CLOUDFLARE</span>
                  <span>Privacy • Help</span>
                </div>
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full lg:w-auto px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[800] text-[14px] transition-all shadow-md hover:shadow-lg font-sans shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

export default SubscribeNewsletterSection;
