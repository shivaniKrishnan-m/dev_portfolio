"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Phone, MapPin, Award, Code, Database, Cloud, Users, ChevronRight, Linkedin, Sun, Moon } from "lucide-react";
import { personalInfo, aboutInfo, skills, experience, projects, certifications, navigation, socialLinks, contactInfo } from "../data/portfolio";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

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

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (iconName: string) => {
    const icons = { Github, Mail, Phone, MapPin, Linkedin };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className={`w-6 h-6 ${isDarkMode ? 'text-[#64ffda]' : 'text-[#0066cc]'}`} /> : null;
  };

  // Theme classes
  const themeClasses = {
    bg: isDarkMode ? 'bg-[#0a192f]' : 'bg-[#f8fafc]',
    text: isDarkMode ? 'text-[#8892b0]' : 'text-[#475569]',
    textPrimary: isDarkMode ? 'text-[#ccd6f6]' : 'text-[#1e293b]',
    textSecondary: isDarkMode ? 'text-[#8892b0]' : 'text-[#64748b]',
    accent: isDarkMode ? 'text-[#64ffda]' : 'text-[#0066cc]',
    accentBg: isDarkMode ? 'bg-[#64ffda]' : 'bg-[#0066cc]',
    accentBorder: isDarkMode ? 'border-[#64ffda]' : 'border-[#0066cc]',
    accentHover: isDarkMode ? 'hover:bg-[#64ffda]/10' : 'hover:bg-[#0066cc]/10',
    cardBg: isDarkMode ? 'bg-[#112240]' : 'bg-white',
    cardBorder: isDarkMode ? 'border-[#233554]' : 'border-[#e2e8f0]',
    navBg: isDarkMode ? 'bg-[#0a192f]/90' : 'bg-[#f8fafc]/90',
    navBorder: isDarkMode ? 'border-[#233554]' : 'border-[#e2e8f0]',
    line: isDarkMode ? 'bg-[#233554]' : 'bg-[#e2e8f0]',
    overlay: isDarkMode ? 'bg-[#64ffda]/20' : 'bg-[#0066cc]/20',
    projectBg: isDarkMode ? 'bg-[#64ffda]/10' : 'bg-[#0066cc]/10',
    projectBorder: isDarkMode ? 'border-[#64ffda]/20' : 'border-[#0066cc]/20',
    skillBg: isDarkMode ? 'bg-transparent' : 'bg-[#f1f5f9]',
    skillBorder: isDarkMode ? 'border-[#64ffda]' : 'border-[#0066cc]',
    skillText: isDarkMode ? 'text-[#64ffda]' : 'text-[#0066cc]',
    skillHover: isDarkMode ? 'hover:bg-[#64ffda]/10' : 'hover:bg-[#0066cc]/10',
    footerBorder: isDarkMode ? 'border-[#233554]' : 'border-[#e2e8f0]',
    mobileBg: isDarkMode ? 'bg-[#112240]' : 'bg-white',
    sideText: isDarkMode ? 'text-[#8892b0]' : 'text-[#64748b]',
    sideTextHover: isDarkMode ? 'hover:text-[#64ffda]' : 'hover:text-[#0066cc]',
    sideLine: isDarkMode ? 'bg-[#8892b0]' : 'bg-[#64748b]'
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-mono transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.navBorder}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`${themeClasses.accent} text-xl font-bold`}>{personalInfo.initials}</div>
            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm ${themeClasses.sideTextHover} transition-colors ${
                    activeSection === item.id ? themeClasses.accent : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                className={`border ${themeClasses.accentBorder} ${themeClasses.accent} ${themeClasses.accentHover} px-4 py-2 rounded text-sm transition-colors`}
                onClick={() => window.open(personalInfo.resume, "_blank")}
              >
                Resume
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.cardBg} ${themeClasses.cardBorder} border ${themeClasses.accentHover} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className={`w-5 h-5 ${themeClasses.accent}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${themeClasses.accent}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`${themeClasses.accent} text-lg mb-4 mt-20`}>Hi, my name is</div>
          <h1 className={`text-5xl md:text-7xl font-bold ${themeClasses.textPrimary} mb-4`}>
            {personalInfo.name}.
          </h1>
          <h2 className={`text-4xl md:text-6xl font-bold ${themeClasses.textSecondary} mb-6`}>
            {personalInfo.tagline}
          </h2>
          <p className="text-lg max-w-2xl mb-12 leading-relaxed">
            {personalInfo.description}
          </p>
          <button
            className={`bg-transparent border-2 ${themeClasses.accentBorder} ${themeClasses.accent} ${themeClasses.accentHover} px-8 py-4 text-lg rounded transition-colors`}
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
            <span className={`${themeClasses.accent} text-xl mr-4`}>01.</span>
            <h2 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>About Me</h2>
            <div className={`flex-1 h-px ${themeClasses.line} ml-8`}></div>
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
                    <ChevronRight className={`w-4 h-4 ${themeClasses.accent} mr-2`} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative group w-64 h-64"
              style={{
                "--accent-color": isDarkMode ? "#64ffda" : "#0066cc",
                "--accent-tint": isDarkMode ? "rgba(100, 255, 218, 0.02)" : "rgba(0, 102, 204, 0.02)",
              } as React.CSSProperties}
            >
              <div
                className={`absolute inset-0 rounded-lg border-2 ${themeClasses.bg}`}
                style={{
                  borderColor: "var(--accent-color)",
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
                  backgroundColor: "var(--accent-tint)",
                }}
              ></div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-8`}>Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg p-6 hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Award className={`w-6 h-6 ${themeClasses.accent} flex-shrink-0`} />
                    <span className={`text-sm ${themeClasses.accent}`}>{cert.date}</span>
                  </div>
                  <h4 className={`text-lg font-semibold ${themeClasses.textPrimary} mb-2`}>
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
            <span className={`${themeClasses.accent} text-xl mr-4`}>02.</span>
            <h2 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>Where I've Worked</h2>
            <div className={`flex-1 h-px ${themeClasses.line} ml-8`}></div>
          </div>

          {experience.map((job, index) => (
            <div key={index} className="mb-12">
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold ${themeClasses.textPrimary}`}>
                  {job.role} <span className={themeClasses.accent}>@ {job.company}</span>
                </h3>
                <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>{job.period}</p>
                <p className={`text-sm ${themeClasses.textSecondary}`}>{job.location}</p>
              </div>

              <ul className="space-y-4">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className={`w-4 h-4 ${themeClasses.accent} mt-1 mr-4 flex-shrink-0`} />
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
            <span className={`${themeClasses.accent} text-xl mr-4`}>03.</span>
            <h2 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>Some Things I've Built</h2>
            <div className={`flex-1 h-px ${themeClasses.line} ml-8`}></div>
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
                    <div className={`${themeClasses.projectBg} rounded-lg h-64 flex items-center justify-center border ${themeClasses.projectBorder}`}>
                      <Code className={`w-16 h-16 ${themeClasses.accent}`} />
                    </div>
                    <div className={`absolute inset-0 ${themeClasses.overlay} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  } space-y-4`}
                >
                  <p className={`${themeClasses.accent} text-sm`}>Featured Project</p>
                  <h3 className={`text-2xl font-bold ${themeClasses.textPrimary}`}>{project.title}</h3>

                  <div className={`${themeClasses.cardBg} p-6 rounded-lg shadow-lg border ${themeClasses.cardBorder}`}>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ChevronRight className={`w-3 h-3 ${themeClasses.accent} mt-1 mr-2 flex-shrink-0`} />
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
                      <span key={tech} className={`text-sm ${themeClasses.textSecondary} font-mono`}>
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
            <span className={`${themeClasses.accent} text-xl mr-4`}>04.</span>
            <h2 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>Skills & Technologies</h2>
            <div className={`flex-1 h-px ${themeClasses.line} ml-8`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg hover:shadow-lg`}>
              <div className="p-6">
                <h3 className={`flex items-center ${themeClasses.textPrimary} text-lg font-semibold mb-4`}>
                  <Code className={`w-5 h-5 mr-2 ${themeClasses.accent}`} />
                  UI/UX Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.skillBg} border ${themeClasses.skillBorder} ${themeClasses.skillText} ${themeClasses.skillHover} transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg hover:shadow-lg`}>
              <div className="p-6">
                <h3 className={`flex items-center ${themeClasses.textPrimary} text-lg font-semibold mb-4`}>
                  <Database className={`w-5 h-5 mr-2 ${themeClasses.accent}`} />
                  Automation & Testing
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.automation.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.skillBg} border ${themeClasses.skillBorder} ${themeClasses.skillText} ${themeClasses.skillHover} transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg hover:shadow-lg`}>
              <div className="p-6">
                <h3 className={`flex items-center ${themeClasses.textPrimary} text-lg font-semibold mb-4`}>
                  <Cloud className={`w-5 h-5 mr-2 ${themeClasses.accent}`} />
                  Cloud & FinOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.skillBg} border ${themeClasses.skillBorder} ${themeClasses.skillText} ${themeClasses.skillHover} transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:transform hover:-translate-y-1 transition-all duration-300 rounded-lg hover:shadow-lg`}>
              <div className="p-6">
                <h3 className={`flex items-center ${themeClasses.textPrimary} text-lg font-semibold mb-4`}>
                  <Users className={`w-5 h-5 mr-2 ${themeClasses.accent}`} />
                  Project Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${themeClasses.skillBg} border ${themeClasses.skillBorder} ${themeClasses.skillText} ${themeClasses.skillHover} transition-colors`}
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
            <span className={`${themeClasses.accent} text-xl mr-4`}>05.</span>
            <h2 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>{contactInfo.title}</h2>
            <div className={`flex-1 h-px ${themeClasses.line} ml-8`}></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-12 leading-relaxed">{contactInfo.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.details.map((detail, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className={`w-12 h-12 ${themeClasses.cardBg} rounded-lg flex items-center justify-center border ${themeClasses.cardBorder}`}>
                      {getIcon(detail.icon)}
                    </div>
                    <div className="text-left">
                      <p className={`font-semibold ${themeClasses.textPrimary}`}>{detail.label}</p>
                      {detail.link ? (
                        <a href={detail.link} className={`${themeClasses.accent} hover:underline`}>
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
              className={`bg-transparent border-2 ${themeClasses.accentBorder} ${themeClasses.accent} ${themeClasses.accentHover} px-8 py-4 text-lg rounded transition-colors`}
              onClick={() => window.open(`mailto:${personalInfo.email}`, "_blank")}
            >
              Say Hello
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={`py-12 text-center border-t ${themeClasses.footerBorder}`}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">
            Built by <span className={themeClasses.accent}>{personalInfo.name}</span>
          </p>
          <p className={`text-xs mt-2 ${themeClasses.textSecondary}`}>
            Designed with inspiration from the developer community
          </p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 ${themeClasses.mobileBg} border-t ${themeClasses.cardBorder} p-4 z-50`}>
        <div className="flex justify-around items-center">
          {navigation.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`capitalize text-xs ${
                activeSection === section.id ? themeClasses.accent : themeClasses.textSecondary
              }`}
            >
              {section.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${themeClasses.accentHover} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className={`w-4 h-4 ${themeClasses.accent}`} />
            ) : (
              <Moon className={`w-4 h-4 ${themeClasses.accent}`} />
            )}
          </button>
        </div>
      </div>

      {/* Side Elements */}
      <div className="hidden lg:block fixed left-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`${themeClasses.sideText} ${themeClasses.sideTextHover} transition-colors`}
            >
              {getIcon(link.icon)}
            </a>
          ))}
          <div className={`w-px h-24 ${themeClasses.sideLine}`}></div>
        </div>
      </div>

      <div className="hidden lg:block fixed right-8 bottom-0">
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className={`${themeClasses.sideText} ${themeClasses.sideTextHover} transition-colors writing-mode-vertical text-sm tracking-widest`}
            style={{ writingMode: "vertical-rl" }}
          >
            {personalInfo.email}
          </a>
          <div className={`w-px h-24 ${themeClasses.sideLine}`}></div>
        </div>
      </div>
    </div>
  );
}