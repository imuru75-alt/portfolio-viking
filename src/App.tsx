import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Arsenal from './components/Arsenal/Arsenal';
import Trophies from './components/Trophies/Trophies';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Arsenal />
        <Trophies /> 
        <Contact />  
      </main>
    </div>
  );
};

export default App;
