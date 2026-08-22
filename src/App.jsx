import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Currently from './components/Currently';
import SelectedWork from './components/SelectedWork';
import FinishThings from './components/FinishThings';
import Macramazing from './components/Macramazing';
import Hackathon from './components/Hackathon';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import DSASection from './components/DSASection';
import TheLab from './components/TheLab';
import BeyondCode from './components/BeyondCode';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <Currently />
          <SelectedWork />
          <FinishThings />
          <Macramazing />
          <Hackathon />
          <About />
          <Experience />
          <Skills />
          <DSASection />
          <TheLab />
          <BeyondCode />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Contextual AI Assistant Floating Button & Modal */}
        <AIAssistant />

      </div>
    </ThemeProvider>
  );
}
