"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Code,
  Database,
  Cloud,
  Users,
  ChevronRight,
  Linkedin,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for scroll spy
    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    frontend: [
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "Next.js",
      "Redux",
      "Material-UI",
    ],
    backend: ["Node.js", "Python", "REST API"],
    cloud: ["AWS S3", "CloudFront", "CloudFormation", "CodePipeline", "Lambda"],
    tools: ["Git", "Jira", "ClickUp", "Agile/Scrum"],
  };

  const projects = [
    {
      title: "Plant 365 Management System",
      period: "Jun 2023 – Present",
      description:
        "A comprehensive web application for Ready-Mix Concrete (RMC) plant operations featuring real-time data visualization, operational dashboards, and cross-device compatibility.",
      highlights: [
        "Built responsive web application using React.js, Redux, and Material UI",
        "Integrated RESTful APIs for real-time data fetching and operational visibility",
        "Ensured cross-device compatibility and mobile responsiveness",
        "Improved operational efficiency through intuitive dashboard design",
      ],
      tech: ["React.js", "Redux", "Material UI", "CSS", "REST API"],
      github: "#",
      live: "#",
    },
    {
      title: "Cyber Honey Guide (CHY)",
      period: "Feb 2024 – Aug 2024",
      description:
        "A full-featured recruitment platform connecting job seekers with employers through dynamic listings, real-time messaging, and comprehensive candidate management.",
      highlights: [
        "Designed and implemented recruitment platform with React.js and Redux",
        "Enabled dynamic job listings and candidate-employer messaging system",
        "Integrated Firebase for authentication and GetStream for real-time communication",
        "Collaborated in Agile environment delivering scalable features",
      ],
      tech: ["React.js", "Redux", "Material UI", "Firebase", "GetStream"],
      github: "#",
      live: "#",
    },
    {
      title: "Droplet MPS - IoT Solution",
      period: "May 2024 – Jun 2025",
      description:
        "Cross-platform iOS application for IoT device control via Bluetooth and Wi-Fi, featuring cloud-based management and automated deployment workflows.",
      highlights: [
        "Developed React Native app for IoT device control via Bluetooth and Wi-Fi",
        "Integrated AWS IoT Core for secure device communication",
        "Automated device configuration using Python scripts and Bash",
        "Reduced manual setup time and increased deployment efficiency",
      ],
      tech: ["React Native", "Python", "AWS IoT Core", "Bluetooth", "Wi-Fi"],
      github: "#",
      live: "#",
    },
  ];

  const experience = [
    {
      company: "Meyi Cloud Solutions",
      location: "Pondicherry, India",
      role: "Frontend Developer",
      period: "Aug 2023 – Present",
      achievements: [
        "Developed and delivered responsive, scalable web applications using React.js and Redux, consistently meeting project specifications and timelines",
        "Managed project schedules and frontend tasks, achieving 100% on-time delivery for multiple client-facing platforms with 1000+ monthly active users",
        "Collaborated with backend, UI/UX, and product teams for seamless user experiences",
        "Liaised with clients to gather requirements and convert them into actionable tasks",
        "Deployed applications using AWS serverless stack, improving scalability and performance",
      ],
    },
  ];

  const certifications = [
    {
      title: "AWS Partner Technical Accredited",
      description:
        "Validated AWS cloud services, architecture, and security knowledge",
      date: "May 2025",
    },
    {
      title: "Udemy Web Development Bootcamp",
      description:
        "Covered HTML, CSS, JavaScript, Node.js, React, and best practices",
      date: "June 2024",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#233554]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-[#64ffda] text-xl font-bold">PG</div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm hover:text-[#64ffda] transition-colors ${
                    activeSection === item.id ? "text-[#64ffda]" : ""
                  }`}
                >
                  <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                  {item.name}
                </button>
              ))}
              <button
                className="border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-4 py-2 rounded text-sm transition-colors"
                onClick={() => window.open("/resume-2025.pdf", "_blank")}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-[#64ffda] text-lg mb-4">Hi, my name is</div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Pugazhendhi GM.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg max-w-2xl mb-12 leading-relaxed">
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products at{" "}
            <span className="text-[#64ffda]">Meyi Cloud Solutions</span>.
          </p>
          <button
            className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-8 py-4 text-lg rounded transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            Check out my work!
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">01.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">About Me</h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                Hello! I'm Pugazhendhi, a software engineer passionate about
                creating things that live on the internet. My interest in web
                development started back in 2021 when I decided to try building
                custom web applications — turns out hacking together HTML & CSS
                taught me a lot about React and JavaScript!
              </p>

              <p className="text-lg leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at
                a growing startup, building products for clients across various
                industries. My main focus these days is building accessible,
                inclusive products and digital experiences using modern
                technologies.
              </p>

              <p className="text-lg leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "React",
                  "React Native",
                  "Node.js",
                  "Python",
                ].map((tech) => (
                  <div key={tech} className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#64ffda] mr-2" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative group w-64 h-64"
              style={{
                "--green": "#64ffda",
                "--green-tint": "rgba(100, 255, 218, 0.2)",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg border-2"
                style={{
                  borderColor: "var(--green)",
                  backgroundColor: "#0a192f",
                  transform: "translate(1rem, 1rem)",
                  transition: "transform 0.3s ease",
                }}
              ></div>
              <img
                src="/image.jpeg"
                alt="Profile"
                className="w-64 h-64 object-cover rounded-lg relative z-10"
              />
              <div
                className="absolute inset-0 rounded-lg z-20 transition-opacity duration-500 group-hover:opacity-0"
                style={{
                  backgroundColor: "var(--green-tint)",
                }}
              ></div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#112240] border border-[#233554] hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Award className="w-6 h-6 text-[#64ffda] flex-shrink-0" />
                    <span className="text-sm text-[#64ffda]">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#ccd6f6] mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">02.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">
              Where I've Worked
            </h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          {experience.map((job, index) => (
            <div key={index} className="mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ccd6f6]">
                  {job.role}{" "}
                  <span className="text-[#64ffda]">@ {job.company}</span>
                </h3>
                <p className="text-sm text-[#8892b0] mb-1">{job.period}</p>
                <p className="text-sm text-[#8892b0]">{job.location}</p>
              </div>

              <ul className="space-y-4">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-[#64ffda] mt-1 mr-4 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">03.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">
              Some Things I've Built
            </h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="bg-[#64ffda]/10 rounded-lg h-64 flex items-center justify-center border border-[#64ffda]/20">
                      <Code className="w-16 h-16 text-[#64ffda]" />
                    </div>
                    <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  } space-y-4`}
                >
                  <p className="text-[#64ffda] text-sm">Featured Project</p>
                  <h3 className="text-2xl font-bold text-[#ccd6f6]">
                    {project.title}
                  </h3>

                  <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
                    <p className="leading-relaxed">{project.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ChevronRight className="w-3 h-3 text-[#64ffda] mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-[#8892b0] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className={`flex space-x-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <button className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">04.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">
              Skills & Technologies
            </h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#112240] border border-[#233554] hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="flex items-center text-[#ccd6f6] text-lg font-semibold mb-4">
                  <Code className="w-5 h-5 mr-2 text-[#64ffda]" />
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#112240] border border-[#233554] hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="flex items-center text-[#ccd6f6] text-lg font-semibold mb-4">
                  <Database className="w-5 h-5 mr-2 text-[#64ffda]" />
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#112240] border border-[#233554] hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="flex items-center text-[#ccd6f6] text-lg font-semibold mb-4">
                  <Cloud className="w-5 h-5 mr-2 text-[#64ffda]" />
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[-[#64ffda]/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#112240] border border-[#233554] hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="flex items-center text-[#ccd6f6] text-lg font-semibold mb-4">
                  <Users className="w-5 h-5 mr-2 text-[#64ffda]" />
                  Tools & Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">05.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">Get In Touch</h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-12 leading-relaxed">
              Although I'm not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#112240] rounded-lg flex items-center justify-center border border-[#233554]">
                    <Mail className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#ccd6f6]">Email</p>
                    <a
                      href="mailto:pugazhendhigm11@gmail.com"
                      className="text-[#64ffda] hover:underline"
                    >
                      pugazhendhigm11@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#112240] rounded-lg flex items-center justify-center border border-[#233554]">
                    <Phone className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#ccd6f6]">Phone</p>
                    <p>+91-6369323541</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#112240] rounded-lg flex items-center justify-center border border-[#233554]">
                    <Linkedin className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#ccd6f6]">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/pugazhendhi-murugan-50b66b257/"
                      className="text-[#64ffda] hover:underline"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#112240] rounded-lg flex items-center justify-center border border-[#233554]">
                    <MapPin className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#ccd6f6]">Location</p>
                    <p>Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-8 py-4 text-lg rounded transition-colors"
              onClick={() =>
                window.open("mailto:pugazhendhigm11@gmail.com", "_blank")
              }
            >
              Say Hello
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#233554]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">
            Built by <span className="text-[#64ffda]">Pugazhendhi GM</span>
          </p>
          <p className="text-xs mt-2 text-[#8892b0]">
            Designed with inspiration from the developer community
          </p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#112240] border-t border-[#233554] p-4 z-50">
        <div className="flex justify-around">
          {[
            { name: "about", label: "About" },
            { name: "experience", label: "Experience" },
            { name: "projects", label: "Projects" },
            { name: "skills", label: "Skills" },
            { name: "contact", label: "Contact" },
          ].map((section) => (
            <button
              key={section.name}
              onClick={() => scrollToSection(section.name)}
              className={`capitalize text-xs ${
                activeSection === section.name
                  ? "text-[#64ffda]"
                  : "text-[#8892b0]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Side Elements */}
      <div className="hidden lg:block fixed left-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          <a
            // href="https://github.com"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/pugazhendhi-murugan-50b66b257/"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:pugazhendhigm11@gmail.com"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-px h-24 bg-[#8892b0]"></div>
        </div>
      </div>

      <div className="hidden lg:block fixed right-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:pugazhendhigm11@gmail.com"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors writing-mode-vertical text-sm tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            pugazhendhigm11@gmail.com
          </a>
          <div className="w-px h-24 bg-[#8892b0]"></div>
        </div>
      </div>
    </div>
  );
}
