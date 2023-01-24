import "../styles/components/navbar.css";
import Logo from "../assets/logo/Veganfresh-logo1.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="navbar" id="navbar">
      <nav>
        <a href="/" rel="noreferrer">
          {" "}
          <img src={Logo} alt="restaurant logo and restaurant name" />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/Desserts">Desserts</Link>
          </li>
          <li>
            <Link to="/Drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/Contact ">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
