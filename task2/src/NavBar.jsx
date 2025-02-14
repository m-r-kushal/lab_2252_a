import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Meal Info App</a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Meal Categories</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
