function Header({ mode, toggleDark }) {
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={toggleDark}>{mode ? "Dark" : "Light"} Mode</button>
    </header>
  );
}

export default Header;
