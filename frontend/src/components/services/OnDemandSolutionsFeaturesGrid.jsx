import React from 'react';
import Container from '../common/Container';
import {
  Smartphone,
  Bell,
  CreditCard,
  MapPin,
  ClipboardCheck
} from 'lucide-react';

export const OnDemandSolutionsFeaturesGrid = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF6FA] font-sans text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
            Features of On-Demand App Development Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            Before approaching an on-demand mobile app development business, it is usually a good idea to establish list of features you wish to add. Thus, the following are the MVP aspects that can be utilized in the on-demand application.
          </p>
        </div>

        {/* 3-Column Layout: Left Features, Center Smartphone Artwork, Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center max-w-6xl mx-auto">
          
          {/* Left Column (2 Features) */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 text-left">
            {/* Feature 1: Booking */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#D6EDF8] text-[#006587] flex items-center justify-center shrink-0 border border-[#BDE0F5]">
                  <Smartphone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
                  Booking
                </h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                An on-demand service app for your business sector must include a function for instant service booking to enable users to book services effortlessly. This functionality will undoubtedly astound many online consumers, as they will be able to instantly connect with specialists for their on-demand services at their convenience.
              </p>
            </div>

            {/* Feature 2: Push Notification */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#D6EDF8] text-[#006587] flex items-center justify-center shrink-0 border border-[#BDE0F5]">
                  <Bell className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
                  Push Notification
                </h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                To easily inform consumers of every operation within the program, push notification might be considered a miracle. It enables consumers to stay informed about all website activity, such as booking acceptance, cancellation, the arrival of the service provider, and new offers.
              </p>
            </div>
          </div>

          {/* Center Column: Phone Graphic with Pointer Arrows */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 my-2 lg:my-0">
            <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[320px]">
              <img
                src="/images/ondemand_features_center_phone.png"
                alt="Features of On-Demand App Development Solutions Illustration"
                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-md select-none"
              />
            </div>
          </div>

          {/* Right Column (2 Features) */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 text-left">
            {/* Feature 3: Payment Made Within the Application */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#D6EDF8] text-[#006587] flex items-center justify-center shrink-0 border border-[#BDE0F5]">
                  <CreditCard className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
                  Payment Made Within the Application
                </h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                Because payment is a critical component of an on-demand business, your online payment gateways must be fast, secure, and trustworthy. This functionality consideration for on-demand app development enables users to pay within the app using various payment methods such as debit cards, credit card, or wallets.
              </p>
            </div>

            {/* Feature 4: Location Tracking in Real-Time */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#D6EDF8] text-[#006587] flex items-center justify-center shrink-0 border border-[#BDE0F5]">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
                  Location Tracking in Real-Time
                </h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                When clients can visualize planned execution and expected arrival on the interface in real-time, they develop a greater level of trust in you. As a result, adopt location-based solutions for your on-demand cab booking app, food delivery, grocery store delivery, flower delivery, and alcohol delivery, among other services.
              </p>
            </div>
          </div>

        </div>

        {/* Center Bottom Feature: Reviews & Ratings */}
        <div className="max-w-xl mx-auto mt-10 sm:mt-12 text-left sm:text-center space-y-2.5">
          <div className="flex items-center justify-start sm:justify-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6EDF8] text-[#006587] flex items-center justify-center shrink-0 border border-[#BDE0F5]">
              <ClipboardCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base sm:text-lg font-[800] text-slate-900 tracking-tight font-sans">
              Reviews & Ratings
            </h3>
          </div>
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans max-w-lg mx-auto">
            By allowing consumers to share their opinions about the service provided and the items utilized, you as the business owner can gather information about users' preferences, desires, and behavior to enhance operations.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default OnDemandSolutionsFeaturesGrid;
