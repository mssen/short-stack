import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'typeface-dancing-script';

import { th } from '../style/theme';

const HeaderText = styled.h1`
  text-align: center;
  font-weight: normal;
  font-family: 'Dancing Script', serif;
  margin: 1rem 0 0 0;
`;

const NavContainer = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const NavButton = styled.button`
  position: absolute;
  left: 1em;
  top: 0.8em;
  padding: 8px;
  border: 2px solid #000;
  border-radius: 5px;
  font-size: 1em;
  background: transparent;
  color: #000;
  display: block;

  @media (min-width: ${th('phone')}px) {
    display: none;
  }

  &:focus,
  &:hover {
    background: #fff;
    color: #000;
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: ${(props) => (props.open ? 'block' : 'none')};

  @media (min-width: ${th('phone')}px) {
    display: block;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1em;
  display: block;

  @media (min-width: ${th('phone')}px) {
    display: inline-block;
    margin-right: 1em;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 1em;
  color: ${th('gray600')};

  &.active {
    color: ${th('gray700')};
    font-weight: bold;
    padding-bottom: 0.5em;
    border-bottom: 2px solid ${th('main')};
  }
`;

class Header extends React.Component {
  state = { open: false };

  toggleMenu = () => this.setState((prevState) => ({ open: !prevState.open }));

  render() {
    const { open } = this.state;

    return (
      <header>
        <HeaderText>Short Stack Photography</HeaderText>
        <NavContainer role="navigation">
          <NavButton id="toggle" aria-expanded={open} type="button" onClick={this.toggleMenu}>
            Menu
          </NavButton>
          <NavList open={open}>
            <NavItem>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/galleries/" activeClassName="active">
                Galleries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services/" activeClassName="active">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact/" activeClassName="active">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about/" activeClassName="active">
                About
              </NavLink>
            </NavItem>
          </NavList>
        </NavContainer>
      </header>
    );
  }
}

export default Header;
