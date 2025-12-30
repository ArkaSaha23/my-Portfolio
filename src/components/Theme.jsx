import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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

  return <button onClick={toggleTheme}>
    {isDark ? 
    (<Sun className="h-10 w-10 text-yellow-300"/>) 
    : 
    (<Moon className="h-10 w-10 text-blue-800"/>)
    }
  </button>
}
export default Theme;