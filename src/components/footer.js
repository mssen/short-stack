import React from 'react';
import styled from 'styled-components';

import SocialLinks from './socialLinks';
import { th } from '../style/theme';

const FooterContainer = styled.footer`
  background: ${th('gray100')};
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin-right: 1rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialLinks />
  </FooterContainer>
);

export default Footer;
