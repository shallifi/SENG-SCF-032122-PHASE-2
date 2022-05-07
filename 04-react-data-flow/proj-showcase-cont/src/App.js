import { useState } from 'react';

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// import { projects } from './projects'

function App() {

  const [projects, setProjects] = useState([])
  const [mode, setMode] = useState(true)

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

  return (
    <div className={mode ? "App" : "App light"}>
      <Header mode={mode}toggleDark={toggleDark}/>
      <ProjectForm />
      <button onClick={fetchData} className="fetch-btn">Fetch Projects</button>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
