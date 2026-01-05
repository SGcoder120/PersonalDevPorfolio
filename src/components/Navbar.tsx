import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className={"nav-container"}>
                <ul className={"nav-menu"}>
                    <li><Link to={"/"} end>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><Link to={"/fun"}>Fun Stuff</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;