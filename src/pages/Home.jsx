import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Theme from "../components/Theme";
import '../index.css';
function Home() {
  return (
    <>
    <div className="min-h-screen max-w-full bg-background text-foreground overflow-x-hidden">
     {/* Theme Toggle */}
      <Theme/>

     {/* Background effects */}
     <Background/>

     {/* navbar */}
     <Navbar/>

     {/* Home Section */}

     {/* About Section */}

      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Section */} 

      {/* Footer Section */}
      </div>
    </>
  );
} 

export default Home