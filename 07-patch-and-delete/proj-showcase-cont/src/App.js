import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

function App() {
  const [projects, setProjects] = useState([]);
  const [mode, setMode] = useState(true);
  const [hide, setHide] = useState(true);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function addProject(newProject) {
    setProjects((projects) => [...projects, newProject]);
  }

  // need to pass a callback function. have the id of the project that we are editing and we need to signal to our app component that its going to render an edit form

  const fetchData = async () => {
    const resp = await fetch("http://localhost:4000/projects/");
    if (resp.ok) {
      const data = await resp.json();
      setProjects(data);
    }
  };

  function toggleDark() {
    setMode((mode) => !mode);
  }

  function toggleForm() {
    setHide((prevState) => !prevState);
  }

  function renderForm() {
    if (projectId) {
      return <ProjectEditForm projectId={projectId} onUpdate={onUpdate}/>;
    } else {
      return <ProjectForm addProject={addProject} />;
    }
  }

  function editMode(id) {
    setProjectId(id);
  }


  // when onUpdate is called inside of ProjectEditForm, it will pass the new updated project received from the server as an argument
  function onUpdate(updatedProject){
    // we need to replace the original project inside our projects array wiht the newly updated project

    // we need inverse data flow
    // we need to set the projects/ update the state

    const updatedProjects = projects.map((ogProj) => {
      /// how am i going to determine which ogProj needs to be replaced with updatedProj
      if (ogProj.id === updatedProject.id){
        return updatedProject
      } else {
        return ogProj
      }
    })

    setProjects(updatedProjects)
    setProjectId(null)
  }


  // we need to remove the deleted project from the projects array 
  // return a new array 
  // set our projects state with the new array

  // .filter()

  function onDelete(deletedProjId){

    // once we get deleted project, what do we need to do with it

    const filteredProj = projects.filter((project) => project.id !== deletedProjId)
    setProjects(filteredProj)
  }

  return (
    <div className={mode ? "App" : "App light"}>
      <Header mode={mode} toggleDark={toggleDark} />
      <button onClick={toggleForm}>{!hide ? "Show Form" : "Hide Form"}</button>
      {hide && renderForm()}
      <ProjectList projects={projects} editMode={editMode} onDelete={onDelete}/>
    </div>
  );
}

export default App;


// Steps to making an update: 
// 1. Make a request PATCH to the server after an edit occurs 
// 2. we get the response back and need to update state on the react side 
// 3. use .map to create a new array that disposes of our old element and replaces it with the new element 
// 4. we are going to update our state with the new array 


// Steps to making a delete request: 
// 