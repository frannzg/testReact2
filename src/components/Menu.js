import { Link } from "react-router-dom";
import "./Menu.css"
import logo from "../logo.svg";

function Menu () {
    return (
    <nav>
      <img src={logo} alt="logo" className="menu-logo" />
      
      <div className="menu-links">
        <Link to="/">Inicio</Link>
        <Link to="/users">Usuarios</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
    );
}

export default Menu;