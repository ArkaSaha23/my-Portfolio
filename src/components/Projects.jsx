function Project() {
  const projects=[
    {
      title:"Currency Converter",
      image:"./currency.png",
      alt:"currency",
      description:"A simple Currency Convertor built using React and TailwindCss. It fetches real-time exchange rates from an external API to provide accurate conversions between different currencies.",
      codeLink:"https://github.com/ArkaSaha23/Currency-Converter",
      liveLink:"https://currencyconverter-react-arka.netlify.app/"
    },
    {
      title:"Tic Tac Toe",
      image:"./tictactoe.png",
      alt:"tictactoe",
      description:"A famous game built using HTML,CSS and JavaScript. It allows two players to take turns marking spaces in a 3X3 grid, aiming to get three of their marks in a horizontal, vertical, or diagonal row to win the game.",
      codeLink:"https://github.com/ArkaSaha23/Tic-Tac-Toe",
      liveLink:"https://tictactoe-project-arka.netlify.app/"
    }
  ];  


  return (
  <div id="projects" className="mt-10 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
    <div className="fullbox mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono font-bold text-center text-blue-500 text-glow">
        Projects
      </h2>
    </div>
    <div className="mt-6 grid grid-cols-1 md-:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

      {projects.map((project, index) => (
        <div key={index} 
        className="project-card">
          <div className="m-2 h-10 max-w-full mx-auto flex justify-center font-mono">
            {project.title}
          </div>
          <div className="px-5">
          <img src={project.image} alt={project.alt}/>
        </div>
        <div className="my-3 text-center font-mono text-blue-100">
          {project.description} 
        </div>
        <div className="flex justify-evenly mt-3 text-blue-500 font-mono">
          <div className="btn-primary">
            <a href={project.codeLink}>View Code</a>
          </div>
          <div className="btn-primary">
            <a href={project.liveLink}>Live Demo</a>
          </div>
        </div>
      </div>
      ))}

    </div>
  </div>
  );
}
export default Project;