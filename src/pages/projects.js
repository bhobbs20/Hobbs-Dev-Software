import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AllProjects from "../components/projects/AllProjects";


const ProjectsPage = ({data}) => {
      const {
            allContentfulProject: {nodes: projects}
      } = data
    return (
        <Layout>
            <SEO title="Projects" />
            <div className="container">
                <h3>Projects</h3>
            </div>
            <hr/>
            <br/>
            <div className="">
                <AllProjects projects={projects} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulProject {
            nodes {
                github
                slug
                title
                type
                mainImage {
                    fluid {
                        src
                    }
                }
            }
        }
    }
`;


export default ProjectsPage;