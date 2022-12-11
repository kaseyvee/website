import StackList from "./StackList"

const projects = [
  {
    name: "teebo",
    description: "A discourse app that caters to passionate tv fans who want to have active discussions about their favourite shows.",
    image: "https://i.imgur.com/kZwhgMa.png",
    techStack: ["Node.js", "Express", "Sass", "React", "PostgreSQL"],
    link: "https://github.com/muhammad-usama12/teebo"
  },
  {
    name: "pikmeup",
    description: "A food order pick-up application that allows customers to receive SMS updates regarding the status of their order.",
    image: "https://i.imgur.com/XisKtLq.png",
    techStack: ["Node.js", "Express", "Sass", "jQuery", "PostgreSQL"],
    link: "https://github.com/nicohsfu/pikmiup"
  },
  {
    name: "Interview Scheduler",
    description: "A single page application that allows users to book interviews with available interviewers.",
    image: "https://i.imgur.com/DEi4qx5.png",
    techStack: ["Node.js", "React", "Storybook", "Jest", "Cypress"],
    link: "https://github.com/kaseyvee/scheduler"
  },
  {
    name: "Jungle",
    description: "A mini plant-centric e-commerce application that allows users to pay through Stripe.",
    image: "https://i.imgur.com/lvBpWha.png",
    techStack: ["Ruby", "Rails", "Cypress", "RSpec", "Stripe"],
    link: "https://github.com/kaseyvee/jungle-rails"
  }
]

export default function ProjectList() {
  const projectList = projects.map(project => {
    return (
      <div>
        <div className="project-description">
          <a href={project.link}><h2>{project.name}</h2></a>
          <p>{project.description}</p>
          <StackList stack={project.techStack}/>
        </div>
        <a href={project.link} target="_blank" rel="noreferrer noopener"><img src={project.image} alt={project.name}/></a>
      </div>
    )
  })
  return (
    <div className="projects-list">
      {projectList}
    </div>
  )
}