import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Dhiraj Kumar Mandal",
      position: "CEO and Founder",
      image: "./testimonials.jpeg",
      quote: "M & MB Soft Tech turned our idea into a fully functional and beautifully designed website. Their team was incredibly responsive and professional throughout the entire project. We felt like they were a part of our team"
    },
    {
      id: 2,
      name: "Indal Singh",
      position: "CEO",
      image: "./testimonials-4.jpeg",
      quote: "We partnered with M & MB Soft Tech to build a custom software tool for our internal operations, and the results exceeded our expectations. Their technical expertise and timely delivery helped us streamline our entire workflow."
    },
    {
      id: 3,
      name: "Suraj Palanchoke",
      position: "Entrepreneur",
      image: "./testimonials-5.jpeg",
      quote: "The Flutter-based mobile app M & MB Soft Tech delivered was top-notch in both performance and design. Their team’s dedication and knowledge of modern technologies truly stand out in the Nepali tech landscape."
    },
    {
      id: 4,
      name: "Aman Singh",
      position: "Founder",
      image: "./testimonials-3.jpeg",
      quote: "From web development to IT consulting, M & MB Soft Tech provided everything we needed to grow our online presence. Their solutions are affordable, scalable, and backed by a passionate team of engineers."
    }
  ];

  // Auto sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
            What Our <span className='text-[#6BC0E8]'> Clients</span>  Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with our team.
          </p>
        </div>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {/* Profile Image - Centered on mobile, left on desktop */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 mb-4 sm:mb-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-[#6BC0E8] mb-4 hidden sm:block">
                    <FaQuoteRight size={36} className="sm:size-38 md:size-42" />
                  </div>
                  
                  <div className="relative">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
                      <span className="font-medium text-black">
                        {testimonial.quote.split(' ').slice(0, 7).join(' ')}
                      </span>
                      {' ' + testimonial.quote.split(' ').slice(7).join(' ')}
                    </p>
                    
                    <div className="mt-4 sm:mt-6">
                      <h4 className="text-[#6BC0E8] text-lg sm:text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{testimonial.position}</p>
                      <p className="text-sm sm:text-base text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 md:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#6BC0E8]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;