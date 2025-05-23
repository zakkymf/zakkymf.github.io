import { motion } from "motion/react";
import "../App.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { skills } from "../constants/skills";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function Home() {
  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.h1 className="text-4xl font-bold" variants={fadeInUp} custom={0}>
        Hi! I'm <span className="text-blue-500">Zakky Muhammad Fajar</span>
      </motion.h1>

      <motion.p
        className="text-md mt-4 max-w-2xl"
        variants={fadeInUp}
        custom={1}
      >
        I'm — a <span className="text-blue-500">Mobile Engineer</span> with over
        5 years of experience building cross-platform apps using React Native. I
        enjoy creating fast, reliable, and maintainable mobile applications that
        solve real problems.
      </motion.p>

      <motion.p
        className="text-md mt-2 max-w-2xl"
        variants={fadeInUp}
        custom={2}
      >
        I'm also passionate about frontend development on the web, and love
        exploring new ways to craft smooth, responsive user interfaces. I'm a
        strong believer in clean code, great teamwork, and continuous learning.
      </motion.p>

      <motion.div className="mt-8" variants={fadeInUp} custom={3}>
        <h3 className="text-xl font-bold">Skills</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10"
              variants={fadeInUp}
              custom={4 + index * 0.1}
            >
              <p className="text-sm text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-8" variants={fadeInUp} custom={4}>
        <h3 className="text-xl font-bold">Socials</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            {
              name: "Github",
              icon: github,
              link: "https://github.com/zakkymf/",
            },
            {
              name: "LinkedIn",
              icon: linkedin,
              link: "https://www.linkedin.com/in/zakkymf/",
            },
          ].map((social, i) => (
            <motion.a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              custom={5 + i * 0.1}
            >
              <div className="flex items-center gap-2 card-background px-2 py-1 rounded-md border border-white/10">
                <img src={social.icon} alt={social.name} className="w-4 h-4" />
                <p className="text-sm text-white">{social.name}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
