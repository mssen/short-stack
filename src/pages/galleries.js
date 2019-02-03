import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Galleries = () => (
  <Layout>
    <h1>Galleries</h1>
    <StaticQuery
      query={graphql`
        {
          allContentfulGallery {
            edges {
              node {
                title
                slug
                linkPhoto {
                  fixed(width: 800, height: 400) {
                    ...GatsbyContentfulFixed_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulGallery: { edges } }) =>
        edges.map(({ node }) => (
          <Link to={`/galleries/${node.slug}`}>
            <div>
              <h3>{node.title}</h3>
              <Img fixed={node.linkPhoto.fixed} />
            </div>
          </Link>
        ))
      }
    />
  </Layout>
);

export default Galleries;
