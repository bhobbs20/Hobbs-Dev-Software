import React from "react";
import { Link } from 'gatsby';
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "./../../constants/PageLinks";


const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="logo">H<span className="logo-span">D</span></Link>
                    <button type="button" className="toggle-btn" onClick={toggleSidebar} >
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <PageLinks styleClass="nav-links" />
            </div>
        </nav>
    )
}

export default Navbar;