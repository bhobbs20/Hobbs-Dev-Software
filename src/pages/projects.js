import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AllProjects from "../components/projects/AllProjects";


const ProjectsPage = () => {
    return (
        <Layout>
            <SEO title="Projects" />
            <div className="container">
                <h3>Projects</h3>
            </div>
            <hr/>
            <br/>
            <div className="">
                <AllProjects />
            </div>
        </Layout>
    )
}

export default ProjectsPage;