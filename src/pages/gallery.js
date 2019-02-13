import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';

const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
`;

const Gallery = () => (
  <Layout>
    <PageHeader>Gallery</PageHeader>
    <StaticQuery
      query={graphql`
        {
          contentfulGallery(slug: { eq: "everything" }) {
            photos {
              fixed(width: 400, height: 500) {
                ...GatsbyContentfulFixed_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ contentfulGallery }) => (
        <GalleryGrid>
          {contentfulGallery.photos.map((photo) => (
            <Img fixed={photo.fixed} key={photo.fixed.src} />
          ))}
        </GalleryGrid>
      )}
    />
  </Layout>
);

export default Gallery;
