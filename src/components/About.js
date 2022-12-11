import Tooltip from '@mui/material/Tooltip';

export default function About() {
  return (
    <div id="about" className="page">
      <div className="bio">
        <img
          className="picture"
          src="https://avatars.githubusercontent.com/u/111031789?v=4"
          alt="profile"
        ></img>
        <div className="intro">
          Hello! I'm based in Vancouver, BC, transitioning from a background in chemistry.<br/><br/> My love for web development leans towards the front-end and executing beautiful, clean and minimalist deisigns. I'm keen to provide users an easy and intuitive way to navigate information without being overwhelmed (that's me- I'm users).
        </div>
      </div>
      <div className="skills">
        <Tooltip title="JavaScript">
          <i className="fa-brands fa-square-js"></i>
        </Tooltip>
        <Tooltip title="Node.js">
          <i className="fa-brands fa-node"></i>
        </Tooltip>
        <Tooltip title="HTML5">
          <i className="fa-brands fa-html5"></i>
        </Tooltip>
        <Tooltip title="Git">
          <i className="fa-brands fa-git-alt"></i>
        </Tooltip>
        <Tooltip title="React">
          <i className="fa-brands fa-react"></i>
        </Tooltip>
        <Tooltip title="Sass">
          <i className="fa-brands fa-sass"></i>
        </Tooltip>
        <Tooltip title="Figma">
          <i className="fa-brands fa-figma"></i>
        </Tooltip>
      </div>
    </div>
  )
}