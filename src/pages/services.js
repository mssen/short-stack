import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';

const Services = () => (
  <Layout>
    <PageHeader>Services</PageHeader>
    <StaticQuery
      query={graphql`
        query Services {
          allContentfulService {
            edges {
              node {
                title
                price
                description {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulService: { edges } }) =>
        edges.map(({ node }) => (
          <section>
            <header>
              <h3>{node.title}</h3>
              <p>{node.price}</p>
            </header>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: node.description.childContentfulRichText.html,
              }}
            />
          </section>
        ))
      }
    />
  </Layout>
);

export default Services;
