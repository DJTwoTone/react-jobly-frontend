import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';


//needs to be refactored for loggedin or not
function Nav({ logout }) {

    const { user } = useContext(UserContext);

    function loggedIn() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/companies'>
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/jobs'>
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/' onClick={logout}>
                        Logout
                    </NavLink>
                </li>
                <li>
                    Greetings {user.username}
                </li>
        </ul>
            
            
            );
    }

    function loggedOut() {
        return (
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to='/login'>
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/signup'>
                    Signup
                </NavLink>
            </li>
        </ul>            
            );
    }

    return (
        <nav className="Navigation navbar">
            <Link className="navbar-brand" to='/'>
                JOBLY
            </Link>
          {user ? loggedIn() : loggedOut()}

        </nav>
    )
}

export default Nav;