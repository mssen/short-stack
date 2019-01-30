import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';
import emailIcon from '../images/email.svg';

const SocialLinks = () => (
  <footer>
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
                <a href={node.url}>
                  <img src={facebookIcon} alt="Facebook Link" />
                </a>
              );
            case 'Instagram':
              return (
                <a href={node.url}>
                  <img src={instagramIcon} alt="Instagram Link" />
                </a>
              );
            case 'Email':
              return (
                <a href={node.email}>
                  <img src={emailIcon} alt="Email Link" />
                </a>
              );
            default:
              return null;
          }
        })
      }
    />
  </footer>
);

export default SocialLinks;
