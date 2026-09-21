import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import BRAND from '../../constants/brand';

export const FloatingElements = () => {
  const phoneUS = BRAND?.contact?.phoneUS || '+1-754-258-7670';
  const phoneRaw = phoneUS.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Right Margin Tab Contact Widgets (1:1 Sapphire Reference Match) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
        <a
          href={`tel:${phoneUS}`}
          title="Call Sales Support"
          className="w-11 h-12 rounded-l-xl bg-[#006095] hover:bg-[#004A75] text-white shadow-xl flex items-center justify-center transition-all hover:w-13 group"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={`https://wa.me/${phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-11 h-12 rounded-l-xl bg-[#00A884] hover:bg-[#008F70] text-white shadow-xl flex items-center justify-center transition-all hover:w-13 group"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </>
  );
};

export default FloatingElements;
