import Background from "../components/Background";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import '../index.css';
function Home() {
  return (
    <>
    <div className="min-h-screen max-w-full bg-background text-foreground overflow-x-hidden">
     {/* Background effects */}
     <Background/>

     {/* navbar */}
     <Navbar/>

     {/* Hero Section */}
     <HeroSection/>

     {/* About Section */}
     <About/>
     
      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Section */} 

      {/* Footer Section */}
      </div>
    </>
  );
} 

export default Home