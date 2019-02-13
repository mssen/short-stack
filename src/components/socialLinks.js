import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import FacebookIcon from '../images/facebook.svg';
import InstagramIcon from '../images/instagram.svg';
import EmailIcon from '../images/email.svg';
import { th } from '../style/theme';

const IconLink = styled.a`
  & > svg {
    fill: ${th('main')};
    transition: fill 200ms ease-in-out, transform 100ms ease;
  }

  & > svg:hover,
  & > svg:focus {
    fill: ${th('mainDark')};
  }
`;

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query SocialLinks {
        allContentfulSocialLink {
          edges {
            node {
              type
              url
              email
            }
          }
        }
      }
    `}
    render={({ allContentfulSocialLink: { edges } }) =>
      edges.map(({ node }) => {
        switch (node.type) {
          case 'Facebook':
            return (
              <IconLink href={node.url} alt="Facebook Link" key="facebook">
                <FacebookIcon />
              </IconLink>
            );
          case 'Instagram':
            return (
              <IconLink href={node.url} alt="Instagram Link" key="instagram">
                <InstagramIcon />
              </IconLink>
            );
          case 'Email':
            return (
              <IconLink href={node.email} alt="Email Link" key="email">
                <EmailIcon />
              </IconLink>
            );
          default:
            return null;
        }
      })
    }
  />
);

export default SocialLinks;
