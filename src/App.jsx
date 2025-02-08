import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Skill from "./sections/Skill"

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 to-blue-800 text-slate-200">
      <header className=" z-50 sticky top-0 backdrop-blur-lg border-b border-slate-600">
        <nav className="max-w-screen-lg text-2xl m-auto h-16 flex items-center justify-end">
              {/* <p className=" text-3xl font-semibold">Rayii</p> */}
          <ul className="flex text-lg">
            <li> <a href="#" className=" rounded hover:text-orange-500 px-2" >Home</a></li>
            <li> <a href="#about" className=" rounded hover:text-orange-500 px-2">About Me</a></li>
            <li> <a href="#Skill" className=" rounded hover:text-orange-500 px-2">Skill</a></li>
            <li> <a href="#Project" className=" rounded hover:text-orange-500 px-2">Project</a></li>
            <li> <a href="#Contact" className=" rounded hover:text-orange-500 px-2">Contact</a></li>
            
          </ul>
        </nav>
      </header>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <div className="bg-blue-930 py-3 text-center">
   <p>© 2025 Rayii</p>
    </div>
    </div>
  )
}

export default App
