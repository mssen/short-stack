import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';
import { BigButton, ButtonContainer } from '../style/button';
import { th } from '../style/theme';
import SmallerContainer from '../style/smallerContainer';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 3rem;
`;

const Card = styled.section`
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`;

const GridCard = styled(Card)`
  grid-column: span ${(props) => props.span};
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
                span
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

        const gridList = sorted.map((item) => (
          <GridCard key={item.title} span={item.span}>
            <CardHeader>
              <h3>{item.title}</h3>
            </CardHeader>
            {item.price && (
              <PriceContainer>
                <Price>${item.price}</Price> <Duration>/ {item.priceSecondayText}</Duration>
              </PriceContainer>
            )}
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
