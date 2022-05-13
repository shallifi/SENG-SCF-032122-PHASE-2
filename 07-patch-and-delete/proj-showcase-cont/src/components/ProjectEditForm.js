import { useState, useEffect } from "react";

function ProjectEditForm({projectId, onUpdate}) {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  });


  // dependency arrays 
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectId}`)
    .then(resp => resp.json())
    .then(project => setFormData(project))
  }, [projectId])

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  // runs after we submit the edit form
  // what type of request should be made? PATCH
  // two parts: we need to update the server, and need to update our local state(projects)
  function handleEdit(e){
    e.preventDefault()
    console.log('button clicked')
    fetch(`http://localhost:4000/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(updatedProject => {
      onUpdate(updatedProject)
    })

  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleEdit}>
        <h3>Edit Project</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={formData.phase}
          onChange={handleChange}
        >
          <option value="">please choose a phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectEditForm;
