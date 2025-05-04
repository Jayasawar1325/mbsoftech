import { useState } from "react";
import {
  FaDatabase,
  FaCode,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCloud,
  FaServer,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJson,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdDevices } from "react-icons/md";

const Tools = () => {
  const [isPaused, setIsPaused] = useState(false);

  const programmingLogos = [
    { name: "JavaScript", icon: <SiJavascript size={32} /> },
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Python", icon: <FaPython size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "HTML", icon: <FaHtml5 size={32} /> },
    { name: "CSS", icon: <FaCss3Alt size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "Git", icon: <FaGitAlt size={32} /> }
  ];
  const companyLogos = [
    { name: "Web Development", icon: <AiOutlineGlobal size={32} /> },
    { name: "App Development", icon: <MdDevices size={32} /> },
    { name: "Cloud Services", icon: <FaCloud size={32} /> },

  ];

  const allLogos = [...programmingLogos, ...companyLogos];
  const sliderLogos = [...allLogos, ...allLogos];

  return (
    <div className="w-full py-16 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technologies <span className="text-[#6BC0E8]">&</span>  Tools</h2>
          <p className="mt-4 text-lg text-gray-300">
            Equipped with the latest tech stack to build modern solutions
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex ${isPaused ? "pause-animation" : "animate-scroll"}`}>
            {sliderLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center mx-8 min-w-[180px] py-4"
              >
                <div className="flex items-center">
                  <div className="text-white mr-4">{logo.icon}</div>
                  <span className="text-lg font-medium text-white whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
