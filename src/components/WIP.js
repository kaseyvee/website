import StackList from "./StackList"

export default function WIP() {
  
  const projects = [
    {
      name: "me.brand()",
      description: "A fully front-end template generator for providing users a medium to introduce themselves with an eye-catching photo/banner using recognizable and iconic designs.",
      image: "https://github.com/kaseyvee/me-brand/raw/main/docs/soobway.png?raw=true",
      techStack: ["React", "Sass"],
      link: "https://github.com/kaseyvee/me-brand",
      demo: "https://kaseyvee.github.io/me-brand/"
    },
    {
      name: "Crocodile Tiers",
      description: "A full-stack web application for users to create and share tier lists.",
      image: "https://i.imgur.com/Q9vtP3E.png",
      techStack: ["Node.js", "Express", "React", "Sass", "PostgreSQL"],
      link: "https://github.com/kaseyvee/crocodile-tiers"
    }
  ];

  const projectList = projects.map(project => {
    return (
      <div className="project-article">
        <div className="project-description">
          <a href={project.link} target="_blank" rel="noreferrer noopener">
            <h2>{project.name}</h2>
          </a>
          <p>{project.description}</p>
          <StackList stack={project.techStack}/>
        </div>
        <a href={project.demo ? project.demo : project.link} target="_blank" rel="noreferrer noopener"><img src={project.image} alt={project.name}/></a>
      </div>
    )
  })
  return (
    <div className="projects-list">
      {projectList}
    </div>
  )
}