import React from 'react';
import Project from "../projects/Project";

const AllProjects = ( {projects} ) => {
    return (
        <div className="container">
            <h3>All Projects Component</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                {projects.map((project, index) => {
                    return <Project key={project.id} index={index} {...project} />
                })}
            </div>
        </div>
    )
}

export default AllProjects;