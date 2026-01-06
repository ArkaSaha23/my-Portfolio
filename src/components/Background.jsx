import { useEffect, useState } from "react";

//each stars,starfall will be an object with id,x,y,size,opacity,animationDuration
//each meteor will be an object with id,x,y,size,animationDuration
function Background() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [starfall, setStarFall] = useState([]);

  useEffect(() => {
      document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateStarfall();

    const handleResize = () => {
      generateStars();
      generateMeteors();
      generateStarfall();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 //star
  const generateStars = () => {
    const starNumbers = Math.floor(
      (window.innerWidth * window.innerHeight) / 9000
    );
    const newStars = [];
    for (let i = 0; i < starNumbers; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random(),
        opacity: Math.random(),
        animationDuration: Math.random() * 5 + 2,
      });
    }
    setStars(newStars);
  };

  //meteor
  const generateMeteors = () => {
    const meteorNumbers = 8;
    const newMeteors = [];
    for (let i = 0; i < meteorNumbers; i++) {
      newMeteors.push({
        id: i,
        x: Math.random() * 90,
        y: Math.random() * 90,
        size: Math.random() * 2 + 1,
        animationDuration: Math.random() * 2 + 10,
      });
    }
    setMeteors(newMeteors);
  };
  
 //starfall
 const generateStarfall = () => {
    const starfallNumbers = 80;
    const newStarfall = [];
    for (let i = 0; i < starfallNumbers; i++) {
      newStarfall.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        moveX: (Math.random() - 0.5) * 1000, 
        moveY: (Math.random() - 0.5) * 1000,
        animationDuration: Math.random() * 2 + 2
        
        ,
      });
    }
    setStarFall(newStarfall)
 }

  //for each star,meteor,starfall set its position(x,y),size,opacity,animation duration in style
  return (
    <div className="fixed w-full h-full overflow-hidden pointer-events-none z-0">

      {/* star */}
      {stars.map((eachStar) => (
        <div
          key={eachStar.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${eachStar.x}%`,
            top: `${eachStar.y}%`,
            width: `${eachStar.size}px`,
            height: `${eachStar.size}px`,
            opacity: `${eachStar.opacity}`,
            animationDuration: `${eachStar.animationDuration}s`,
          }}
        />
      ))}
       
      {/* starfall */}
      {starfall.map((EachstarFall) => (
        <div
          key={EachstarFall.id}
          className="animate-star-drift starfall"
          style={{
            left: `${EachstarFall.x}%`,
            top: `${EachstarFall.y}%`,
            width: `${EachstarFall.size}px`,
            height: `${EachstarFall.size }px`,
            opacity: `${EachstarFall.opacity}`,
            "--move-x": `${EachstarFall.moveX}px`,
            "--move-y": `${EachstarFall.moveY}px`,
            animationDuration: `${EachstarFall.animationDuration}s`,
          }}
        />
      ))}

      {/* meteor */}
      {meteors.map((eachMeteor) => (
        <div
          key={eachMeteor.id}
          className="meteor animate-meteor "
          style={{
            left: `${eachMeteor.x}%`,
            top: `${eachMeteor.y}%`,
            width: `${eachMeteor.size * 60}px`,
            height: `${eachMeteor.size*1.5}px`,
            animationDuration: `${eachMeteor.animationDuration}s`,
          }}
          />
      ))}
    </div>
  );
}
export default Background;
