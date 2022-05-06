import { useState } from 'react'; 
import ProjectListItem from "./ProjectListItem";


function ProjectList({projects}) {
  // we want to save our input field value as state
  const [searchIt, setSearchIt] = useState("")
  //we want to filter and usea function that checks the projects to see if there is a match and render accordingly
  function handleSearch(e) {
    setSearchIt(e.target.value)
  }
  // we will use projects.filter(takes a callback function)
  const filteredProjects = projects.filter(project => project.name.toUpperCase().includes(searchIt.toUpperCase()))
  //for each project in our projects array, check to see if project.name "matches" (in some way, not an exact match) our searchIt = check for case insensitivity
  
    const renderProjectItems = filteredProjects.map(project => <ProjectListItem key={project.id} {...project}/>)
    
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

export default ProjectList