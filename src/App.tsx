
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingStats from './components/CodingStats';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NetworkBackground from './components/NetworkBackground';

function App() {
  return (
    <>
      {/* Premium animated network background */}
      <NetworkBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main portfolio */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingStats />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;