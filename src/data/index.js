import {
  project1,
  webdev,
  instagram,
  github,
  linkedin,
  facebook,
  instagramD,
  githubD,
  linkedinD,
  facebookD,
  project2,
  attendify,
  guessord,
  unity_app,
  chessProject,
} from "../assets";
import {
  faHouse,
  faEnvelope,
  faUser,
  faFile,
  faDiagramProject,
  faTimeline,
  faCertificate,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
export const projects = [
  {
    id: "project-1",
    title: "AI-Guided Inflatable Neck Collar Simulation",
    imgUrl: "<AICollar />",
    stack: [
      "Flutter",
      "Firebase",
      "Django",
      "YOLOv8",
      "PostgreSQL",
      "ThreeJS",
      "React",
    ],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Vertarelax-app",
    description:
      "Final project featuring an innovative AI-powered medical simulation system. Combines computer vision with YOLOv8 for real-time posture detection, 3D visualization using Three.js, and a comprehensive Flutter mobile app with Firebase backend. Designed to assist healthcare professionals in neck collar treatment planning and patient education.",
  },
  {
    id: "project-2",
    title: "Gift Application",
    imgUrl: webdev,
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud_messaging"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Gift-Application",
    description:
      "A comprehensive mobile gift-sharing platform built with Flutter and Firebase. Features real-time gift tracking. and push notifications. Implements secure user authentication, cloud storage for gift images",
  },
  {
    id: "project-3",
    title: "WiSetFi Website",
    imgUrl: project2,
    stack: ["Vite", "React JS", "Tailwind Css", "Django", "PostgreSQL"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/WiSetFi-Website",
    description:
      "Modern corporate website built with React and Django. Features responsive design, dynamic content management, user authentication, and a robust PostgreSQL database. Includes admin dashboard, contact forms, service showcases, and SEO optimization. Delivers fast loading times with Vite build system and beautiful UI with Tailwind CSS.",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    imgUrl: project1,
    stack: ["Vite", "React JS", "Tailwind Css"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/portfolio-houasnia-aymen-ahmed",
    description:
      "Professional portfolio website showcasing technical skills and projects. Built with React and Vite for optimal performance, featuring responsive design, dark/light theme toggle, interactive animations with Framer Motion, and a modern UI with Tailwind CSS. Includes contact form integration and smooth scrolling navigation.",
  },
  {
    id: "project-5",
    title: "Guessord (Contexto Clone)",
    imgUrl: guessord,
    stack: ["Vite", "Vue3", "Tailwind Css", "Django", "PostgreSQL", "AI"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Guessord-Contexto-Clone",
    description:
      "Innovative word-guessing game inspired by Contexto, built with Vue 3 and AI integration. Features intelligent word similarity algorithms, progressive difficulty levels, and a sleek modern interface. Implements advanced AI for contextual word relationships and provides engaging gameplay with social features.",
  },
  {
    id: "project-6",
    title: "Attendify-App",
    imgUrl: attendify,
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud_messaging"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Attendify-App",
    description:
      "Smart attendance tracking application for educational institutions. Features QR code scanning, GPS location verification, real-time attendance reports, and automated notifications. Built with Flutter for cross-platform compatibility, integrated with Firebase for cloud storage and real-time synchronization. Includes admin dashboard and student analytics.",
  },
  {
    id: "project-7",
    title: "Chess.com-Clone",
    imgUrl: chessProject,
    stack: ["Vite", "React", "TailwindCSS", "TypeScript"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/ChessClone",
    description:
      "Chess platform inspired by Chess.com. Built with React and TypeScript for type safety, featuring real-time gameplay, move validation, and a modern responsive UI. Implements chess engine logic, drag-and-drop piece movement, and comprehensive game state management with beautiful animations.",
  },
  {
    id: "project-8",
    title: "Qwikly Planning App",
    imgUrl: "<Qwikly />",
    stack: ["IONIC", "Vue", "Vuetify", "JavaScript"],
    link: "#",
    description:
      "Cross-platform productivity app built with Ionic and Vue.js. Features task management, project planning, team collaboration, and deadline tracking. Implements Material Design with Vuetify components, offline synchronization, and native mobile features. Designed for seamless productivity across Android and iOS platforms.",
  },
  {
    id: "project-9",
    title: "Unity-AR-Core Data Monitoring",
    imgUrl: unity_app,
    stack: ["Unity", "AR Core", "Vuforia"],
    link: "#",
    description:
      "Advanced Augmented Reality application for real-time data visualization and monitoring. Built with Unity and AR Core, featuring 3D data overlays, interactive AR markers with Vuforia, and immersive data analysis tools. Enables users to visualize complex datasets in 3D space through AR technology for enhanced data comprehension.",
  },
  {
    id: "project-10",
    title: "Deep Learning Projects",
    imgUrl: "<DeepLearning />",
    stack: ["PyTorch", "YOLO", "Python"],
    link: "#",
    description:
      "Comprehensive AI/ML project collection featuring advanced computer vision and machine learning applications. Includes real-time face detection using YOLO, voice recognition systems, intelligent waste classification for environmental monitoring, and custom neural network implementations. Built with PyTorch for scalable deep learning solutions.",
  },
  {
    id: "project-11",
    title: "Library Management Console",
    imgUrl: "<Library />",
    stack: ["Java", "Swing", "MySQL"],
    link: "#",
    description:
      "Comprehensive desktop library management system built with Java Swing and MySQL. Features book cataloging, member management, loan tracking, fine calculation, and detailed reporting. Implements secure user authentication, data validation, and intuitive GUI design for efficient library operations and administrative tasks.",
  },
  {
    id: "project-12",
    title: "Tic-Tac-Toe & Sudoku Games",
    imgUrl: "<TicTacToe />",
    stack: ["Python"],
    link: "#",
    description:
      "Classic puzzle games collection featuring Tic-Tac-Toe and Sudoku implementations in Python. multiple difficulty levels, game statistics tracking, and intuitive command-line interface. Demonstrates algorithmic problem-solving, game logic implementation, and user experience design principles.",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    icon2: instagramD,
    link: "https://www.instagram.com/aymen.ahmed.houasnia/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    icon2: facebookD,
    link: "https://www.facebook.com/Leonardo.Albert.ed/",
  },
  {
    id: "social-media-3",
    icon: github,
    icon2: githubD,
    link: "https://github.com/Houasnia-Aymen-Ahmed",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    icon2: linkedinD,
    link: "https://www.linkedin.com/in/aymen-houasnia-126b65234/",
  },
];

export const headbarItems = [
  {
    id: 1,
    icon: faHouse,
    title: "Home",
    ref: "#Home",
  },
  {
    id: 2,
    icon: faUser,
    title: "About",
    ref: "#About",
  },
  {
    id: 3,
    icon: faDiagramProject,
    title: "Projects",
    ref: "#Projects",
  },
  {
    id: 4,
    icon: faTimeline,
    title: "Timeline",
    ref: "#Timeline",
  },
  {
    id: 5,
    icon: faCode,
    title: "Skills",
    ref: "#Skills",
  },
  {
    id: 6,
    icon: faCertificate,
    title: "Certificates",
    ref: "#Certificates",
  },
  {
    id: 7,
    icon: faFile,
    title: "Resume",
    ref: "#Resume",
  },
  {
    id: 8,
    icon: faEnvelope,
    title: "Contact",
    ref: "#Contact",
  },
];

export const timeline = [
  {
    id: 7,
    year: "Jun 2025",
    title: "Odoo Developer",
    duration: "Present",
    details:
      "Currently working as Odoo Developer at ITComp in Algiers, Algeria. Developing and customizing Odoo ERP solutions for various clients.",
  },
  {
    id: 6,
    year: "Aug 2024 - Jun 2025",
    title: "System Administrator & IT Engineer",
    duration: "11 months",
    details:
      "Worked as System Administrator & IT Engineer at L'OURS FOR OIL & GAS SERVICES in Hessi Messoud, Algeria. Managed IT infrastructure and provided technical support.",
  },
  {
    id: 5,
    year: "Mar - Jun 2024",
    title: "IONIC Framework Developer (First Job)",
    duration: "4 months",
    details:
      "Worked as IONIC Framework Developer at Originova in Batna, Algeria. Developed cross-platform mobile applications using IONIC framework + Vuetify.",
  },
  {
    id: 4,
    year: "Jun 2024",
    title: "Graduated",
    duration: "5 years of study",
    details:
      "Graduated with Engineering Diploma of 'Industrial Computer Science Engineer' specialized in 'Industrial Networking Engineering & Artificial Intelligence', and a Master's Diploma in automation, from Higher National School of Renewable Energies, Environment & Sustainable Development. \n Final project: 'AI-Guided Inflatable Neck Collar simulation'. This achievement marked the culmination of 5 years of intensive study and practical application of cutting-edge technologies in AI and industrial systems.",
  },
  {
    id: 3,
    year: "2023",
    title: "First Mobile App",
    duration: "2 years after",
    details:
      "I've built my first mobile called \"Gift App\", using flutter & dart & multiple tools from firebase such as cloud_messaging & firestore. it took 1 month to finish the v1.0.0 and another 3 weeks to finish the v2.0.0, and it's still under development for new features",
  },
  {
    id: 2,
    year: "2021",
    title: "Industrial Network Engineering & Artificial intelligence",
    duration: "3 years after",
    details:
      'I started my studies at the field "INEAI" (or in french "IRIIA") , amazed by the program they\'ve put to master it. and the variety of knowledge i\'d get from it ( programming languages, computer science, ai, networking, security) and much more.',
  },
  {
    id: 1,
    year: "2018",
    title: "First Line of Code",
    duration: "the beginning",
    details:
      "I wrote my first line of real code, knowing that i found what gives me joy in fill my life, that moment i knew that i'm going to be a great developer, that was my dream.",
  },
];

export const infos = [
  {
    title: "Birthday",
    content: "11 April 2001",
  },

  {
    title: "Website",
    content:
      "https://houasnia-aymen-ahmed.github.io/portfolio-houasnia-aymen-ahmed/",
  },

  {
    title: "Phone",
    content: "+213 673 407 157",
  },

  {
    title: "City",
    content: "Batna, Algeria",
  },

  {
    title: "Age",
    content: "23",
  },
  {
    title: "Degree",
    content: "Engineering & Master Diplomas",
  },
  {
    title: "Email",
    content: "aymenaymen2056@gmail.com",
  },
  {
    title: "Freelance",
    content: "Available",
  },
];

export const certificates = [
  {
    id: "cert-1",
    title: "Soliya Global Circles - Certificate",
    date: "June 2021",
    description: "Certificate in global communication and cultural exchange",
  },
  {
    id: "cert-2",
    title: "2nd Place - 3.6 Coding Hackathon",
    date: "December 2022",
    description: "Achieved second place in competitive coding hackathon",
  },
  {
    id: "cert-3",
    title: "2nd Place - Startup City Hackathon",
    date: "June 2023",
    description: "Second place winner in startup-focused hackathon",
  },
  {
    id: "cert-4",
    title: "Mentor - Hackathon HNS-RE2SD",
    date: "November 2024",
    description: "Served as mentor for university hackathon event",
  },
];

export const skills = {
  general: [
    "Coding",
    "Time Management",
    "Organized",
    "Problem Solving",
    "Computer Engineering",
    "Writing",
    "Work under Pressure",
  ],
  technical: ["Python", "JavaScript", "Dart", "SQL", "Git", "Linux"],
  frameworks: [
    "WordPress",
    "Odoo",
    "Dolibarr",
    "Flutter",
    "IONIC",
    "PyTorch",
    "YOLO",
    "React/Vue JS",
    "Nuxt JS",
    "Unity",
  ],
};
