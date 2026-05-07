import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/body">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;