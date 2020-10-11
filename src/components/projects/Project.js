import React from 'react';

const Project = ({mainImage, title, github, type}) => {
    return (
        <div className="container">
            <img src={mainImage.fluid.src} alt="project" />
            <h2>{title}</h2>
            <h4>{type}</h4>
            <p>{github}</p>
        </div>
    )
}

export default Project;