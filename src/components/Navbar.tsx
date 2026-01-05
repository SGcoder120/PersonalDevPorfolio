import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="nav-container">
            <ul className="nav-menu">
                <li>
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "active" : ""}
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to="/projects"
                        className={location.pathname === "/projects" ? "active" : ""}
                    >
                        Projects
                    </Link>
                </li>

                <li>
                    <Link
                        to="/fun"
                        className={location.pathname === "/fun" ? "active" : ""}
                    >
                        Fun Stuff
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
