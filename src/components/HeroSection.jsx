function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 top-2 md:top-15 transition-all duration-300"
    id="home">
      <h1 className="mb-4 z-10 text-blue-500 text-4xl md:text-5xl font-mono font-bold opacity-0 animate-fade-in-delay-1">Hola, I'm Arka Saha</h1>
      <h3 className="z-10 text text-2xl opacity-0 text-blue-400 font-mono animate-fade-in-delay-2">
        | Full-Stack Developer |
      </h3>
      <p className="text-lg md:text-xl mb-8 mt-3 max-w-2xl font-mono transition-all duration-300 opacity-0 animate-fade-in-delay-2">
        A passionate web developer specializing in creating beautiful and functional web applications. Explore my projects and skills below!
      </p>
      <img 
        src="./hero-image.jpeg" 
        alt="Hero Image"
        className="mt-5 w-64 h-84 md:w-75 md:h-95 object-cover rounded-4xl border-4 border-primary shadow-lg transition-all duration-300 hover:scale-120 opacity-0 animate-fade-in-delay-4"
      />

    </div>
  );
} 
export default HeroSection;