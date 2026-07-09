import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaBullseye, FaStar } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: <FaGraduationCap className="text-3xl text-blue-500" />, number: "527+", label: "Students Enrolled" },
    { icon: <FaBriefcase className="text-3xl text-blue-500" />, number: "15+", label: "Years Experience" },
    { icon: <FaCode className="text-3xl text-blue-500" />, number: "20+", label: "Live Projects" },
    { icon: <FaBullseye className="text-3xl text-blue-500" />, number: "100%", label: "Placement Assistance" },
    { icon: <FaStar className="text-3xl text-blue-500" />, number: "4.9/5", label: "Student Rating" },
  ];

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-xl p-6 flex flex-wrap justify-between items-center gap-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 flex-1 min-w-[150px] justify-center md:justify-start">
            <div className="bg-blue-50 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-500 leading-none">{stat.number}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-gray-200 ml-auto"></div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats; 