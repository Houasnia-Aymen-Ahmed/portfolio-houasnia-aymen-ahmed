import { project1, webdev, instagram, github, linkedin, facebook, instagramD, githubD, linkedinD, facebookD } from "../assets";
import { faHouse, faEnvelope, faUser, faFile, faDiagramProject, faTimeline, } from "@fortawesome/free-solid-svg-icons";
export const projects = [
  {
    id: "project-1",
    title: "Gift Application",
    imgUrl: webdev,
    stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud_messaging'],
    link: 'https://github.com/Houasnia-Aymen-Ahmed'
  },
  {
    id: "project-2",
    title: "Portfolio Webpage",
    imgUrl: project1,
    stack: ['Vite', 'React JS', 'Tailwind Css'],
    link: 'https://github.com/Houasnia-Aymen-Ahmed',
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    icon2: instagramD,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    icon2: facebookD,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: github,
    icon2: githubD,
    link: "https://www.github.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    icon2: linkedinD,
    link: "https://www.linkedin.com/",
  },
];


export const headbarItems = [
  {
    icon: faHouse,
    title: 'Home',
    ref: '#Home',
  },
  {
    icon: faUser,
    title: 'About',
    ref: '#About',
  },
  {
    icon: faDiagramProject,
    title: 'Projects',
    ref: '#Projects',
  },
  {
    icon: faTimeline,
    title: 'Timeline',
    ref: '#Timeline',
  },
  {
    icon: faFile,
    title: 'Resume',
    ref: '#Resume',
  },
  {
    icon: faEnvelope,
    title: 'Contact',
    ref: '#Contact',
  },
];

export const timeline = [
  {
    year: 'Today',
    title: 'Student',
    duration: 'few months',
    details:
      'Basically i\'m still a student at the HNS-RE2SD, and this is my last year. I\'m hoping to explore the software enegineering world more & more, as i\'s my passion.',
  },
  {
    year: '2023',
    title: 'First Mobile App',
    duration: '2 years',
    details:
      'I\'ve built my first mobile called "Gift App", using flutter & dart & multiple tools from firebase such as cloud_messaging & firestore. it took 1 month to finish the v1.0.0 and another 3 weeks to finish the v2.0.0, and i\'s still under development for new features',
  },
  {
    year: '2021',
    title: "Industrial Network Engineering & Artificial intelligence",
    duration: '3 years',
    details:
      'I started my stuides at the field "INEAI, amazed by the program they\'ve put to master it. and the variety of knowledge i\'d get from it ( programming languages, computer science, ai, networking, security) and much more.',
  },
  {
    year: '2018',
    title: 'First Line of Code',
    duration: 'the beginning',
    details:
      "I wrote my first line of real code, knowing that i found what gives me joy in fill my life, that moment i knew that i'm going to be a great developer, that was my dream.",
  },
];

export const infos = [
  {
    title: 'Birthday',
    content: '11 April 2001',
  },

  {
    title: 'Website',
    content: 'www.PersonalBlog.com',
  },

  {
    title: 'Phone',
    content: '+213 673 407 157',
  },

  {
    title: 'City',
    content: 'Batna, Algeria',
  },

  {
    title: 'Age',
    content: '23',
  },
  {
    title: 'Degree',
    content: 'Master / Engineer',
  },
  {
    title: 'Email',
    content: 'houasnia.aymen.a@hns-re2sd.dz',
  },
  {
    title: 'Freelance',
    content: 'Available',
  },
];