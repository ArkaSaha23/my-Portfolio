import Background from "../components/Background";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/footer";
import '../index.css';
function Home() {
  return (
    <>
    <div className="min-h-screen max-w-full bg-background text-foreground overflow-x-hidden">
     {/* Background effects */}
     <Background/>
     <Navbar/>
     <HeroSection/>
     <About/>
      <Skills/>
      {/* Projects Section */}
      {/* Contact Section */} 
      <Footer/>
      </div>
    </>
  );
} 

export default Home