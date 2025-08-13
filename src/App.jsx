import Navbar from "./Components/Navbar"
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

    useEffect(() => {
    AOS.init({
      once: false,        // animation will happen every time you scroll to the element
      mirror: true,       // animate out while scrolling past
      offset: 100,        // distance before element enters viewport
      duration: 1000,     // default duration
    });
  }, []);

 return (
 
     <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
      
     </>
);
 
}

export default App;
