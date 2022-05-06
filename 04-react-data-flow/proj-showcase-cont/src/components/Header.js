import { useState } from 'react'

function Header() {
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