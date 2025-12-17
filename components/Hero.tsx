import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-light py-16 md:py-24 text-center border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Teaching Mechatronics to Others
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A training platform demonstrating Sensor Integration, Actuator Control and Microcontroller Programming.
        </p>
        <div className="relative inline-block shadow-xl rounded-lg overflow-hidden border-4 border-white">
          <img 
            src="/20251216_125505.jpg" 
            alt="Project Setup" 
            className="max-w-full h-auto object-cover"
            width={800}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          <span className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
            Setup
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;