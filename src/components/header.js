import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 1em;
  display: flex;
  align-items: baseline;

  h1 {
    margin: 0;
  }
`;

const Spacer = styled.span`
  flex: 1;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 1em;

  &.active {
    padding-bottom: 0.5em;
    border-bottom: 2px solid;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>
      <HeaderLink to="/">
        short<strong>stack</strong>photography
      </HeaderLink>
    </h1>
    <Spacer />
    <NavLink to="/portfolio" activeClassName="active">
      Portfolio
    </NavLink>
    <NavLink activeClassName="active" to="/services">
      Services
    </NavLink>
    <NavLink activeClassName="active" to="/contact">
      Contact
    </NavLink>
  </HeaderContainer>
);

export default Header;
