import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const GalleryPage = ({ data: { contentfulGallery } }) => (
  <Layout>
    <h1>{contentfulGallery.title}</h1>
    {contentfulGallery.photos.map((photo) => (
      <Img fixed={photo.fixed} />
    ))}
  </Layout>
);

export const query = graphql`
  query($galleryId: String!) {
    contentfulGallery(id: { eq: $galleryId }) {
      title
      photos {
        fixed(width: 300, height: 300) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
    }
  }
`;

GalleryPage.propTypes = {
  data: PropTypes.shape({
    contentfulGallery: PropTypes.shape({
      title: PropTypes.string,
      photos: PropTypes.array,
    }),
  }).isRequired,
};

export default GalleryPage;
