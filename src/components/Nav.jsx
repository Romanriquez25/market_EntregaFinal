import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SubirProducto">Crear Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registrar">Registrate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
