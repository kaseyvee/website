import Tooltip from '@mui/material/Tooltip';

export default function SkillsList() {

  const skills = [
    {
      name: "JavaScript",
      iconClass: "fa-brands fa-square-js"
    },
    {
      name: "Node.js",
      iconClass: "fa-brands fa-node"
    },
    {
      name: "HTML5",
      iconClass: "fa-brands fa-html5"
    },
    {
      name: "Git",
      iconClass: "fa-brands fa-git-alt"
    },
    {
      name: "React",
      iconClass: "fa-brands fa-react"
    },
    {
      name: "Sass",
      iconClass: "fa-brands fa-sass"
    },
    {
      name: "Figma",
      iconClass: "fa-brands fa-figma"
    }
  ];
  
  const skillsList = skills.map(skill => {
    return (
      <Tooltip title={skill.name}>
        <i className={skill.iconClass}></i>
      </Tooltip>
    )
  })

  return (
    <div className="skills">
      {skillsList}
    </div>
  )
}