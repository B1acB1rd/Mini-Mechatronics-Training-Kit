import React from 'react';
import { Thermometer, Lightbulb, Zap, Volume2, Lock } from 'lucide-react';

const UserGuide: React.FC = () => {
  const interactions = [
    { 
      action: "Heat up the Temp Sensor", 
      reaction: "The Cooling Fan turns ON", 
      icon: <Thermometer className="text-red-500" /> 
    },
    { 
      action: "Cover the Light Sensor", 
      reaction: "The Lamp (Relay 2) turns ON", 
      icon: <Lightbulb className="text-yellow-500" /> 
    },
    { 
      action: "Put hand near Ultrasonic", 
      reaction: "Servo 1 rotates by 180 degree", 
      icon: <Zap className="text-blue-500" /> 
    },
    { 
      action: "Place a Magnet near the Hall Effect Sensor", 
      reaction: "Servo 2 rotates by 180 degree", 
      icon: <Lock className="text-purple-500" /> 
    },
    { 
      action: "Touch the Touch Sensor", 
      reaction: "The Buzzer beeps", 
      icon: <Volume2 className="text-green-500" /> 
    },
  ];

  return (
    <section id="how-to" className="scroll-mt-24">
      <div className="flex items-center mb-6 border-b-2 border-accent pb-2 inline-block">
        <h2 className="text-3xl font-bold text-primary">🛠 How to Use the Kit</h2>
      </div>
      
      <p className="mb-6 text-gray-700">
        The kit runs in <strong className="text-accent">Exhibition Mode</strong>. Simply power on the system using the 12V adapter. 
        Turn on the switch.The sensors are active immediately and respond to changes in the environment.
      </p>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-900 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Sensor Input (Action)</th>
              <th className="px-6 py-4">System Output (Reaction)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {interactions.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
                  {item.action}
                </td>
                <td className="px-6 py-4 text-accent font-semibold">
                  {item.reaction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserGuide;