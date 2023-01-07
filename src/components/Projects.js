import { useState } from "react";
import classNames from "classnames";
import ProjectList from "./ProjectList";
import WIP from "./WIP";
export default function Projects() {
  const [completed, setCompleted] = useState(true);
  const toggleCompleted = classNames({
    "toggled": completed,
  });
  const toggleWIP = classNames({
    "toggled": !completed,
  });

  return (
    <section id="projects" className="page">
      <div>
        <h1>Some stuff</h1>
        <div>
          <button onClick={() => setCompleted(true)} className={toggleCompleted}>Completed</button>
          <button onClick={() => setCompleted(false)} className={toggleWIP}>Work in Progress</button>
        </div>
        { completed ? <ProjectList /> : <WIP />}
      </div>
    </section>
  )
}