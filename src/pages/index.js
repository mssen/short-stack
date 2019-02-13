import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { BigButton, ButtonContainer } from '../style/button';
import Image from '../style/image';
import ArrowIcon from '../images/arrow.svg';

const GalleryButton = styled(ButtonContainer)`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Icon = styled(ArrowIcon)`
  fill: white;
`;

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          contentfulGallery(slug: { eq: "home" }) {
            photos {
              fluid(maxWidth: 1024) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ contentfulGallery }) => {
        const [photo] = contentfulGallery.photos;
        return <Image fluid={photo.fluid} />;
      }}
    />
    <GalleryButton>
      <Link to="/gallery/">
        <BigButton>
          View Gallery <Icon />
        </BigButton>
      </Link>
    </GalleryButton>
  </Layout>
);

export default IndexPage;
