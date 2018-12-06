import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';

const MainContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <MainContainer>
      <Image />
    </MainContainer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
