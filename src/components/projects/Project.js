import React from 'react';
// import { Link } from 'gatsby';

const Project = ({mainImage, title, github, type, slug, id}) => {
    return (
        <>
            <article key={id} className="card">
                <div className="project-container">
                    <img src={mainImage.fluid.src} alt="project" className="pic-image" />
                    <div className="project-info">
                        <p className="project-p">{type}</p>
                        <h2>{title}</h2>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Project;