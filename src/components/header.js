import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderText = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
`;

const NavContainer = styled.nav`
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
  <header>
    <HeaderText>
      short<strong>stack</strong>photography
    </HeaderText>
    <NavContainer role="navigation">
      <button id="toggle" aria-expanded="false" type="button">
        Menu
      </button>
      <ul id="menu">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/galleries" activeClassName="active">
            Galleries
          </NavLink>
        </li>
      </ul>
      <li>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </NavContainer>
  </header>
);

export default Header;
