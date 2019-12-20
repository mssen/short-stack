import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Image from '../style/image';
import useMedia from '../hooks/useMedia';

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const GalleryGrid = styled.section`
  display: flex;
  margin-left: -2rem;
`;

const GridColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const GridImage = styled.div`
  margin-bottom: 2rem;
`;

const Masonry = ({ thumbnails, lightboxPhotos }) => {
  const columnCount = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 675px)'],
    [4, 3, 2],
    1
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (clickedImage, event) => {
    event.preventDefault();
    setCurrentImage(clickedImage);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const columns = new Array(columnCount);
  thumbnails.photos.forEach(({ thumbnail }, index) => {
    const columnIndex = index % columnCount;
    if (!columns[columnIndex]) {
      columns[columnIndex] = [];
    }
    columns[columnIndex].push({ thumbnail, index });
  });

  return (
    <Container>
      <GalleryGrid>
        {columns.map((column, columnIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <GridColumn key={columnIndex}>
            {column.map(({ thumbnail, index: imageIndex }) => (
              <GridImage key={thumbnail.src}>
                <a href={thumbnail.src} onClick={(event) => openLightbox(imageIndex, event)}>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <Image key={imageIndex} fluid={thumbnail} />
                </a>
              </GridImage>
            ))}
          </GridColumn>
        ))}
      </GalleryGrid>
      <ModalGateway>
        {lightboxOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={lightboxPhotos} />
          </Modal>
        )}
      </ModalGateway>
    </Container>
  );
};

Masonry.propTypes = {
  thumbnails: PropTypes.shape({ photos: PropTypes.arrayOf(PropTypes.object) }).isRequired,
  lightboxPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Masonry;
