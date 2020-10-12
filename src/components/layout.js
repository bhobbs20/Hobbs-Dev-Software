import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/sidebar";

import "../styles/index.css";


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
