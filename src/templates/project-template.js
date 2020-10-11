import React from 'react';
import Layout from '../components/layout';
import ProjectTemplateHero from "../components/Projects/ProjectTemplateHero";
 import { graphql } from 'gatsby'

const ProjectTemplate = ({ data: {contentfulProject}}) => (
    <Layout>




        <ProjectTemplateHero
            title={contentfulProject.title}
            mainImage={contentfulProject.mainImage}
            github={contentfulProject.github}
            stackItems={contentfulProject.stackItems}
            type={contentfulProject.type}
            slug={contentfulProject.slug}
            // styleClass="card-img"
        />



    </Layout>
)

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
            slug
            title
            type
            stackItems
            github
            mainImage {
                fluid {
                    src
                } 
            }     
        }
    }
`;

export default ProjectTemplate;