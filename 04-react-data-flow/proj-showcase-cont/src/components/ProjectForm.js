import { useState } from 'react';

function ProjectForm({num, addProject}) {
  // name, about, phase, link, image

const [formData, setFormData] = useState({
  name: "",
  about: "",
  phase: "",
  link: "",
  image: ""
})

function handleChange(e) {
  setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
}

// function that sends a POST request using our form data and updates our projects state / lives in App

function handleSubmit(e) {
  e.preventDefault()
  
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  fetch('http://localhost:5000/projects/', configObj)
  .then(resp => resp.json())
  .then(data => {
    addProject(data)
    setFormData({name: "", about: "", phase: "", link: "", image: ""})
  })

}


    return (
      <section>
        <div>{num}</div>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
         <h3>Add New Project</h3>
         <label htmlFor="name">Name</label>
         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
         <label htmlFor="about">About</label>
         <textarea id="about" name="about" value={formData.about} onChange={handleChange}/>
         <label htmlFor="phase">Phase</label>
         <select name="phase" id="phase" value={formData.phase} onChange={handleChange}>
           <option value="">please choose a phase</option>
           <option value="1">Phase 1</option>
           <option value="2">Phase 2</option>
           <option value="3">Phase 3</option>
           <option value="4">Phase 4</option>
           <option value="5">Phase 5</option>
         </select>
         <label htmlFor="link">Project Homepage</label>
         <input type="text" id="link" name="link" value={formData.link} onChange={handleChange}/>
         <label htmlFor="image">Screenshot</label>
         <input type="text" id="image" name="image" value={formData.image} onChange={handleChange}/>
         <button type="submit">Add Project</button>
       </form>
     </section>
      )
}

export default ProjectForm