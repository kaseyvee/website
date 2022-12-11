import { Tooltip } from "@mui/material"
import SkillsList from "./SkillsList"

export default function About() {
  return (
    <section id="about" className="page">
      <div className='about-container'>
        <h1>About me</h1>
        <div className="bio">
          <Tooltip title="me looking swag in Dublin" placement="left">
            <img
              className="picture"
              src="https://avatars.githubusercontent.com/u/111031789?v=4"
              alt="profile"
            ></img>
          </Tooltip>
          <div className="intro">
            Hello! I'm based in Vancouver, BC, transitioning from a background in chemistry.<br/><br/> My love for web development leans towards the front-end and executing beautiful, clean and minimalist deisigns. I'm keen to provide users an easy and intuitive way to navigate information without being overwhelmed (that's me- I'm users).
          </div>
        </div>
        <SkillsList />
      </div>
    </section>
  )
}