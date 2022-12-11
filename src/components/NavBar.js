import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function NavBar() {
  return (
    <nav>
      <div>
        <div>
          <Tooltip title="home">
            <a href="#home">
              <IconButton>
                <i className="fa-solid fa-house"></i>
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="about">
            <a href="#about">
              <IconButton>
                <i className="fa-solid fa-user"></i>
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="projects">
            <a href="#projects">
              <IconButton>
                <i className="fa-solid fa-folder-open"></i>
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="contact me">
            <a href="#contact">
              <IconButton>
                <i className="fa-solid fa-envelope"></i>
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="resume">
            <a href='https://resume.creddle.io/resume/hje8hgzfv4a' target="_blank" rel="noreferrer noopener">
              <IconButton>
                <i className="fa-solid fa-file"></i>
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </nav>
  )
}