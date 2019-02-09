import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import { OutlinedButton } from '../style/button';

const Message = styled.p`
  margin-bottom: 2rem;
`;

const Success = () => (
  <Layout>
    <h3>Success!</h3>
    <Message>Thanks for contacting me! I will be in touch with you shortly.</Message>
    <Link to="/">
      <OutlinedButton>Back to Home</OutlinedButton>
    </Link>
  </Layout>
);

export default Success;
