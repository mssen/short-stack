import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import 'typeface-montserrat';

import Header from './header';
import SocialLinks from './socialLinks';
import { theme, th } from '../style/theme';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, sans-serif;
    color: #5d5d81;
  }

  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    border-top: 3px solid ${th('main')};
  }

  a {
    color: #8e5572;
  }
`;

const Container = styled.main`
  margin: auto;
  max-width: 1024px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header />
          <Container>{children}</Container>
          <SocialLinks />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
