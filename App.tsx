import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UserGuide from './components/UserGuide';
import TechnicalDetails from './components/TechnicalDetails';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8 space-y-20">
          <About />
          <UserGuide />
          <TechnicalDetails />
          <Team />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;