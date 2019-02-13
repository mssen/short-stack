import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import ChevronLeftIcon from '../images/chevronLeft.svg';
import ChevronRightIcon from '../images/chevronRight.svg';

const SlideButtton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0 1rem;
`;

const Cite = styled.cite`
  align-self: flex-end;
`;

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulTestmimonial {
          edges {
            node {
              client
              body {
                body
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulTestmimonial: { edges } }) => (
      <Carousel
        autoplay
        wrapAround
        autoplayInterval={8000}
        heightMode="current"
        transitionMode="fade"
        autoGenerateStyleTag={false}
        renderCenterLeftControls={({ previousSlide }) => (
          <SlideButtton type="button" onClick={previousSlide}>
            <ChevronLeftIcon />
          </SlideButtton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SlideButtton type="button" onClick={nextSlide}>
            <ChevronRightIcon />
          </SlideButtton>
        )}
      >
        {edges.map(({ node }) => (
          // Inline styles because this is the only way to not get the
          // first render to be stuipidly tall
          <section
            style={{
              height: 200,
              backgroundColor: '#cbd2d9',
              borderRadius: 4,
              boxShadow: '0 1px 3px hsla(0, 0%, 0%, 0.2)',
              padding: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <blockquote>
              <p>{node.body.body}</p>
            </blockquote>
            <Cite>– {node.client}</Cite>
          </section>
        ))}
      </Carousel>
    )}
  />
);

export default Testimonials;
