import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am passionate frontend developer skilled in building scalable and robust web applications using React, Tailwind CSS, and Framer Motion. Dedicated to crafting innovative, dynamic solutions that enhance business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer focused on building efficient and user-friendly web applications. Passionate about solving complex problems and delivering high-quality solutions, my journey into web development began with a deep curiosity for how things work. Over time, it has evolved into a career centered on continuous learning, adaptability, and thriving in collaborative environments. Outside of work, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Currency converter",
    image: project1,
    description:
      "Developed a React.js and TailwindCSS web app for real-time currency conversion with API integration and a user-friendly interface.",
    technologies: ["React", "TailwindCss", "API"],
    deployedLink:"https://currency-converter-vert-psi.vercel.app/"
  },
  {
    title: "Github UserName Finder",
    image: project2,
    description:
      "Built with React and TailwindCSS, this app lets users search GitHub profiles by username, fetching and displaying real-time data from the GitHub API. It shows key details like repositories and followers with a modern, responsive design.",
    technologies: ["HTML", "CSS", "React", "API", "timeago.js"],
    deployedLink:"https://github-userfinder-eta.vercel.app/"
  },
  {
    title: "Shopping Cart",
    image: project3,
    description:
      "Developed a responsive shopping cart application using React.js, TailwindCSS, and Redux Toolkit, streamlining product selection, cart management, and checkout processes.",
    technologies: ["React", "TailwindCss", "Redux", "Redux-Toolkit"],
    deployedLink:"https://shopping-cart-ten-lake.vercel.app/"
  },
];

export const CONTACT = {
  address: "Arakkonam, Ranipet District, TamilNadu - 631003",
  phoneNo: "+91 9344 3635 52 ",
  email: "hemanathan.t.9352@gmail.com",
};
