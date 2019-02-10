import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { th } from '../style/theme';

const menuOpen = css`
  &:before {
    transform: translateY(12px) rotate(135deg);
  }

  &:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  & div {
    transform: scale(0);
  }
`;

const Container = styled.button`
  margin: 1em;
  width: 40px;
  padding: 0;
  border: none;
  background: transparent;

  &:after,
  &:before,
  & div {
    background-color: ${th('gray800')};
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  ${({ open }) => (open ? menuOpen : '')}
`;

const NavIcon = ({ open }) => (
  <Container open={open}>
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
