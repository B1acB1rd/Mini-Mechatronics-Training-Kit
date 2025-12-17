import React from 'react';
import { FileText, User, Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center mb-6 border-b-2 border-accent pb-2 inline-block">
        <h2 className="text-3xl font-bold text-primary">About the Project</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            This project is designed to demonstrate how sensors and actuators interact with the environment. 
            It uses a <strong>1-to-1 logic mapping system</strong> where physical phenomena (Heat, Light, Magnetism, Proximity) 
            trigger immediate physical responses.
          </p>
          <p className="text-gray-600">
            The system serves as an educational tool for understanding the fundamentals of automation,
            circuit design, and embedded programming using standard components.
          </p>
          
          <button 
            className="inline-flex items-center bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-4 shadow-md group"
            onClick={() => alert("This would download the PDF report in a real deployment.")}
          >
            <FileText className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Download Full Project Report
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
            <User className="mr-2 text-accent" size={24} />
            Project Supervisor
          </h3>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-accent shadow-md">
            <img 
              src="/IMG-20251216-WA0024.jpg" 
              alt="Dr. Oyelami" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="font-semibold w-24 text-gray-500">Supervisior:</div>
              <div className="text-gray-800 font-medium">Dr. Oyelami</div>
            </div>
            <div className="flex items-start">
              <div className="font-semibold w-24 text-gray-500">Dept:</div>
              <div className="text-gray-800 flex items-center">
                Mechatronics Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;