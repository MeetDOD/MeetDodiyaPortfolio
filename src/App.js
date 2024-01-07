import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
