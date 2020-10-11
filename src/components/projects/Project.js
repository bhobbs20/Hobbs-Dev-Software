import React from 'react';
import { Link } from 'gatsby';

const Project = ({mainImage, title, github, type, slug}) => {
    return (
        <div className="container">
            <img src={mainImage.fluid.src} alt="project" />
            <h2>{title}</h2>
            <h4>{type}</h4>
            <p>{github}</p>
            <div className="container">
                <Link to={`/projects/${slug}`}>View</Link>
            </div>
        </div>
    )
}

export default Project;