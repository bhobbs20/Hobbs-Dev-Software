import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;