import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white text-center py-8 mt-12">
      <div className="container mx-auto px-4">
        <p className="text-lg font-medium mb-2">Built by 2025/2026 400L Students</p>
        <p className="text-gray-400 text-sm">Department of Mechatronics • Federal University of Agriculture Abeokuta</p>
        <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500">
          Mini Mechatronics Training Kit © {2025}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;