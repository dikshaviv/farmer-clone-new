import React from "react";

const HeroSection = ({ background, title, subtitle, buttonText }) => {
  return (
    <div
      className="relative w-full h-[85vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl px-6 mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl drop-shadow-md">
          {subtitle}
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
