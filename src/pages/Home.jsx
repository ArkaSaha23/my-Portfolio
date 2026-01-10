import Background from "../components/Background";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import '../index.css';
function Home() {
  return (
    <>
    <div className="min-h-screen max-w-full bg-background text-foreground overflow-x-hidden">
     <Background/>          {/* Background effects */}
     <Navbar/>
     <HeroSection/>
     <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </>
  );
} 

export default Home