import React from 'react';

export const LoadingSpinner = ({ message = 'Loading...', fullPage = false }) => {
  const spinnerContent = (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-sky-500/20 border-t-[#005F96] animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-blue-600/20 border-b-blue-600 animate-spin animation-delay-150"></div>
      </div>
      {message && <p className="text-sm font-semibold text-slate-600 animate-pulse">{message}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-[70vh] w-full flex items-center justify-center bg-white text-slate-800">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

export default LoadingSpinner;
