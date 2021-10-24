import './Navbar.css'
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
          <ul> 
            <li> <NavLink exact to="/">home</NavLink> </li>
            <li> <NavLink to="/about">about</NavLink> </li>
          </ul>
        </nav> 
    );

}   export default Navbar;