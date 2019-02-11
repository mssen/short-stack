import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';

const Image = styled(Img)`
  max-width: 750px;
  margin: auto;
  border-radius: 5px;
`;

const About = () => (
  <Layout>
    <PageHeader>About</PageHeader>
    <StaticQuery
      query={graphql`
        {
          allContentfulAbout {
            edges {
              node {
                picture {
                  fluid(maxWidth: 750) {
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
            <Image fluid={about.picture.fluid} />
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
