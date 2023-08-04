export default function Header() {
  return (
    <header className="header" id="home">
      <nav className="navbar container">
        <a href="#" className="logo">
          João.
        </a>

        <div className="navbar-buttons">
          <button
            type="button"
            className="button icon-button menu-toggle-button"
          >
            <i className="fa-solid fa-bars open-icon"></i>
            <i className="fa-solid fa-xmark close-icon"></i>
          </button>

          <button
            type="button"
            className="button icon-button theme-toggle-button"
          >
            <i className="fa-solid fa-sun theme-off"></i>
            <i className="fa-solid fa-moon theme-on"></i>
          </button>
        </div>

        <div className="menu">
          <ul className="list">
            <li className="list-item">
              <a href="#" className="list-link">
                <span>01</span> About
              </a>
            </li>

            <li className="list-item">
              <a href="#" className="list-link">
                <span>02</span> Projects
              </a>
            </li>

            <li className="list-item">
              <a href="#" className="list-link">
                <span>03</span> Articles
              </a>
            </li>

            <li className="list-item">
              <a href="#" className="list-link">
                <span>04</span> Newsletter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
