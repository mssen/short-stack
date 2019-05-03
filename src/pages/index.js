import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Testimonials from '../components/testimonials';
import { BigButton, ButtonContainer } from '../style/button';
import Image from '../style/image';
import SmallerContainer from '../style/smallerConatiner';
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
        query HomeQuery {
          contentfulGallery(slug: { eq: "home" }) {
            photos {
              fluid(maxWidth: 1024) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          allContentfulTestmimonial {
            edges {
              node {
                id
                client
                body {
                  body
                }
              }
            }
          }
        }
      `}
      render={({ contentfulGallery, allContentfulTestmimonial }) => {
        const [photo] = contentfulGallery.photos;
        const quotes = allContentfulTestmimonial.edges.map(({ node }) => ({
          key: node.id,
          client: node.client,
          message: node.body.body,
        }));

        return (
          <SmallerContainer>
            <Image fluid={photo.fluid} />
            <GalleryButton>
              <Link to="/gallery/">
                <BigButton>
                  View Gallery <Icon />
                </BigButton>
              </Link>
            </GalleryButton>
            <Testimonials quotes={quotes} />
          </SmallerContainer>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
