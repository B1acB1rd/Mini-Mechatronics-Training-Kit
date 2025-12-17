import React from 'react';
import { Settings, Cpu } from 'lucide-react';

const TechnicalDetails: React.FC = () => {
  return (
    <section id="wiring" className="scroll-mt-24">
      <div className="flex items-center mb-6 border-b-2 border-accent pb-2 inline-block">
        <h2 className="text-3xl font-bold text-primary">⚙️ Technical Details</h2>
      </div>
      {/* Arduino Sketch */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Arduino Sketch</h3>
        <p className="text-gray-600 mb-4">Reference firmware used for the prototype — copy this into the Arduino IDE.</p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
          <pre className="whitespace-pre-wrap text-sm"><code className="language-cpp">{`#include <Servo.h>
#include <DHT.h>


#define BUZZER_PIN 3    
#define SERVO1_PIN 5    
#define SERVO2_PIN 6    
#define RELAY1_PIN 7    
#define RELAY2_PIN 8    


#define HALL_PIN 9      
#define DHT_PIN 10      
#define ULTRA_TRIG_PIN 11
#define ULTRA_ECHO_PIN 12 


#define LDR1_PIN A0     

#define TOUCH1_PIN A2   



Servo servo1;
Servo servo2;
DHT dht(DHT_PIN, DHT11);


const int LDR_DARK_THRESHOLD = 800; //Ldr resistance
const int TEMP_HOT_THRESHOLD = 28;  //Degrees C
const int PROXIMITY_THRESHOLD = 20; //cm

void setup() {
  Serial.begin(9600);
  
  
  servo1.attach(SERVO1_PIN);
  servo2.attach(SERVO2_PIN);
  dht.begin();
  
  
  servo1.write(0);  
  servo2.write(0);  
  digitalWrite(RELAY1_PIN, LOW); 
  digitalWrite(RELAY2_PIN, LOW); 
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);

  
  pinMode(RELAY1_PIN, OUTPUT);
  pinMode(RELAY2_PIN, OUTPUT);
  pinMode(ULTRA_TRIG_PIN, OUTPUT);
  pinMode(ULTRA_ECHO_PIN, INPUT);
  
  
  pinMode(HALL_PIN, INPUT_PULLUP); 
  pinMode(TOUCH1_PIN, INPUT);
}

void loop() {
  
  float currentTemp = dht.readTemperature();
  int ldr1Reading = analogRead(LDR1_PIN);
  long distanceCm = getUltrasonicDistance();
  int hallState = digitalRead(HALL_PIN);
  int touchState = digitalRead(TOUCH1_PIN);


  
  if (!isnan(currentTemp)) {
    if (currentTemp > TEMP_HOT_THRESHOLD) {
      digitalWrite(RELAY1_PIN, HIGH); // Fan ON
    } else {
      digitalWrite(RELAY1_PIN, LOW);  // Fan OFF
    }
  }

  
  if (ldr1Reading > LDR_DARK_THRESHOLD) {
    digitalWrite(RELAY2_PIN, HIGH); // Light ON
  } else {
    digitalWrite(RELAY2_PIN, LOW);  // Light OFF
  }

  
  if (distanceCm > 0 && distanceCm < PROXIMITY_THRESHOLD) {
    servo1.write(90); 
  } else {
    servo1.write(0);  
  }

  
  if (hallState == LOW) {
    servo2.write(90); 
  } else {
    servo2.write(0);  
  }

  
  if (touchState == HIGH) {
    tone(BUZZER_PIN, 880); 
  } else {
    noTone(BUZZER_PIN);
  }

  delay(50); 
}


long getUltrasonicDistance() {
  digitalWrite(ULTRA_TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(ULTRA_TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(ULTRA_TRIG_PIN, LOW);
  long duration = pulseIn(ULTRA_ECHO_PIN, HIGH);
  long distanceCm = duration * 0.034 / 2;
  return distanceCm;
}`}</code></pre>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Wiring Diagram */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Settings className="mr-2 text-gray-500" /> Wiring Diagram
          </h3>
          <p className="text-gray-600 mb-4">
            The system is powered by a central 12V supply stepped down to 5V for the logic circuits.
            Standard jumper wires connect the microcontroller to the relay module and sensor array.
          </p>
          <div className="bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
             <img 
               src="/Screenshot 2025-12-16 232236.png" 
               alt="Wiring Diagram" 
               className="w-full h-auto hover:scale-[1.02] transition-transform duration-300" 
             />
          </div>
        </div>

        {/* Pin Mapping */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Cpu className="mr-2 text-gray-500" /> Pin Mapping
          </h3>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Fan Relay</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D7</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Light Relay</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D8</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Servo</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D5</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Servo</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D6</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Buzzer</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D3</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Hall Effect Sensor</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D9</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>LDR</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin A0</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Touch Sensor</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin A2</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Ultrasonic Sensor Trig Pin</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D11</code>
              </li>
              <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span>Ultrasonic Sensor Echo Pin</span>
                <code className="bg-gray-700 px-2 py-1 rounded text-accent font-mono text-sm">Pin D12</code>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
            <strong>Note:</strong> Ensure the 12V supply is connected to the VIN pin for proper voltage regulation.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;