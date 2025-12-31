import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
function Theme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
      document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }

  return( 
  <button 
    onClick={toggleTheme}
    className="fixed max-sm:hidden top-5 right-5 z-50 p-2 ounded-full transition-colors duration-300 focus:outline-hidden">
    {isDark ? 
    (<Sun className="h-10 w-10 text-yellow-300"/>) 
    : 
    (<Moon className="h-10 w-10 text-blue-800"/>)
    }
  </button>)
}
export default Theme;