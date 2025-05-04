import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-16 min-h-screen bg-white flex items-center py-6 md:py-12">
      <div className="mx-auto container max-w-7xl px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
       
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left text-[#080808] mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">
            Better <span className='text-[#6BC0E8]'>Solutions</span><br className="hidden xs:block md:hidden" /> For <br /> Your Business
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 px-4 sm:px-8 md:px-0 max-w-lg mx-auto md:max-w-none md:mx-0">
            We are a team of talented computer engineers, designers making mobile applications, websites, and custom software with the best technology stacks and best practices.
          </p>
          <button className="px-5 py-2 md:px-6 md:py-3 bg-[#6BC0E8] text-white text-sm md:text-base font-medium rounded-md hover:bg-[#5aafda] transition duration-300">
            Get Started
          </button>
        </div>
        
        <div className="md:w-1/2 px-4 sm:px-6 md:px-0">
          <img 
            src='./hero_img.jpg' 
            alt="Hero" 
            className="w-full h-auto object-contain max-w-sm mx-auto md:max-w-none" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;