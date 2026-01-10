import { Monitor, Server, GitGraph } from 'lucide-react';

function Skills() {
  return (
    <div id="skills" className="mt-10 w-full min-h-screen flex flex-col justify-center items-center  text-white p-6">
      <div className="fullbox mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-center">
          <span className="text-blue-500 text-glow ">Skills</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto font-mono text-sm md:text-base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <div className="min-h-[300px] md:min-h-[450px] w-full bg-primary/15 border border-border rounded-md shadow-sm transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex wrap justify-center">
              <GitGraph className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-lg text-blue-100">Programming Languages</h2>
            </div>
            <div className='mx-6 mt-4 h-10/12 w-11/12 flex flex-wrap'>
              <img 
               src="./java.jpeg" 
               alt="js"
               className="m-1 w-25 h-25 rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./python.jpeg" 
               alt="js"
               className="m-1 w-45 h-15 rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./c.jpeg" 
               alt="tailwind"
               className="m-1 w-20 h-20 rounded border-primary shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          <div className="min-h-[300px] md:min-h-[450px] w-full bg-primary/15 border border-border rounded-md shadow-sm transition-all duration-300">
            <div className="flex wrap justify-center">
              <Monitor className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-xl text-blue-100">Frontend Development</h2>
            </div >
              <div className='mx-6 my-1 h-10/12 w-11/12 flex flex-wrap'>
              <img 
               src="./Html.jpeg" 
               alt="Html"
               className="m-3 w-25 h-25  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./CSS.jpeg" 
               alt="CSS"
               className="m-3 w-25 h-25  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./JS.jpeg" 
               alt="js"
               className="m-3 w-25 h-25  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./react.jpeg" 
               alt="js"
               className="m-3 w-50 h-20  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./tailwind.jpeg" 
               alt="tailwind"
               className="m-3 w-40 h-15  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              </div>
          </div>
          <div className="min-h-[300px] md:min-h-[450px] w-full bg-primary/15 border border-border rounded-md shadow-sm transition-all duration-300">
            <div className="flex wrap justify-center">
              <Server className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-xl text-blue-100">Backtend Development</h2>
            </div>
            <div className='mx-6 my-1 h-2/5 w-11/12 flex flex-wrap'>
             <img 
               src="./nodejs.jpeg" 
               alt="nodejs"
               className="m-3 w-30 h-30  object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
              <img 
               src="./expressjs.jpeg" 
               alt="expressjs"
               className="m-3 w-30 h-30 rounded-full object-cover rounded border-primary shadow-lg transition-all duration-300"
              />
            </div>
            <div className="flex wrap justify-center">
              <Server className="mt-3 mx-3 h-6 w-6 text-primary"/>
              <h2 className="mt-3 text-xl text-blue-100">Tools and platforms</h2>
            </div>
            <div className='mx-6 my-1 h-10/12 w-11/12 flex flex-wrap'>
             <img 
               src="./gitgithub.jpeg" 
               alt="Git-Github"
               className="m-3 w-20 h-20 shadow-lg transition-all duration-300"
              />
              <img 
               src="./vscode.jpeg" 
               alt="vscode"
               className="m-3 w-45 h-20 shadow-lg transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;