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
  chessProject
} from "../assets";
import {
  faHouse,
  faEnvelope,
  faUser,
  faFile,
  faDiagramProject,
  faTimeline
} from "@fortawesome/free-solid-svg-icons";
export const projects = [
  {
    id: "project-1",
    title: "Gift Application",
    imgUrl: webdev,
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud_messaging"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Gift-Application"
  },
  {
    id: "project-2",
    title: "Portfolio Webpage",
    imgUrl: project1,
    stack: ["Vite", "React JS", "Tailwind Css"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/portfolio-houasnia-aymen-ahmed"
  },
  {
    id: "project-3",
    title: "WiSetFi company website",
    imgUrl: project2,
    stack: [
      "Vite",
      "React JS",
      "Tailwind Css",
      "Django",
      "PostgreSQL",
      "Djoser",
      "Axios",
      "Rest"
    ],
    link: "https://github.com/Houasnia-Aymen-Ahmed/WiSetFi-Website"
  },
  {
    id: "project-4",
    title: "Guessord (Contexto Clone)",
    imgUrl: guessord,
    stack: ["Vite", "Vue JS", "Tailwind Css", "Django", "Axios", "Rest"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Guessord-Contexto-Clone"
  },
  {
    id: "project-5",
    title: "Attendify-App",
    imgUrl: attendify,
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud_messaging"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/Attendify-App"
  },
  {
    id: "project-6",
    title: "Chess.com-Clone",
    imgUrl: chessProject,
    stack: ["Vite", "React", "TailwindCSS", "TypeScript"],
    link: "https://github.com/Houasnia-Aymen-Ahmed/ChessClone"
  },
  {
    id: "project-7",
    title: "Data Monitoring App",
    imgUrl: unity_app,
    stack: ["Unity", "AR Core", "Vuforia"],
    link: "#"
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    icon2: instagramD,
    link: "https://www.instagram.com/aymen.ahmed.houasnia/"
  },
  {
    id: "social-media-2",
    icon: facebook,
    icon2: facebookD,
    link: "https://www.facebook.com/Leonardo.Albert.ed/"
  },
  {
    id: "social-media-3",
    icon: github,
    icon2: githubD,
    link: "https://github.com/Houasnia-Aymen-Ahmed"
  },
  {
    id: "social-media-4",
    icon: linkedin,
    icon2: linkedinD,
    link: "https://www.linkedin.com/in/aymen-houasnia-126b65234/"
  }
];

export const headbarItems = [
  {
    icon: faHouse,
    title: "Home",
    ref: "#Home"
  },
  {
    icon: faUser,
    title: "About",
    ref: "#About"
  },
  {
    icon: faDiagramProject,
    title: "Projects",
    ref: "#Projects"
  },
  {
    icon: faTimeline,
    title: "Timeline",
    ref: "#Timeline"
  },
  {
    icon: faFile,
    title: "Resume",
    ref: "#Resume"
  },
  {
    icon: faEnvelope,
    title: "Contact",
    ref: "#Contact"
  }
];

export const timeline = [
  {
    year: "August/2024",
    title: "First Job",
    duration: "2 months after",
    details:
      "Signed my first contract as trainee engineer in well service with \"L'ours for Gas & Oil services\" company, working in Hassi Messoud - Algeria"
  },
  {
    year: "2024",
    title: "Graduated",
    duration: "1 year after",
    details:
      "I Graduated in Juin/2024 after getting 'Excellent' on our Dissertation, The final project was 'AI-Guided neck collar for disc herniations'. after 5 years of studying i finally became 'Industrial Computer science Engineer' specialized in 'Industrial Networking Engineenring & Artificial Intelligence'"
  },
  {
    year: "2023",
    title: "First Mobile App",
    duration: "2 years after",
    details:
      "I've built my first mobile called \"Gift App\", using flutter & dart & multiple tools from firebase such as cloud_messaging & firestore. it took 1 month to finish the v1.0.0 and another 3 weeks to finish the v2.0.0, and it's still under development for new features"
  },
  {
    year: "2021",
    title: "Industrial Network Engineering & Artificial intelligence",
    duration: "3 years after",
    details:
      'I started my studies at the field "INEAI" (or in french "IRIIA") , amazed by the program they\'ve put to master it. and the variety of knowledge i\'d get from it ( programming languages, computer science, ai, networking, security) and much more.'
  },
  {
    year: "2018",
    title: "First Line of Code",
    duration: "the beginning",
    details:
      "I wrote my first line of real code, knowing that i found what gives me joy in fill my life, that moment i knew that i'm going to be a great developer, that was my dream."
  }
];

export const infos = [
  {
    title: "Birthday",
    content: "11 April 2001"
  },

  {
    title: "Website",
    content:
      "https://houasnia-aymen-ahmed.github.io/portfolio-houasnia-aymen-ahmed/"
  },

  {
    title: "Phone",
    content: "+213 673 407 157"
  },

  {
    title: "City",
    content: "Batna, Algeria"
  },

  {
    title: "Age",
    content: "23"
  },
  {
    title: "Degree",
    content: "Master / Engineer"
  },
  {
    title: "Email",
    content: "houasnia.aymen.a@hns-re2sd.dz"
  },
  {
    title: "Freelance",
    content: "Available"
  }
];
