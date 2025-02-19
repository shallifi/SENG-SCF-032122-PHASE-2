import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";
import { Route,Switch} from "react-router-dom";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
    completeEditing();
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  // const renderForm = () => {
  //   if (projectId) {
  //     return (
     
  // };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      {/* {renderForm()} */}
        <Route path="/projects/:id/edit">
          <ProjectEditForm onUpdateProject={onUpdateProject}
            />
          </Route>

        <Route path="/projects/new">
          <ProjectForm onAddProject={onAddProject} />;
        </Route>
      <Route path="/projects/:id">
        <ProjectDetail />
      </Route>
        
        <Route path="/projects"> 
          <ProjectList
            projects={projects}
            enterProjectEditModeFor={enterProjectEditModeFor}
            onDeleteProject={onDeleteProject}
          />
        </Route>


      </Switch>
    </div>
  );
};

export default App;
