import React from 'react';
import { 
  FaPalette, 
  FaCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaServer, 
  FaPencilAlt, 
  FaHeadset, 
  FaSearch
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaPalette size={36} className="text-black" />,
      title: "Web Design and Development",
      description: "Crafting visually stunning and highly functional websites tailored to your brand and business goals."
    },
    {
      icon: <FaCode size={36} className="text-black" />,
      title: "Custom Software Solutions",
      description: "Developing bespoke software applications that address your unique business challenges and streamline operations."
    },
    {
      icon: <FaMobileAlt size={36} className="text-black" />,
      title: "Mobile App Development",
      description: "Creating user-friendly and feature-rich mobile apps to enhance engagement and accessibility for your both android and iOS audience."
    },
    {
      icon: <FaChartLine size={36} className="text-black" />,
      title: "IT Consulting and Ads",
      description: "Providing expert IT consulting and comprehensive digital marketing services, including email marketing, SEO, and social media strategies."
    },
    {
      icon: <FaServer size={36} className="text-black" />,
      title: "Hosting",
      description: "Reliable hosting solutions with maximum uptime and security to ensure your website is always accessible to your customers."
    },
    {
      icon: <FaPencilAlt size={36} className="text-black" />,
      title: "Logo Design",
      description: "Creating distinctive and memorable logos that capture your brand identity and resonate with your target audience."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our <span className='text-[#6BC0E8]'>Services</span> </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">Comprehensive digital solutions tailored to elevate your business and drive growth in today's competitive market.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#6BC0E8' }}>
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;