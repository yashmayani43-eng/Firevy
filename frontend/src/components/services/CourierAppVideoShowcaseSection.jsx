import React, { useState } from 'react';
import Container from '../common/Container';
import { Play, X } from 'lucide-react';

export const CourierAppVideoShowcaseSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 bg-white font-sans text-center relative overflow-hidden border-b border-slate-100">
      <Container>
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight mb-8 sm:mb-10">
          Top Courier App Development Company
        </h2>

        {/* Video Banner Container with Soft Pastel Accent Circles */}
        <div className="relative max-w-2xl mx-auto flex items-center justify-center py-4">
          
          {/* Top-Left Sky Blue Soft Background Circle */}
          <div className="absolute top-0 left-4 sm:left-12 w-32 sm:w-44 h-32 sm:h-44 bg-[#D8F0FA] rounded-full filter blur-[1px] opacity-80 -z-0" />
          
          {/* Bottom-Right Soft Pink Background Circle */}
          <div className="absolute bottom-0 right-4 sm:right-12 w-28 sm:w-36 h-28 sm:h-36 bg-[#FDE2E4] rounded-full filter blur-[1px] opacity-80 -z-0" />

          {/* GrabCourier App Video Banner Card */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative z-10 w-full max-w-xl bg-slate-950 rounded-[20px] sm:rounded-[24px] shadow-2xl overflow-hidden cursor-pointer group border border-slate-800 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-cyan-500/10"
          >
            {/* Thumbnail Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src="/images/grabcourier_card.png"
                alt="GrabCourier App Video Showcase"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />

              {/* Centered Glowing Blue Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#006587] text-white flex items-center justify-center shadow-lg shadow-[#006587]/50 group-hover:scale-110 group-hover:bg-[#0084D1] transition-all duration-300 ring-4 ring-white/30">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full p-2 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Responsive Video Embed */}
            <div className="relative aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Top Courier App Development Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourierAppVideoShowcaseSection;
