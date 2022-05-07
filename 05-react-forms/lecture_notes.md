
NOTE: All code during this lecture was written out in 04-react-data-flow

Controlled forms are important in React. Process is as follows:

set state for each input (or create an object) using useState hook
use onChange for change handler that updates state value with `e.target.value`
add value property to each input => `value={<variable>}` for examples see 04-react-data-flow ProjectForm component:

`function addProject(newProject) {
    setProjects(projects => [...projects, newProject])
  }`

  we use the spread operator to make a copy of the data and avoid unintentionally nested data

### separation of concerns

For POST request:
parent component that holds state of our data from initial fetch sends a callback function to form (as props). this c/b includes the setter function from useState hook that updates the db's state, and take a parameter of new object.

*the parent's only job is to send down that setter function inside a callback.*

form component accepts the parent's cb function as props. 

*form's job is to collect formData as local state, run fetch and after data is successfully returned and parsed, pass the data to c/b function from parent.* i.e., 

`fetch('http://localhost:5000/projects/', configObj)
  .then(resp => resp.json())
  .then(data => {
    addProject(data)
    setFormData({name: "", about: "", phase: "", link: "", image: ""})
  })`

  *final setFormData call resets/clears the form*

  TIP: when setting up our object properties make sure our keys on front end match up with object properties on the back end (in this case our db.json). we avoid bugs this way when data is fetched and mapped.