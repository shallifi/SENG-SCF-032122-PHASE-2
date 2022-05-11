// import { useState } from 'react'

function Header({mode, toggleDark}) {
    

    // function handleClick() {
    //     setMode((mode) => !mode)
    // }

    return (
        <header>
          <h1>
          <span className="logo">{"//"}</span>
            Project Showcase
          </h1>
          {/* <button onClick={handleUpdate}>Click Me to Increment Num: {num}</button> */}
          <button onClick={toggleDark}>
            {mode ? 'Dark' : 'Light'} Mode
          </button>
        </header>
      );
}

export default Header