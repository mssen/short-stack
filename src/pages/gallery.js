import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from 'react-images';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';
import Image from '../style/image';

const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`;

class Gallery extends React.Component {
  state = {
    lightbox: false,
    currentImage: 0,
  };

  gotoPrevLightboxImage = () =>
    this.setState((prevState) => ({
      currentImage: prevState.currentImage - 1,
    }));

  gotoNextLightboxImage = () => {
    this.setState((prevState) => ({
      currentImage: prevState.currentImage + 1,
    }));
  };

  openLightbox = (currentImage, event) => {
    event.preventDefault();
    this.setState({ lightbox: true, currentImage });
  };

  closeLightbox = () => this.setState({ lightbox: false });

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            contentfulGallery(slug: { eq: "everything" }) {
              photos {
                fixed(width: 450, height: 500) {
                  ...GatsbyContentfulFixed_withWebp_noBase64
                }
                fluid(maxWidth: 1024) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
          }
        `}
        render={({ contentfulGallery }) => {
          const { currentImage, lightbox } = this.state;

          const lightboxPhotos = contentfulGallery.photos.map((photo) => ({
            srcSet: photo.fluid.srcSet,
          }));

          return (
            <Layout>
              <PageHeader>Gallery</PageHeader>

              <GalleryGrid>
                {contentfulGallery.photos.map(({ fixed }, index) => (
                  <a href={fixed.src} onClick={(event) => this.openLightbox(index, event)}>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    <Image key={index} fixed={fixed} />
                  </a>
                ))}
              </GalleryGrid>
              <Lightbox
                backdropClosesModal
                images={lightboxPhotos}
                currentImage={currentImage}
                isOpen={lightbox}
                onClickPrev={this.gotoPrevLightboxImage}
                onClickNext={this.gotoNextLightboxImage}
                onClose={this.closeLightbox}
              />
            </Layout>
          );
        }}
      />
    );
  }
}

export default Gallery;
