import { Code, School, User } from "lucide-react";
function About() {

  return(
  <div id="about" className="mt-10 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
    <div className="fullbox mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono font-bold text-center">
        <span className="text-blue-500">About </span>
        <span className="text-foreground">Me</span>
      </h2>
    </div>
    
    
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="mt-4 space-y-4 text-center font-mono text-sm md:text-lg transition-all duration-300">
        <p>
          I'm passionate about crafting dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. I thrive in collaborative environments and am always eager to learn new technologies and best practices.
        </p>
        <p>
          When I'm not coding, I enjoy exploring the latest tech trends, traveling to different places, watching anime, and working on handicrafts.
        </p>
        <p>
          Let's connect and create something amazing together.
        </p>
          <a href="./https://docs.google.com/document/d/1yq7o-gUwwJ_B68jEFuejjmM69hqh3H0CNuVPVkhI_HY/edit?tab=t.0" download className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 font-mono">
            Download Resume
          </a>  
          <a href="#contact" className="mt-4 ml-4 inline-block bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-mono">
          Contact Me
          </a>  
        <div/>
      </div>
      <div className="space-y-4 text-center font-mono text-sm md:text-base transition-all duration-300">
        <div className="p-3 grid grid-rows-3 h-130 gap-10 md:gap-5">
          {/* div 1 */}
          <div className="max-w-full h-40 md:h-43 bg-primary/15 border-1 rounded-md">
            <div className="flex wrap text-center">
              <School className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-blue-300">Education</h2>
            </div>
            <p className="px-3">
              I'm a Computer Science Engineering student at Future Institute of Engineering and Management,currently honing my knowledge in different programming languages and DSA.
            </p>
          </div>
           {/* div 2 */}
          <div className="mt-3 max-w-full h-35 md:h-35 bg-primary/15 border-1 rounded-md">
            <div className="flex wrap text-center">
              <Code className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-blue-300">Web Development</h2>
            </div>
            <h2 className="px-3">
              Creating Responsive web applications using HTML5, CSS3, Javascript, ReactJs, TailwindCSS and other modern frameworks.
            </h2>
          </div>
           {/* div 3 */}
          <div className="max-w-full h-30 md:h-33 bg-primary/15 border-1 rounded-md">
            <div className="flex wrap text-center">
              <User className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-blue-300">UI/UX Design</h2>
            </div>
            <h2 className="px-3">
              Designing intuitive user interfaces and seamless user experiences.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
export default About;