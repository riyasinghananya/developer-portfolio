import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ananya.</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Certificates</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="hire-btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;