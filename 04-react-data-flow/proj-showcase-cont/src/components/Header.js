import { useState } from 'react'

function Header() {

    // first i want to add an event listener/handler to my button
    //i want to create some state using useState
    //

    const [mode, setMode] = useState(true)

    function handleClick() {
        setMode((mode) => !mode)
    }

    return (
        <header>
          <h1>
          <span className="logo">{"//"}</span>
            Project Showcase
          </h1>
          <button onClick={handleClick}>
            {mode ? 'Dark' : 'Light'} Mode
          </button>
        </header>
      );
}

export default Header