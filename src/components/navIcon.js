import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { th } from '../style/theme';

const menuOpen = css`
  &:before {
    transform: translateY(10px) rotate(135deg);
  }

  &:after {
    transform: translateY(-10px) rotate(-135deg);
  }

  & div {
    transform: scale(0);
  }
`;

const Container = styled.button`
  margin: 1em;
  width: 35px;
  padding: 0;
  border: none;
  background: transparent;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }

  &:after,
  &:before,
  & div {
    background-color: ${th('gray800')};
    border-radius: 3px;
    content: '';
    display: block;
    height: 4px;
    margin: 6px 0;
    transition: all 0.2s ease-in-out;
  }

  ${({ open }) => (open ? menuOpen : '')}

  @media (min-width: ${th('phone')}px) {
    display: none;
  }
`;

const NavIcon = ({ open, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container open={open} {...props}>
    <div />
  </Container>
);

NavIcon.propTypes = {
  open: PropTypes.bool,
};

NavIcon.defaultProps = {
  open: false,
};

export default NavIcon;
