import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nespr3,
  kpmg,
  bbva,
  scotia,
  meta,
  abn,
  carrent,
  jobit,
  tripguide,
  threejs,
  upv,
  ucm,
  csm,
  hole,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "CTO / Engineering Management",
    icon: web,
  },
  {
    title: "Agile & Lean Management",
    icon: mobile,
  },
  {
    title: "DevOps & Release Specialist",
    icon: backend,
  },
  {
    title: "Software Development Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps & Release Coordinator",
    company_name: "Nespresso",
    icon: nespr3,
    iconBg: "#111111",
    date: "Aug 2023 - Present",
    points: [
      "My role is pivotal in driving the continuous enhancement of our DevOps and release processes.",
      "I focus on fostering collaboration and reflection among diverse teams to improve system development life cycles (SDLC) comprehensively.",
      "Identifying and addressing operational pain points through systematic research and feedback analysis.",
      "Benchmarking and evaluating cutting-edge tools and strategies within the market to enhance our technical capabilities.",
      "This role demands a deep understanding of both technical and cultural elements of software development.",
    ],
  },
  {
    title: "Senior Technology Expert",
    company_name: "KPMG",
    icon: kpmg,
    iconBg: "#006699",
    date: "Nov 2022 - Jun 2023",
    points: [
      "Scrum Master supporting multiple teams, responsible for team delivery management and continuous improvement.",
      "Primarily participating in financial projects where the main focus was supporting agile transition and facilitating Scrum and Kanban activities.",
      "Acting as an Agile Project Manager and providing consultation on digital transformation and leading JIRA, BigPicture and Confluence.",
    ],
  },
  {
    title: "Senior DevOps Engineer",
    company_name: "ABN AMRO Bank",
    icon: abn,
    iconBg: "#66CC66",
    date: "Dec 2021 - Nov 2022",
    points: [
      "As a Senior DevOps Engineer in a clearing-focused bank, I spearheaded the implementation of the CI/CD roadmap and led the technical stack for optimizing the SDLC.",
      "My responsibilities included defining and implementing various stages of the delivery process, such as SCM, building, packaging, configuration management, deployment, and monitoring",
      "I played a crucial role in integrating approximately 160 exchanges worldwide with custom technologies, ensuring efficient and seamless operations.",
    ],
  },
  {
    title: "Architecture Manager",
    company_name: "Scotiabank",
    icon: scotia,
    iconBg: "#006699",
    date: "Oct 2018 - Oct 2020",
    points: [
      "As an Agile IT Process Manager, I defined and optimized IT processes, led agile transformation, mentored a DevOps culture, and supported the implementation of a Continuous Delivery Roadmap.",
      "I evangelized agile practices throughout the organization, assisted with change management, and continuously improved team workflows.",
      "I coached and empowered product development teams and guided the organization in implementing agile principles.",
      "I played a vital role in driving Agile practices, establishing a DevOps culture, and implementing CI/CD strategies. I facilitated Scrum processes, coached the team, and removed obstacles to ensure smooth project execution.",
    ],
  },
  /* {
    title: "IT Process Manager",
    company_name: "BBVA",
    icon: bbva,
    iconBg: "#006699",
    date: "Sep 2015 - Oct 2018",
    points: [
      "As an Agile IT Process Manager, I defined and optimized IT processes, led agile transformation, mentored a DevOps culture, and supported the implementation of a Continuous Delivery Roadmap.",
      "I evangelized agile practices throughout the organization, assisted with change management, and continuously improved team workflows.",
      "I coached and empowered product development teams and guided the organization in implementing agile principles.",
      "I played a vital role in driving Agile practices, establishing a DevOps culture, and implementing CI/CD strategies. I facilitated Scrum processes, coached the team, and removed obstacles to ensure smooth project execution.",
    ],
  }, */
];

const qualifications = [
  {
    qualification:
      "Master Engineering and Technology of Software Systems ",
    name: "Universitat Politécnica de Valencia",
    country: "Spain",
    year: "2020 - Present",
    image: upv,
  },
  {
    qualification:
      "University Engineer’s Degree in Telematics Engineering",
    name: "Universidad Católica de Manizales",
    country: "Colombia",
    year: "1999 - 2007",
    image: ucm,
  },
  {
    qualification:
      "Certifications",
    name: "Certified Scrum Master. Certified Management 3.0. Lean Change Mngmt. Product Owner Certified.",
    country: "International",
    year: "Present",
    image: csm,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems and work with different technologies effectively.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Jenkins",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://hmosqueraturner.github.io/hmt-portfolio/",
  },
  {
    name: "Qamba",
    description:
      "Our main objective is to implement innovative projects that enhance the quality of life for the inhabitants and territories, while promoting sustainable and autonomous development.",
    tags: [
      {
        name: "innovation",
        color: "blue-text-gradient",
      },
      {
        name: "sostenible",
        color: "green-text-gradient",
      },
      {
        name: "development",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://sites.google.com/view/fundacionqamba",
  },
  {
    name: "Bio Links",
    description:
      "In this app you'll find a list of my links and social networks, where I share more information about my concerns, hobbies, the initiatives in which I participate and of course, lifestyle!",
    tags: [
      {
        name: "social",
        color: "green-text-gradient",
      },
      {
        name: "community",
        color: "pink-text-gradient",
      },
      {
        name: "design",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://linktr.ee/hectorTechno",
  },
];

export { services, technologies, experiences, qualifications, projects };
