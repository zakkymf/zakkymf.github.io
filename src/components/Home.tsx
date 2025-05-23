import "../App.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">
        Hi! I'm <span className="text-blue-500">Zakky Muhammad Fajar</span>
      </h1>

      <p className="text-md mt-4 max-w-2xl">
        I'm — a <span className="text-blue-500">Mobile Engineer</span> with over
        5 years of experience building cross-platform apps using React Native. I
        enjoy creating fast, reliable, and maintainable mobile applications that
        solve real problems.
      </p>

      <p className="text-md mt-2 max-w-2xl">
        I'm also passionate about frontend development on the web, and love
        exploring new ways to craft smooth, responsive user interfaces. I'm a
        strong believer in clean code, great teamwork, and continuous learning.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Skills</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">React Native</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">React JS</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">Typescript</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">Javascript</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">HTML</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">CSS</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">Tailwind CSS</p>
          </div>
          <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
            <p className="text-sm text-white">Git</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Socials</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          <a
            href="https://github.com/zakkymf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
              <img src={github} alt="Github" className="w-4 h-4" />
              <p className="text-sm text-white">Github</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/zakkymf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
              <p className="text-sm text-white">LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
