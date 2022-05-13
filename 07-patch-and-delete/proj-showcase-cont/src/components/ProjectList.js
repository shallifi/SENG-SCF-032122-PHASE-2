import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects, editMode, onDelete }) {
  const [searchIt, setSearchIt] = useState("");
  function handleSearch(e) {
    setSearchIt(e.target.value);
  }
  const filteredProjects = projects.filter((project) =>
    project.name.toUpperCase().includes(searchIt.toUpperCase())
  );

  const renderProjectItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} editMode={editMode} onDelete={onDelete}/>
  ));

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearch} type="text" placeholder="Search..." />
      <ul className="cards">{renderProjectItems}</ul>
    </section>
  );
}

export default ProjectList;
