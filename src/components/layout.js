import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import 'typeface-lato';
import 'typeface-merriweather';

import Header from './header';
import Footer from './footer';
import { theme, th } from '../style/theme';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body {
    color: ${th('gray900')};
  }

  p {
    line-height: 1.5;
  }
  
  body {
    font-family: Lato, sans-serif;
    border-top: 3px solid ${th('main')};
    background-color: ${th('offWhite')};
  }
`;

const Container = styled.main`
  margin: auto;
  max-width: 1600px;
  min-height: calc(100vh - 302px);
  padding: 0 1.5rem;

  @media (max-width: ${th('phone')}px) {
    min-height: calc(100vh - 209px);
  }
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
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
