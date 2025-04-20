import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Server } from "lucide-react";
import logo from "./assets/logo.jpeg";
import profileImg from "./assets/IMG_0084.jpeg";

function App() {
  return (
    <div className="font-sans text-white bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-gradient-to-r from-blue-900 via-black to-purple-900 opacity-10" />
        <div className="absolute bottom-10 left-10 animate-float text-blue-500 text-opacity-30">
          <Server size={100} />
        </div>
        <div className="absolute top-20 right-20 animate-spin-slow text-purple-500 text-opacity-30">
          <Server size={80} />
        </div>
        <code className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-10 text-green-400 text-xs whitespace-nowrap animate-float">
          npm run dev — Connected to PostgreSQL — Server running on port 3000...
        </code>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-black bg-opacity-90 shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold flex items-center w-[150px] gap-3">
          <img style={{ height: "30px", width: "30px" }} src={logo} alt="raj" />
          Raj Nanjan
        </h1>
        <nav className="space-x-4 hidden md:block ml-0.5">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-2">Hi, I’m Raj Nanjan</h2>
        <p className="text-lg max-w-xl mb-4">
          Node.js Developer with a background in insurance and a passion for
          building scalable backend systems.
        </p>
        <div className="space-x-4">
          <a href="/Raj_Nanjan_Resume.pdf" download>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              {" "}
              <a
                href="https://drive.google.com/file/d/1iiRqCvpl8wATVn9yEYwfdYcDZF1gl71m/view?usp=drive_link"
                class="link"
                target="_blank"
              >
                <i class="fas fa-file"></i> Resume
              </a>
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-900"
          >
            {" "}
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-16 px-6 bg-black relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-md text-gray-300 mb-4">
      I’m <span className="font-semibold text-white">Raj Nanjan</span>, a passionate Node.js Developer with 2.5 years of hands-on experience. 
      My journey started as a Relationship Manager in insurance sales, which shaped my communication and analytical skills. 
      Later, I transitioned into backend development, building scalable systems, RESTful APIs, and robust databases using PostgreSQL and MySQL.
    </p>
    <div className="text-gray-400 text-sm space-y-1">
      <p><span className="text-white font-medium">📍 Location:</span> Bengaluru,Karnataka, India</p>
      <p><span className="text-white font-medium">📞 Phone:</span> +91 8150073380</p>
      <p><span className="text-white font-medium">📧 Email:</span> work.rajnanjan@gmail.com</p>
    </div>
        </div>
      </section> */}

      {/* <section className="w-full bg-gradient-to-r from-[#090e17] to-[#0f0b14] py-16 px-6 sm:px-12 md:px-20 text-white"> */}
      <section
        id="about"
        className="w-full bg-gradient-to-r from-[#090e17] to-[#0f0b14] py-16 px-6 relative z-10 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Profile Section */}
          <div className=" max-w-4xl mx-auto flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <img
              src={profileImg}
              alt="Raj Nanjan"
              className="w-50 h-50 rounded-full border-4 border-blue-500  object-cover "
            />
            <div>
              <h2 className="text-2xl font-bold">Raj Nanjan</h2>
              <p className="text-blue-400 font-medium">Backend Developer</p>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>📍 Bengaluru, India</p>
              <p>📞 +91 8150073380</p>
              <p>
                📧{" "}
                <a
                  href="mailto:work.rajnanjan@gmail.com"
                  className="hover:text-blue-300"
                >
                  work.rajnanjan@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Description Section */}
          <div className=" max-w-4xl md:col-span-2 text-gray-300 leading-relaxed text-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            </div>
            <p>
              I'm <span className="text-white font-semibold">Raj Nanjan</span>,
              a passionate Backend Developer with 2+ years of hands-on
              experience crafting performant and scalable APIs. My career began
              in the insurance industry as a Relationship Manager, where I honed
              my communication and problem-solving skills.
            </p>
            <p className="mt-4">
              Since 2022, I've transitioned into backend development, focusing
              on modular REST APIs and scalable systems using
              <span className="text-blue-400 font-medium"> Node.js</span>,
              <span className="text-blue-400 font-medium"> Express.js</span>,
              <span className="text-blue-400 font-medium"> PostgreSQL</span>,
              <span className="text-blue-400 font-medium"> MySQL</span>, and
              <span className="text-blue-400 font-medium"> Knex.js</span>. I'm
              passionate about solving real-world problems through clean
              architecture and code.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-16 px-6 relative z-10 bg-black text-xl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold mb-12 text-center">Timeline</h3>
          <div className="relative border-l-2 border-blue-600 pl-8 space-y-12 ">
            {[
              {
                year: "2019",
                title: "Started in the Insurance Industry",
                description:
                  "Worked as a Relationship Manager, developing strong client relationships and gaining deep insights into business workflows.",
              },
              {
                year: "2022",
                title: "Backend Developer @ Knexta Technologies",
                description:
                  "Focused on building scalable APIs and backend systems using Node.js, PostgreSQL, and Knex.js.",
              },
              {
                year: "2024",
                title: "Backend Developer @ Knexta Technologies",
                description:
                  "Designed and optimized backend systems with PostgreSQL, MySQL, and Knex.js, emphasizing modular APIs, performance, and scalability.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-md animate-pulse" />
                {/* Content */}
                <div>
                  <div className="text-blue-400 font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="text-white font-medium">{item.title}</div>
                  <p className="text-gray-300 mt-1 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <Card key={i} className="bg-gray-900 border border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Mini Insurance CRM
                  </h4>
                  <p className="mb-2 text-gray-300">
                    Tech Stack: Node.js, Express.js, PostgreSQL
                  </p>
                  <p className="mb-4 text-gray-300">
                    Features: Lead management, policy tracking, user roles
                  </p>
                  <div className="space-x-4">
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-900"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-900"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-black relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { skill: "Node.js", icon: "logos:nodejs-icon" },
              { skill: "Express.js", icon: "simple-icons:express" },
              { skill: "PostgreSQL", icon: "devicon:postgresql" },
              { skill: "MySQL", icon: "devicon:mysql" },
              { skill: "JavaScript", icon: "devicon:javascript" },
              { skill: "HTML", icon: "vscode-icons:file-type-html" },
              { skill: "CSS", icon: "devicon:css3" },
              { skill: "Python", icon: "material-icon-theme:python" },
              { skill: "Knex.js", icon: "logos:knex" },
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-xl shadow text-sm text-white border border-gray-600"
              >
                <span
                  class="iconify"
                  data-icon={item.icon}
                  data-inline="false"
                  data-width="60px"
                  data-height="60px"
                ></span>
                {item.skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
          <div className="flex justify-center gap-6 text-blue-400">
            <a href="mailto:work.rajnanjan@gmail.com" aria-label="Email">
              <Mail />
            </a>
            <a
              href="https://github.com/rajnanjan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-nanjan-9b3452229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 bg-black border-t border-gray-700 text-gray-400 relative z-10">
        © 2025 Raj Nanjan. Built with ❤️
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
