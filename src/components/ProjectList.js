import StackList from "./StackList"

const projects = [
  {
    name: "teebo",
    description: "A discourse app that caters to passionate tv fans who want to have active discussions about their favourite shows.",
    image: "https://i.imgur.com/kZwhgMa.png",
    techStack: ["Node.js", "Express", "Sass", "React", "PostgreSQL", "Axios"]
  },
  {
    name: "pikmeup",
    description: "A food order pick-up application that allows customers to receive SMS updates regarding the status of their order.",
    image: "https://i.imgur.com/XisKtLq.png",
    techStack: ["Node.js", "Express", "Sass", "jQuery", "PostgreSQL"]
  },
  {
    name: "Interview Scheduler",
    description: "A single page application that allows users to book interviews with available interviewers.",
    image: "https://i.imgur.com/DEi4qx5.png",
    techStack: ["Node.js", "React", "Webpack", "Axios", "Storybook", "Jest", "Cypress"]
  },
  {
    name: "Jungle",
    description: "A mini plant-centric e-commerce application that allows users to pay through Stripe.",
    image: "https://i.imgur.com/lvBpWha.png",
    techStack: ["Node.js", "Express", "Sass", "React", "PostgreSQL", "Axios", "RSpec"]
  }
]

export default function ProjectList() {
  const projectList = projects.map(project => {
    return (
      <div>
        <div className="project-description">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
        <img src={project.image} alt={project.name}/>
        <StackList stack={project.techStack}/>
      </div>
    )
  })
  return (
    <div className="projects-list">
      {projectList}
    </div>
  )
}