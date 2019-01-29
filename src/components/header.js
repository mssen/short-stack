import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderText = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
`;

const NavContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 1em;

  &.active {
    padding-bottom: 0.5em;
    border-bottom: 2px solid;
  }
`;

const Header = () => (
  <React.Fragment>
    <HeaderText>
      short<strong>stack</strong>photography
    </HeaderText>
    <NavContainer>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/galleries" activeClassName="active">
        Galleries
      </NavLink>
      <NavLink activeClassName="active" to="/services">
        Services
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </NavContainer>
  </React.Fragment>
);

export default Header;
