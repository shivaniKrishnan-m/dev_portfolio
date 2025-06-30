// data/portfolioData.js

export const personalInfo = {
    name: "Pugazhendhi GM",
    initials: "PG",
    tagline: "I build things for the web & mobile.",
    description: "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Meyi Cloud Solutions.",
    location: "Chennai, India",
    email: "pugazhendhigm11@gmail.com",
    phone: "+91-6369323541",
    linkedin: "https://www.linkedin.com/in/pugazhendhi-murugan-50b66b257/",
    github: "https://github.com/pugazhendhigm",
    resume: "/resume.pdf",
    profileImage: "/image.jpeg"
  };
  
  export const aboutInfo = {
    paragraphs: [
      "Hello! I'm Pugazhendhi, a software engineer passionate about creating things that live on the internet. My interest in web development started back in 2021 when I decided to try building custom web applications — turns out hacking together HTML & CSS taught me a lot about React and JavaScript!",
      "Fast-forward to today, and I've had the privilege of working at a growing startup, building products for clients across various industries. My main focus these days is building accessible, inclusive products and digital experiences using modern technologies.",
      "Here are a few technologies I've been working with recently:"
    ],
    technologies: [
      "JavaScript (ES6+)",
      "TypeScript", 
      "React",
      "React Native",
      "Node.js",
      "Python"
    ]
  };
  
  export const skills = {
    frontend: [
      "React.js",
      "React Native", 
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Redux",
      "Next.js",
      "Material-UI"
    ],
    backend: ["Python", "Node.js", "REST API"],
    cloud: ["AWS S3", "CloudFront", "CloudFormation", "CodePipeline", "Lambda", "API Gateway", "Cognito"],
    tools: ["Git", "Jira", "ClickUp", "Agile/Scrum"]
  };
  
  export const experience = [
    {
      company: "Meyi Cloud Solutions",
      location: "Pondicherry, India",
      role: "Associate Software Engineer", 
      period: "Aug 2023 – Present",
      achievements: [
        "Developed and delivered responsive, scalable web applications using React.js and Redux, consistently meeting project specifications and timelines",
        "Managed project schedules and frontend tasks, achieving 100% on-time delivery for multiple client-facing platforms with 1000+ monthly active users",
        "Collaborated with backend, UI/UX, and product teams for seamless user experiences",
        "Liaised with clients to gather requirements and convert them into actionable tasks",
        "Deployed applications using AWS serverless stack, improving scalability and performance"
      ]
    }
  ];
  
  export const projects = [
    {
      title: "Plant 365 Management System",
      period: "Jun 2023 – Present",
      description: "A comprehensive web application for Ready-Mix Concrete (RMC) plant operations featuring real-time data visualization, operational dashboards, and cross-device compatibility.",
      highlights: [
        "Built responsive web application using React.js, Redux, and Material UI",
        "Integrated RESTful APIs for real-time data fetching and operational visibility", 
        "Ensured cross-device compatibility and mobile responsiveness",
        "Improved operational efficiency through intuitive dashboard design"
      ],
      tech: ["React.js", "Redux", "Material UI", "CSS", "REST API"],
      github: "#",
      live: "#"
    },
    {
      title: "Cyber Honey Guide (CHY)",
      period: "Feb 2024 – Aug 2024", 
      description: "A full-featured recruitment platform connecting job seekers with employers through dynamic listings, real-time messaging, and comprehensive candidate management.",
      highlights: [
        "Designed and implemented recruitment platform with React.js and Redux",
        "Enabled dynamic job listings and candidate-employer messaging system",
        "Integrated Firebase for authentication and GetStream for real-time communication",
        "Collaborated in Agile environment delivering scalable features"
      ],
      tech: ["React.js", "Redux", "Material UI", "Firebase", "GetStream"],
      github: "#",
      live: "#"
    },
    {
      title: "Droplet MPS - IoT Solution",
      period: "May 2024 – Jun 2025",
      description: "Cross-platform iOS application for IoT device control via Bluetooth and Wi-Fi, featuring cloud-based management and automated deployment workflows.",
      highlights: [
        "Developed React Native app for IoT device control via Bluetooth and Wi-Fi",
        "Integrated AWS IoT Core for secure device communication", 
        "Automated device configuration using Python scripts and Bash",
        "Reduced manual setup time and increased deployment efficiency"
      ],
      tech: ["React Native", "Python", "AWS IoT Core", "Bluetooth", "Wi-Fi"],
      github: "#",
      live: "#"
    }
  ];
  
  export const certifications = [
    {
      title: "AWS Partner Technical Accredited",
      description: "Validated AWS cloud services, architecture, and security knowledge",
      date: "May 2025"
    },
    {
      title: "Udemy Web Development Bootcamp", 
      description: "Covered HTML, CSS, JavaScript, Node.js, React, and best practices",
      date: "June 2024"
    }
  ];
  
  export const navigation = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];
  
  export const socialLinks = [
    { 
      name: "GitHub",
      url: "https://github.com/pugazhendhigm",
      icon: "Github"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/pugazhendhi-murugan-50b66b257/",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:pugazhendhigm11@gmail.com", 
      icon: "Mail"
    }
  ];
  
  export const contactInfo = {
    title: "Get In Touch",
    description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    details: [
      {
        icon: "Mail",
        label: "Email",
        value: "pugazhendhigm11@gmail.com",
        link: "mailto:pugazhendhigm11@gmail.com"
      },
      {
        icon: "Phone", 
        label: "Phone",
        value: "+91-6369323541",
        link: null
      },
      {
        icon: "Linkedin",
        label: "LinkedIn", 
        value: "Connect with me",
        link: "https://www.linkedin.com/in/pugazhendhi-murugan-50b66b257/"
      },
      {
        icon: "MapPin",
        label: "Location",
        value: "Chennai, India", 
        link: null
      }
    ]
  };