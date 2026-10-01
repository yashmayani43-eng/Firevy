import React from 'react';
import Container from '../common/Container';

export const AiCloudProvidersSection = () => {
  const providers = [
    {
      name: 'AWS',
      logo: (
        <div className="flex flex-col items-center justify-center">
          <svg className="w-16 h-10" viewBox="0 0 80 50" fill="none">
            {/* AWS text */}
            <text x="40" y="24" fontSize="22" fontWeight="900" textAnchor="middle" fill="#232F3E" fontFamily="sans-serif">aws</text>
            {/* Smile Arrow */}
            <path d="M18 33c14 7 30 7 44 0" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M58 30l6 3.5-4.5 4.5v-8z" fill="#FF9900" />
          </svg>
        </div>
      ),
      text: 'Amazon Web Services capitalizes on its internal expertise in artificial intelligence (AI) and machine learning to provide a variety of AI services. We develop and scale generative AI that is tailored to your data, use cases, and customers in our capacity as AWS partners.'
    },
    {
      name: 'Azure',
      logo: (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
            <path d="M6 38h23L13 10 6 38z" fill="#0078D4"/>
            <path d="M17 30L29 8h13l-17 30H17z" fill="#50E6FF"/>
          </svg>
          <span className="text-[12.5px] font-[800] text-[#0078D4] tracking-tight font-sans">Azure</span>
        </div>
      ),
      text: 'Collaboration with Azure cloud allows us to develop intelligent applications at an enterprise scale with Azure AI, a cloud-based AI platform that offers a variety of AI products and services. We can create market-ready, cutting-edge AI applications that are both customizable and out-of-the-box.'
    },
    {
      name: 'Google Cloud',
      logo: (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
            <path d="M24 16.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5z" fill="#4285F4"/>
            <path d="M36 24c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 2.22.61 4.3 1.67 6.09l-4.52 4.52C7.26 31.91 6 28.11 6 24 6 14.06 14.06 6 24 6s18 8.06 18 18c0 4.11-1.26 7.91-3.15 10.61l-4.52-4.52C35.39 28.3 36 26.22 36 24z" fill="#EA4335"/>
            <path d="M24 36c-3.11 0-5.96-1.19-8.09-3.15l-4.52 4.52C14.67 40.54 19.06 42 24 42c4.94 0 9.33-1.46 12.61-4.63l-4.52-4.52C29.96 34.81 27.11 36 24 36z" fill="#34A853"/>
            <path d="M39.85 34.61C41.74 31.91 43 28.11 43 24c0-1.02-.09-2.01-.25-2.98H24v6h12.72c-.61 2.9-2.27 5.32-4.57 7.07l4.52 4.52h.18z" fill="#FBBC04"/>
          </svg>
          <span className="text-[11px] font-[800] text-[#5F6368] tracking-tight font-sans text-center leading-tight">Google Cloud</span>
        </div>
      ),
      text: "The partnership with GCP empowers us to use Google Cloud's preconfigured AI solutions to address your most critical business challenges from beginning to end. GCP offers a comprehensive selection of AI and ML tools, including pre-trained models and custom model development choices."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#E8F4F9] text-slate-900 font-sans border-b border-sky-100/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
          {/* Left Dark Blue Card */}
          <div className="lg:col-span-5 bg-[#005F96] text-white rounded-[24px] p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden shadow-md">
            {/* Background Decorative Rings */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[900] text-white tracking-tight leading-[1.25]">
                Fuelling Our AI Development Services With Powerful Cloud Providers
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/90 leading-[1.8] font-normal">
                The need to support next-generation workloads and the emergence of Generative AI (Gen AI) are driving this evolution in cloud services. Hire enterprise AI developers and consultants that guarantee the scalability and efficiency of your AI applications through our strategic partnerships with Microsoft AWS, Azure, and Google Cloud platforms. If you are looking for world-class AI Development Services for your business, contact us now!
              </p>
            </div>
          </div>

          {/* Right Column: 3 White Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5">
            {providers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-6 sm:p-7 shadow-sm border border-slate-100/90 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 hover:shadow-md transition-all duration-300"
              >
                {/* Left Logo Container Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F0F4F8] rounded-[18px] flex flex-col items-center justify-center shrink-0 p-2 shadow-inner">
                  {item.logo}
                </div>

                {/* Right Card Text */}
                <p className="text-[14px] sm:text-[14.5px] text-[#334155] leading-[1.75] font-normal text-left sm:pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiCloudProvidersSection;
