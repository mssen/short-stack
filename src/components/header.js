import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderText = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  & > h1 {
    margin: 0;
  }
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderText>
      <h1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </h1>
    </HeaderText>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
