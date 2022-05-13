import { useState } from "react";

function ProjectListItem(props) {

  const { id, name, image, about, link, phase, editMode, onDelete } = props
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }

  function handleEdit(){
    // need to invoke editMode and pass the project id
    editMode(id)
  }

  function handleDelete(){
    // 2 parts: update server/ update local state

    // update server:
    fetch(`http://localhost:4000/projects/${id}` , {
      method: "DELETE"
    })
    // .then(resp => resp.json())
    // .then(onDelete(id))
    onDelete(id)
    
  }

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleClick} className="claps">
          👏{counter}{" "}
        </button>
      </div>
      <div className="details">
        <h4>{name}</h4>
        {about && <p>{about}</p>}
        {link && (
          <p>
            {" "}
            <a href={link}>Link</a>{" "}
          </p>
        )}
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectListItem;
