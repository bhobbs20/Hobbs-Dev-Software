import React from "react";
import { Link } from "gatsby";

const data = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "projects",
        url: "/projects /",
    },
    {
        id: 3,
        text: "contact",
        url: "/contact/",
    },
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id} className="nav-item">
            <Link to={link.url} className="nav-link" activeClassName="active-color">{link.text}</Link>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`navbar-nav ml-auto ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}