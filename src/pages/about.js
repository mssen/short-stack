import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';

const Article = styled.article`
  max-width: 35em;
  margin: auto;
`;

const About = () => (
  <Layout>
    <PageHeader>About Me</PageHeader>
    <StaticQuery
      query={graphql`
        {
          contentfulPage(pageTitle: { eq: "About Me" }) {
            text {
              childContentfulRichText {
                html
              }
            }
          }
        }
      `}
      render={({ contentfulPage }) => (
        <section>
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
