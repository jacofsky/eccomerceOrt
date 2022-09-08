import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Carrito from "../Carrito/Carrito.js";
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light  bg-custom-color">
      <div className="container p-4">
        <Link to="/" className="navbar-brand" href="#">
          Sneakers Company
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navBarHover">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={`/Brand/${'Adidas'}`} className="nav-link" href="#">
                Adidas
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={`/Brand/${'Nike'}`} className="nav-link" href="#">
                Nike
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={`/Brand/${'Jordan'}`} className="nav-link" href="#">
                Jordan
              </Link>
            </li>
            
          </ul>
          <Carrito/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
