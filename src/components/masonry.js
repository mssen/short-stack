import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lightbox from 'react-images';

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

  const gotoPrevLightboxImage = () => setCurrentImage(currentImage - 1);

  const gotoNextLightboxImage = () => setCurrentImage(currentImage + 1);

  const openLightbox = (clickedImage, event) => {
    event.preventDefault();
    setLightboxOpen(true);
    setCurrentImage(clickedImage);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const columns = new Array(columnCount).fill().map(() => []);
  thumbnails.photos.forEach(({ thumbnail }, index) => {
    columns[index % columnCount].push(thumbnail);
  });

  return (
    <Container>
      <GalleryGrid>
        {columns.map((column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <GridColumn key={index}>
            {column.map((thumbnail) => (
              <GridImage key={thumbnail.src}>
                <a href={thumbnail.src} onClick={(event) => openLightbox(index, event)}>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <Image key={index} fluid={thumbnail} />
                </a>
              </GridImage>
            ))}
          </GridColumn>
        ))}
      </GalleryGrid>
      <Lightbox
        backdropClosesModal
        images={lightboxPhotos}
        currentImage={currentImage}
        isOpen={lightboxOpen}
        onClickPrev={gotoPrevLightboxImage}
        onClickNext={gotoNextLightboxImage}
        onClose={closeLightbox}
      />
    </Container>
  );
};

Masonry.propTypes = {
  thumbnails: PropTypes.shape({ photos: PropTypes.arrayOf(PropTypes.object) }).isRequired,
  lightboxPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Masonry;
