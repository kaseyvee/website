import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function NavBar() {
  return (
    <nav>
      <div>
        <div>
          <Tooltip title="home">
            <IconButton>
              <a href="#home"><i class="fa-solid fa-house"></i></a>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="about">
            <IconButton>
              <a href="#about"><i class="fa-solid fa-user"></i></a>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="projects">
            <IconButton>
              <a href="#projects"><i class="fa-solid fa-folder-open"></i></a>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="contact me">
            <IconButton>
              <a href="#contact"><i class="fa-solid fa-envelope"></i></a>
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="resume">
            <IconButton>
              <a href='https://resume.creddle.io/resume/hje8hgzfv4a' target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-file"></i></a>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </nav>
  )
}