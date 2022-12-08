import './App.css';
import ExperienceSection from "./components/ExperienceSection";
import BlogCard from "./components/BlogCard";

const pageData = {
  experience: [
    {
        title: "SDE Intern",
        company: "Amazon",
        location: "Sunnyvale, RI",
        start: "June 2022",
        end: "Aug 2022",
        description: "Built the tool responsible for calculating, displaying and pushing Alexa updates to hundreds of partner companies and roughly 10 million active weekly users of Alexa-enabled devices.",
        image: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg"
    },
    {
      title: "Visual Computing Robotics Researcher",
      company: "Brown University",
      location: "Providence, RI",
      start: "Jan 2022",
      end: "May 2022",
      description: "Use Unity and ROS (Robot Operating System) to improve current methods of VR-controlled teleoperation of robots by streamlining movements and reducing latency. Currently working with Spot from Boston Dynamics to facilitate VR teleoperation.",
      image: "https://yt3.ggpht.com/ytc/AMLnZu81bz9ABGIPLxueJtHw_BIkFyRaSHIxzTGPJiLqwA=s900-c-k-c0x00ffffff-no-rj"
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
    {
        title: "Google Computer Science Summer Institute",
        company: "Google",
        location: "San Diego, CA",
        start: "May 2019",
        end: "Nov 2020",
        description: "Participated in an intensive 3-week programming institute where Google engineers taught participants how to develop web apps in HTML, CSS, and JavaScript. Through the creation of various small projects, I used JavaScript to create a multi-stage single-player (https://minute-to-win-it-project.glitch.me/) party game where the difficulty increases as the stages progress.",
        image: "https://i.imgur.com/GpoF2Sd.png"
    },
    ],
  skills: [
    {
        title: "Languages",
        items: ["Javascript", "Typescript", "Python", "Swift", "HTML", "CSS", "Pyret", "Racket", "Java", "Scala", "C#", "C/C++", "ASM", "SQL"]
    },
    {
        title: "Front-End",
        items: ["Next.js", "React", "SwiftUI", "React Native", "Tailwind CSS", "Flutter"]
    },
    {
        title: "Back-End",
        items: ["SQL Databases", "Django", "Node.js", "MongoDB", "REST API", "DynamoDB", "NoSQL Databases"]

    },
    {
        title: "Other Tools and Services",
        items: ["Pandas", "Git", "Wordpress", "Linux/UNIX", "Figma", "Unity", "Unreal", "Unit Testing", "Integration Testing", "Functional Testing"]
    }
  ],
  projects: [{
    title: "Rift",
    description: "The first second-hand clothing rental app. *Project Coming Soon*",
    image: "https://i.pinimg.com/550x/63/a3/fa/63a3fad4d4b24c64c2c3096c63627c8c.jpg",
    href: "https://github.com"
}, {
    title: "Hack News Clone",
    description: "HackerNews Clone with improved readability, accessibilty, and better use of screen real estate.",
    image: "https://uploads-ssl.webflow.com/5e5e26b57a149fc28773c703/5eaf3dc2f728bb4e333a1546_hacker-news-logo.jpeg",
    href: "https://lazybear22.github.io/hackernewsclone/"
}, {
    title: "Vending Machine Interface",
    description: "A guide to the user interface of a vending machine.",
    image: "https://ih1.redbubble.net/image.1152186486.5807/st,small,507x507-pad,600x600,f8f8f8.jpg",
    href: "https://lazybear22.github.io/personasandstoryboarding/"
}, {
  title: "PokéShop",
  description: "A React App calling the PokéAPI, giving users the ability to filter, sort, and collect Pokémon.",
  image: "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png",
  href: "https://lazybear22.github.io/pokereact/"
},],
}

const SkillSection = ({title, skills}) => (<div className="skill-div">
    <h2 className="skill-section">{title}</h2>
    <ul className="skills-list">
        {skills.sort().map((skill, index) => <li key={index}
                                                 className="skill">
            {skill}
        </li>)}
    </ul>
</div>)

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>Hello! My name is William Belfor.</h1>
        <h2>I like to code!</h2>
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
                                                                      link={project.href}/>)}
            </div>
        </div>
      </div>
      <div>
        <h2 className="experience-label">Experience</h2>
        <ExperienceSection experiences={pageData.experience}/>
      </div>
      <div className="skills-section">
                    <h2 className="skills-label">Skills</h2>
                    {pageData.skills.map((section, index) => <SkillSection key={index} title={section.title}
                                                                           skills={section.items}/>)}
      </div>
    </div>
  );
}

export default App;
