import { useState } from "react";
import { Menu,X } from "lucide-react";
import { cn } from "../lib/utils";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full shadow-sm bg-transparent top-3 z-50 backdrop-blur-none">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-bold flex hover: items-center"href="#Home">
            <span className="relative flex items-center text-lg md:text-2xl transition-all duration-300">
              <span className="text-primary text-glow mr-2">ARKA SAHA</span>
              Portfolio
            </span>
          </a>
          {/* desltop site*/}
          <div className="flex items-center">
            <div className=" hidden md:flex space-x-8 text-foreground">
              <a href="#home" className="navbar-btn">Home</a>
              <a href="#about" className="navbar-btn">About</a>
              <a href="#skills" className="navbar-btn">Skills</a>
              <a href="#projects" className="navbar-btn">Projects</a>
              <a href="#contact" className="navbar-btn">Contact</a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={ () => setMenuOpen((prev) => !prev) }>
              {menuOpen ? <X size={24} />: <Menu size={24} />}
          </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",    
            menuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")}>
              <div className="flex flex-col space-y-8 text-xl"
              onClick={()=>setMenuOpen(false)}>
                <a href="#home" className=" mobile-navbar-btn">Home</a>
                <a href="#about" className=" mobile-navbar-btn">About</a> 
                <a href="#skills" className=" mobile-navbar-btn">Skills</a>
                <a href="#projects" className=" mobile-navbar-btn">Projects</a>
                <a href="#contact" className=" mobile-navbar-btn">Contact</a>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}
export default Navbar;