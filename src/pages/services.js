import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHeader from '../style/pageHeader';
import { th } from '../style/theme';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
`;

const Card = styled.section`
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);

  flex: 1 1 250px;

  margin-right: 1rem;
  margin-bottom: 3rem;
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

const CardBody = styled.article`
  padding: 1.5rem;

  & > p {
    margin: 0;
  }
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
          <Card>
            <CardHeader>
              <h3>{item.title}</h3>
            </CardHeader>
            <CardBody>
              <p>
                <Price>${item.price}</Price> <Duration>/ {item.priceSecondayText}</Duration>
              </p>
              <p
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: item.description.childContentfulRichText.html,
                }}
              />
            </CardBody>
          </Card>
        ));

        return (
          <React.Fragment>
            <GridContainer>{gridList}</GridContainer>
            <section>
              <header>
                <h3>{last.title}</h3>
              </header>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: last.description.childContentfulRichText.html,
                }}
              />
            </section>
          </React.Fragment>
        );
      }}
    />
  </Layout>
);

export default Services;
