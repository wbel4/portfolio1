import './App.css';
import ExperienceSection from "./components/ExperienceSection";
import BlogCard from "./components/BlogCard";
import ReactTypingEffect from 'react-typing-effect';

const pageData = {
  experience: [
  {
      title: "SDE Intern",
      company: "Amazon",
      location: "Sunnyvale, RI",
      start: "June 2022",
      end: "Aug 2022",
      description: "Built the tool responsible for calculating, displaying, and pushing Alexa updates to hundreds of partner companies and roughly 10 million active weekly users of Alexa-enabled devices.",
      image: "https://i.imgur.com/oOjWRyj.jpg"
  },
  {
    title: "Visual Computing Robotics Researcher",
    company: "Brown University",
    location: "Providence, RI",
    start: "Jan 2022",
    end: "May 2022",
    description: "Use Unity and ROS (Robot Operating System) to improve current methods of VR-controlled teleoperation of robots by streamlining movements and reducing latency. Currently working with Spot from Boston Dynamics to facilitate VR teleoperation.",
    image: "https://i.imgur.com/YmKANPJ.jpg"
  },
  {
    title: "Google Computer Science Summer Institute",
    company: "Google",
    location: "San Diego, CA",
    start: "June 2020",
    end: "Aug 2020",
    description: "Participated in an intensive 3-week programming institute where Google engineers taught participants how to develop web apps in HTML, CSS, and JavaScript. Through the creation of various small projects, I used JavaScript to create a multi-stage single-player (https://minute-to-win-it-project.glitch.me/) party game where the difficulty increases as the stages progress.",
    image: "https://i.imgur.com/GpoF2Sd.png"
  },
  {
    title: "Founder",
    company: "Learning From Scratch",
    location: "New York, NY",
    start: "Jan 2019",
    end: "Present",
    description: "Founded a non-profit organization called Learning From Scratch that introduces elementary school children to MIT-developed Scratch block-based programming language. It is running in 7 states, teaching 150+ 4th and 5th graders.",
    image: "https://i.imgur.com/McnflPq.png"
  },
    ],
  skills: [
    {
        title: "Languages",
        items: ["Javascript", "Typescript", "Python", "Swift", "HTML", "CSS", "Pyret", "Racket", "Java", "Scala", "C#", "C/C++", "ASM", "SQL"]
    },
    {
        title: "Front-End",
        items: ["Next.js", "React", "SwiftUI", "React Native", "TailwindCSS", "Flutter"]
    },
    {
        title: "Back-End",
        items: ["SQL Databases", "Django", "Node.js", "MongoDB", "REST API", "DynamoDB", "NoSQL Databases", "Firebase"]

    },
    {
        title: "Other Tools and Services",
        items: ["AWS", "Pandas", "Git", "Vagrant", "Docker", "GUI", "Linux/UNIX", "Figma", "Unity", "Unreal Engine", "Unit Testing", "CI/CD Pipelines", "Integration Testing", "Functional Testing"]
    }
  ],
  projects: [{
    title: "PokéShop",
    description: "A React App calling the PokéAPI, giving users the ability to filter, sort, and collect Pokémon. This project was one of my first times tying in good UI Design with functionality. I used PokeAPI to get data and used React to display the data, using states and hooks to give users the ability to sort and filter.",
    image: "https://i.imgur.com/YNMdI3n.jpg",
    skills: ["HTML", "CSS", "Javascript", "React", "Material UI"],
    href: "https://lazybear22.github.io/pokereact/"
}, {
    title: "Rift",
    description: "The first second-hand clothing rental app. Having learned design principles and basic frontend development, I decided to build a personal project in the form of an iOS app that allows users to rent second-hand clothing. It is meant to further sustainable fashion and to slow down fast fashion from its takeover over the past decade. *PROJECT COMING SOON*",
    image: "https://i.imgur.com/NF8DSJ6.png",
    skills: ["SwiftUI", "Firebase", "Figma"],
    href: "https://github.com"
}, {
    title: "Hack News Clone",
    description: "HackerNews Clone with improved readability, accessibilty, and better use of screen real estate. When tasked to resedign a website, I thought of Hacker News as it was a website famous for its poor aesthetic and lack of accessibility. My redesign was not only more accessible with alt text, greater color contrast, and larger font, but is also responsive. This project solodified my idea of responsive and accessible design. Furthermore, this project was also my first time protoyping a design and bringing it to fruition, a skill I find more and more useful when designing web apps.",
    image: "https://i.imgur.com/TfqVB8d.jpg",
    skills: ["HTML", "CSS", "Figma", "Balsamiq"],
    href: "https://lazybear22.github.io/hackernewsclone/"
}, {
    title: "Vending Machine Interface",
    description: "A guide to the user interface of a vending machine. This was one of my very first websites using HTML and CSS to display the user interface of a vending machine. It taught me how to use divs, flex, and selectors as well as features like a navbar.",
    image: "https://i.imgur.com/kcjWLyl.jpg",
    skills: ["HTML", "CSS"],
    href: "https://lazybear22.github.io/personasandstoryboarding/"
},],
}

const Skills = ({title, skills}) => (<div className="skill-div">
    <h2 className="skill-section">{title}</h2>
    <ul className="skills-list">
        {skills.map((skill, index) => <li key={index}
                                                 className="skill">
            {skill}
        </li>)}
    </ul>
</div>)

const ReactTypingEffectDemo = () => {
  return (
    <ReactTypingEffect
        text={["fullstack_dev", "computer_systems", "data_science", "game_dev", "machine_learning"]}
        cursorRenderer={cursor => <h1 className="intro-skills">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className="intro-skills">
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
        eraseSpeed={200} 
        speed={100}
        eraseDelay={1000}       
      />
  );
};

function App() {
  return (
    <div className="App">
      <div className="intro">
        <div className=''>
          <h1 className="my-name">Hello! My name is <span className='name'><br />lazybear22.</span></h1>
          <div className='terminal'>
            <ReactTypingEffectDemo/>
          </div>
        </div>
      </div>
      <div className="project-div">
        <div className="styling-div">
            <div className="left-align-div">
                <h2 className="projects-label">
                    Projects
                </h2>
            </div>
            <div className="grid-div">
                {pageData.projects.map((project, index) => <BlogCard key={index} title={project.title}
                                                                      desc={project.description}
                                                                      img={project.image}
                                                                      link={project.href}
                                                                      skills={project.skills}/>)}
            </div>
        </div>
      </div>
      <div>
        <h2 className="experience-label">Experience</h2>
        <ExperienceSection experiences={pageData.experience}/>
      </div>
      <div className="skills-section">
                    <h2 className="skills-label">Skills</h2>
                    {pageData.skills.map((section, index) => <Skills key={index} title={section.title}
                                                                           skills={section.items}/>)}
      </div>
    </div>
  );
}

export default App;
