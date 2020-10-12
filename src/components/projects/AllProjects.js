import React from 'react';
import Project from "../projects/Project";
import Title from "../shared/Title";

const AllProjects = ( {projects} ) => {
    return (
        <div className="projects-section">
            <Title title="All Projects" />

            <div className="cards">
                {projects.map((project, index) => {
                    return <Project key={project.id} index={index} {...project} />
                })}
            </div>
        </div>
    )
}

export default AllProjects;