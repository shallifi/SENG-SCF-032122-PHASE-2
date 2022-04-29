export const PokeCard = ({img, likes, name}) => {
    // const newObj = {
    //     me: "Shelby",
    //     dog: "Tiger Rose"
    // }

    // const {dog, me} = newObj
    // console.log(dog, me)

    return (
        <div className="poke-card">
        <img src={img} alt={name}></img>
        <h3>{name}</h3>
        <h3 className="likes-num">Likes: {likes}</h3>
        <button className="like-btn">❤️</button>
        <button className="delete-btn submit-btn">Delete</button>
        </div>
    )
  }

