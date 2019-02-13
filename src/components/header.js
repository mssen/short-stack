import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import 'typeface-dancing-script';

import { th } from '../style/theme';
import NavIcon from './navIcon';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${th('phone')}px) {
    justify-content: space-between;
    margin-right: 1rem;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
  font-weight: normal;
  font-family: 'Dancing Script', serif;
  font-size: 36px;
  margin: 1rem 0 0 0;

  @media (max-width: ${th('phone')}px) {
    font-size: 30px;
  }
`;

const NavContainer = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media (max-width: ${th('phone')}px) {
    background-color: ${th('gray200')};
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: ${(props) => (props.open ? 'block' : 'none')};

  @media (max-width: ${th('phone')}px) {
    padding: 0;
    margin-top: 3rem;
  }

  @media (min-width: ${th('phone')}px) {
    display: block;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1em;
  display: block;

  @media (max-width: ${th('phone')}px) {
    margin-top: 1.5rem;
  }

  @media (min-width: ${th('phone')}px) {
    display: inline-block;
    margin-right: 1em;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${th('gray600')};
  font-size: 20px;

  &.active {
    color: ${th('gray700')};
    font-weight: bold;
  }

  @media (max-width: ${th('phone')}px) {
    font-size: 24px;

    &.active {
      color: ${th('gray700')};
      font-weight: bold;
      padding-left: 0.5em;
      border-left: 2px solid ${th('main')};
    }
  }

  @media (min-width: ${th('phone')}px) {
    margin: 0 1em;

    &.active {
      padding-bottom: 0.5em;
      border-bottom: 2px solid ${th('main')};
    }
  }
`;

const BodyScroll = createGlobalStyle`
body {
  overflow: ${({ open }) => (open ? 'hidden' : 'auto')};
}
`;

class Header extends React.Component {
  state = { open: false };

  toggleMenu = () => this.setState((prevState) => ({ open: !prevState.open }));

  render() {
    const { open } = this.state;

    return (
      <header>
        <BodyScroll open={open} />
        <HeaderContainer>
          <NavIcon
            open={open}
            id="toggle"
            aria-expanded={open}
            type="button"
            onClick={this.toggleMenu}
          />
          <HeaderText>Short Stack Photography</HeaderText>
        </HeaderContainer>
        <NavContainer role="navigation" open={open}>
          <NavList open={open}>
            <NavItem>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gallery/" activeClassName="active">
                Gallery
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
