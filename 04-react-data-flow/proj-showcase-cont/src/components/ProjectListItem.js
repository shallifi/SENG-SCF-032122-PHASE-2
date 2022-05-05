

function ProjectListItem({name, image, about, link, phase}) {
    return (
        <li className="card">
          <div className="image">
            <img src={image} alt={name} />
            <button className="claps">👏 0</button>
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