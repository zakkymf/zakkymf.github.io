import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import WorkExperience from "./components/Work";
import Project from "./components/Project";

function App() {
  return (
    <div className="flex flex-col background-color text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col p-4 sm:p-6">
        <section
          id="home"
          className="flex flex-col p-6 gap-4 min-h-screen justify-center"
        >
          <Home />
        </section>

        <section
          id="project"
          className="flex flex-col p-6 gap-6 min-h-screen justify-center"
        >
          <Project />
        </section>

        <section
          id="work"
          className="flex flex-col p-6 gap-6 min-h-screen justify-center"
        >
          <WorkExperience />
        </section>

        <section
          id="contact"
          className="flex flex-col p-6 gap-4 min-h-screen justify-center"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
