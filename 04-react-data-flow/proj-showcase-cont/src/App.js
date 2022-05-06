import { useState } from 'react';

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// import { projects } from './projects'

function App() {

  const [projects, setProjects] = useState([])

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

  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <button onClick={fetchData} className="fetch-btn">Fetch Projects</button>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
