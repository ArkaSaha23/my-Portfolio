function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 top-5 md:top-15 transition-all duration-300"
    id="home">
      <h1 className="z-10 text-blue-500 text-4xl md:text-5xl font-bold mb-4">Hola, I'm Arka Saha</h1>
      <h3 className="z-10 text text-2xl">
        | Full-Stack Developer |
      </h3>


      <p className="text-lg md:text-xl mb-8 mt-3 max-w-2xl transition-all duration-300">
        A passionate web developer specializing in creating beautiful and functional web applications. Explore my projects and skills below!
      </p>
      <img 
        src="./hero-image.jpeg" 
        alt="Hero Image"
        className="w-64 h-84 md:w-75 md:h-95 object-cover rounded-4xl border-4 border-primary shadow-lg transition-all duration-300 hover:scale-110"
      />

    </div>
  );
} 
export default HeroSection;