import { Tooltip } from "@mui/material";

export default function Contact() {
  return (
    <div id="contact" className="page">
      <div>
        <h1>Where to find me</h1>
        <p>Even if you just wanna say hi, my inbox is always open. :)</p>
      </div>
      <div className="links">
      <Tooltip title="GitHub">
        <a href="https://github.com/kaseyvee"><i className="fa-brands fa-github"></i></a>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <a href="https://www.linkedin.com/in/kasey-valdez/"><i className="fa-brands fa-linkedin"></i></a>
      </Tooltip>
      <Tooltip title="Caution! Opens your email! I get people hate that (I'm people)">
        <a href="mailto:kaseyvaldez98@gmail.com?subject=Hello Cool Person!"><i className="fa-solid fa-envelope"></i></a>
      </Tooltip>
      </div>
    </div>
  )
}