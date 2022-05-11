import { useState, useEffect } from 'react';

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([])
  const [mode, setMode] = useState(true)
  const [hide, setHide] = useState(true)
  
  useEffect(()=>{
    console.log('useEffect 1')
   fetchData()
  },[])
  
  useEffect(()=> {
    console.log(mode)
  },[mode])



  function addProject(newProject) {
    setProjects(projects => [...projects, newProject])
  }

  const fetchData = async () => {
    const resp = await fetch('http://localhost:5000/projects/')
    // console.log(resp)
    if(resp.ok) {
      const data = await resp.json()
      setProjects(data)
    }
  }

  function otherFetch() {
    fetch('http://localhost:5000/projects/')
    .then(response => response.json())
    .then(data => setProjects(data))
  }

  function toggleDark() {
    setMode(mode => !mode)
  }

  function toggleForm(){
    setHide(prevState => !prevState)
  }

  return (
    <div className={mode ? "App" : "App light"}>
      <Header mode={mode} toggleDark={toggleDark}/>
      <button onClick={toggleForm}>{!hide?"Show Form":"Hide Form"}</button>
      {hide && <ProjectForm addProject={addProject}/>}
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
