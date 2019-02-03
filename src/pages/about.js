import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About</h1>
    <StaticQuery
      query={graphql`
        {
          allContentfulAbout {
            edges {
              node {
                picture {
                  fluid(maxWidth: 1800) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                }
                body {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulAbout: { edges } }) => {
        const about = edges[0].node;

        return (
          <React.Fragment>
            <Img fluid={about.picture.fluid} />
            <article // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: about.body.childContentfulRichText.html,
              }}
            />
          </React.Fragment>
        );
      }}
    />
  </Layout>
);

export default About;
