import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Project from "./sections/Project"
import Skill from "./sections/Skill"

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 to-blue-800 text-slate-200 ">
      <Navbar />
      <div className="px-4 lg:px-0">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <div className="bg-blue-930 py-3 text-center">
          <p>© 2025 Rayii</p>
        </div>
      </div>
    </div>
  )
}

export default App
