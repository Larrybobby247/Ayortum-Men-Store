import React from "react";

const HomeVistaBanner = () => {
  return (
    <section className="w-full min-h-[500px] relative flex items-center justify-center overflow-hidden rounded-xl"
      style={{ background: "linear-gradient(135deg, #467434 0%, #363636 100%)" }}>
      
      {/* Decorative background circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "#F58F20" }} />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: "#F58F20" }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto">
        
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: "rgba(245, 143, 32, 0.2)", border: "1px solid rgba(245, 143, 32, 0.3)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#F58F20" }} />
          <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#F58F20" }}>
            Coming Soon
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Home<span style={{ color: "#F58F20" }}>Vista</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl mx-auto">
          Your dream home is just a tap away. Buy, sell, and explore properties with the smartest real estate app.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* <button className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#F58F20" }}>
            Download App
          </button> */}
          <button className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#F58F20",  }}>
            Learn More
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <span>Instant Alerts</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>Smart Map Search</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Verified Listings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVistaBanner;