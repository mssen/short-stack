import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';

import Masonry from '../components/masonry';

const Gallery = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulGallery(slug: { eq: "everything" }) {
            photos {
              thumbnail: fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ contentfulGallery }) => {
        const lightboxPhotos = contentfulGallery.photos.map((photo) => ({
          srcSet: photo.full.srcSet,
          src: photo.full.src,
        }));

        return (
          <Layout>
            <PageHeader>Gallery</PageHeader>
            <Masonry thumbnails={contentfulGallery} lightboxPhotos={lightboxPhotos} />
          </Layout>
        );
      }}
    />
  );
};

export default Gallery;
