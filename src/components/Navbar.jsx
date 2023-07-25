import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import fslogo from '../assets/FinsweetLogo.png';

function Navbar() {
  return (
    <nav className="fs-navbar">
      <img className="fs-navbar-logo" src={fslogo} alt="finsweet Logo" />
      <ul className="fs-navbar-list">
        <li className="fs-nb-list-item">
          <Link className="fs-nb-item home" to="/">
            Home
          </Link>
        </li>
        <li className="fs-nb-list-item">
          {' '}
          <Link className="fs-nb-item" to="/aboutus">
            About us
          </Link>
        </li>
        <li className="fs-nb-list-item">Features</li>
        <li className="fs-nb-list-item">Pricing</li>
        <li className="fs-nb-list-item">FAQ</li>
        <li className="fs-nb-list-item">Blog</li>
      </ul>
      <button className="fs-nb-btn-contact">Contact us</button>
    </nav>
  );
}

export default Navbar;
