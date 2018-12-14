import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const MainContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-image: url(https://source.unsplash.com/a8pXN9_5R2M/1600x900);
`;

const IndexPage = () => (
  <Layout>
    <MainContainer />
  </Layout>
);

export default IndexPage;
