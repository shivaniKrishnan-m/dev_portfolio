"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Phone, MapPin, Award, Code, Database, Cloud, Users, ChevronRight, Linkedin } from "lucide-react";
import { personalInfo, aboutInfo, skills, experience, projects, certifications, navigation, socialLinks, contactInfo } from "../data/portfolio";


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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (iconName) => {
    const icons = { Github, Mail, Phone, MapPin, Linkedin };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6 text-[#64ffda]" /> : null;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#233554]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-[#64ffda] text-xl font-bold">{personalInfo.initials}</div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item, index) => (
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
                onClick={() => window.open(personalInfo.resume, "_blank")}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#64ffda] text-lg mb-4">Hi, my name is</div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            {personalInfo.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
            {personalInfo.tagline}
          </h2>
          <p className="text-lg max-w-2xl mb-12 leading-relaxed">
            {personalInfo.description}
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
              {aboutInfo.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-2 text-sm">
                {aboutInfo.technologies.map((tech) => (
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
                src={personalInfo.profileImage}
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
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8">Certifications</h3>
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
            <h2 className="text-3xl font-bold text-[#ccd6f6]">Where I've Worked</h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          {experience.map((job, index) => (
            <div key={index} className="mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ccd6f6]">
                  {job.role} <span className="text-[#64ffda]">@ {job.company}</span>
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
            <h2 className="text-3xl font-bold text-[#ccd6f6]">Some Things I've Built</h2>
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
                  <h3 className="text-2xl font-bold text-[#ccd6f6]">{project.title}</h3>

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
                      <span key={tech} className="text-sm text-[#8892b0] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] text-xl mr-4">04.</span>
            <h2 className="text-3xl font-bold text-[#ccd6f6]">Skills & Technologies</h2>
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
            <h2 className="text-3xl font-bold text-[#ccd6f6]">{contactInfo.title}</h2>
            <div className="flex-1 h-px bg-[#233554] ml-8"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-12 leading-relaxed">{contactInfo.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.details.map((detail, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="w-12 h-12 bg-[#112240] rounded-lg flex items-center justify-center border border-[#233554]">
                      {getIcon(detail.icon)}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#ccd6f6]">{detail.label}</p>
                      {detail.link ? (
                        <a href={detail.link} className="text-[#64ffda] hover:underline">
                          {detail.value}
                        </a>
                      ) : (
                        <p>{detail.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-8 py-4 text-lg rounded transition-colors"
              onClick={() => window.open(`mailto:${personalInfo.email}`, "_blank")}
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
            Built by <span className="text-[#64ffda]">{personalInfo.name}</span>
          </p>
          <p className="text-xs mt-2 text-[#8892b0]">
            Designed with inspiration from the developer community
          </p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#112240] border-t border-[#233554] p-4 z-50">
        <div className="flex justify-around">
          {navigation.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`capitalize text-xs ${
                activeSection === section.id ? "text-[#64ffda]" : "text-[#8892b0]"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Side Elements */}
      <div className="hidden lg:block fixed left-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              {getIcon(link.icon)}
            </a>
          ))}
          <div className="w-px h-24 bg-[#8892b0]"></div>
        </div>
      </div>

      <div className="hidden lg:block fixed right-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors writing-mode-vertical text-sm tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            {personalInfo.email}
          </a>
          <div className="w-px h-24 bg-[#8892b0]"></div>
        </div>
      </div>
    </div>
  );
}