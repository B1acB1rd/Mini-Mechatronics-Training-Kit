import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageId: string;
}

const members: TeamMember[] = [
  { name: "Oladeji Emmanuel Timileyin", role: "Group Leader", imageId: "BackgroundEraser_20250223_222855603 (1).jpg"},
  { name: "Adeniji Solomon Oluwakayode", role: "", imageId: "IMG-20251216-WA0005.jpg" },
  { name: "Oredipe Oluwagbohunmi Adekunle", role: "", imageId: "PXL_20241023_170349559.PORTRAIT~2.jpg" },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="scroll-mt-24">
      <div className="flex items-center mb-8 border-b-2 border-accent pb-2 inline-block">
        <h2 className="text-3xl font-bold text-primary">👥 Meet the Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center transform transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-100">
              <img 
                  src={member.imageId} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-accent font-medium text-sm uppercase tracking-wide mb-2">{member.role}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;