import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import { HeroSection } from './components/HeroSection/HeroSection';
import { Navbar } from './components/Navbar/Nav';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';
import { ProjContent } from './components/ProjContent/ProjContent';
import WireframeBase from './components/WireframeBox/WireframeBox';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="addWrapper">
        <WireframeBase>
          <ScrollToTop/>
          <Routes>

            {/* Home Page */}
            <Route path="/" element={
              <>
                <HeroSection/>
                <Navbar/>
                <About/>
                <Contact/>
              </>
            } />

            {/* Projects Page */}
            <Route path="/projects" element={
              <>
                <Projects/>
                <Navbar/>
                <ProjContent/>
                <Contact/>
              </>
            } />

          </Routes>
        </WireframeBase>
      </div>
    </Router>
    
    
  );
}

export default App
