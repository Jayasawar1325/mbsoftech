import React from "react";

const Clients = () => {
  const clientLogos = [
    "./client-1.jpeg",
    "./client-2.jpeg",
    "./client-4.jpeg",
    "./client-5.jpeg",
    "./client-6.jpeg",
    "./oncall.jpg",
    "./star.png",
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white text-center px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
          Trusted by <span className="text-[#6BC0E8]">20+ </span>enterprises<br className="hidden xs:block lg:hidden"/> and startups
        </h2>
        
        <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-center text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12">
          At M & MB, we've collaborated with forward-thinking organizations
          that trust us to deliver expertise and support
          to turn vision into reality.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10">
            {clientLogos.slice(0, 4).map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {clientLogos.slice(4).map((logo, index) => (
              <div key={index + 4} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client ${index + 5}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;