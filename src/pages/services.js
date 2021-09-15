import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';
import { BigButton, ButtonContainer } from '../style/button';
import { th } from '../style/theme';
import SmallerContainer from '../style/smallerContainer';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
`;

const Card = styled.section`
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  margin-bottom: 3rem;
`;

const GridCard = styled(Card)`
  flex: 1 1 300px;
  margin-left: 2rem;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: ${th('main')};
  border-radius: 4px 4px 0 0;
  padding: 1.5rem;

  & > h3 {
    margin: 0;
    color: white;
  }
`;

const GridCardBody = styled.article`
  padding: 2rem;
  padding-top: 0;
`;

const CardBody = styled.article`
  padding: 2rem;

  & > h4 {
    margin-top: 3rem;
    white-space: pre-wrap;
  }

  & > h4:first-child {
    margin-top: 0;
  }
`;

const PriceContainer = styled.p`
  padding: 1.5rem;
  padding-bottom: 0;
  margin-bottom: -1.5rem;
  margin: 0;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Duration = styled.span`
  color: ${th('gray500')};
`;

const Services = () => (
  <Layout>
    <PageHeader>Services</PageHeader>
    <StaticQuery
      query={graphql`
        query Services {
          allContentfulService {
            edges {
              node {
                order
                title
                price
                priceSecondayText
                description {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulService: { edges } }) => {
        const sorted = edges
          .map(({ node }) => node)
          .sort((left, right) => left.order - right.order);
        const last = sorted.slice(-1).pop();
        const grid = sorted.slice(0, -1);

        const gridList = grid.map((item) => (
          <GridCard>
            <CardHeader>
              <h3>{item.title}</h3>
            </CardHeader>
            <PriceContainer>
              <Price>${item.price}</Price> <Duration>/ {item.priceSecondayText}</Duration>
            </PriceContainer>
            <GridCardBody
              dangerouslySetInnerHTML={{
                __html: item.description.childContentfulRichText.html,
              }}
            />
          </GridCard>
        ));

        return (
          <SmallerContainer>
            <GridContainer>{gridList}</GridContainer>
            <Card>
              <CardHeader>
                <h3>{last.title}</h3>
              </CardHeader>
              <CardBody
                dangerouslySetInnerHTML={{
                  __html: last.description.childContentfulRichText.html,
                }}
              />
            </Card>
            <ButtonContainer>
              <Link to="/contact/">
                <BigButton>Get in touch</BigButton>
              </Link>
            </ButtonContainer>
          </SmallerContainer>
        );
      }}
    />
  </Layout>
);

export default Services;
