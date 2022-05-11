import { useState } from 'react';

function ProjectListItem({name, image, about, link, phase}) {

  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter((counter) => counter + 1)
  }
    return (
        <li className="card">
          <div className="image">
            <img src={image} alt={name} />
            <button onClick={handleClick} className="claps">👏{counter} </button>
          </div>
          <div className="details">
            <h4>{name}</h4>
            {about && <p>{about}</p>}
            {link && <p> <a href={link}>Link</a> </p>}
          </div>
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
        </li>
      )
}

export default ProjectListItem