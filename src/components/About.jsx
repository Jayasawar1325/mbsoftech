import React from "react";

const About = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-16">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img 
              src="/vector.jpg" 
              alt="M & MB Soft Tech Team" 
              className="w-full max-w-sm sm:max-w-md md:max-w-full object-contain" 
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <p className="uppercase text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Empowering Digital Transformation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-[#080808]">
              Innovative Solutions by <span className="text-[#6BC0E8]">M & MB</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 max-w-lg md:max-w-none">
              Founded in 2023 and based in Kathmandu, M & MB Soft Tech Pvt. Ltd. is a dynamic team of 10 exceptionally talented computer engineers from prestigious Institutes of Engineering. We specialize in delivering top-tier digital solutions tailored to your business needs.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
              Our services encompass web design and development, custom software solutions, mobile app development, IT consulting, and digital marketing. We leverage cutting-edge technologies like Python, Django, JavaScript, React, Node.js, Flutter, AWS, Digital Ocean, and GCP to ensure robust and scalable solutions.
            </p>
            <button className="mt-4 sm:mt-6 px-5 py-2 md:px-6 md:py-3 bg-[#6BC0E8] text-white text-sm md:text-base font-medium rounded-md hover:bg-[#5aafda] transition duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;