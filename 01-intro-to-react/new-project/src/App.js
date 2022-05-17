import { PokeCard } from './PokeCard'

function App() {
  // console.log(<ChildComponent />)
  return (
    <div className="App">
      <PokeCard name="bulbasaur" img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" likes="4"/>
      
    </div>
  );
}



export default App;
