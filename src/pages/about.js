import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';
import Image from '../style/image';

const AboutImage = styled(Image)`
  max-width: 750px;
  margin: auto;
`;

const Article = styled.article`
  max-width: 35em;
  margin: auto;
`;

const About = () => (
  <Layout>
    <PageHeader>About</PageHeader>
    <StaticQuery
      query={graphql`
        {
          contentfulPage(pageTitle: { eq: "About" }) {
            text {
              childContentfulRichText {
                html
              }
            }
            picture {
              fluid(maxWidth: 750) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ contentfulPage }) => (
        <section>
          <AboutImage fluid={contentfulPage.picture.fluid} />
          <Article
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: contentfulPage.text.childContentfulRichText.html,
            }}
          />
        </section>
      )}
    />
  </Layout>
);

export default About;
