import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import SocialLinks from '../components/socialLinks';
import PageHeader from '../style/pageHeader';
import { th } from '../style/theme';

const ContactContainer = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 1.5rem;

  @media (min-width: ${th('phone')}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SocialLinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  & > a {
    margin-right: 1.5rem;
  }

  & > a > svg {
    height: 35px;
    width: 35px;
  }
`;

const Contact = () => (
  <Layout>
    <PageHeader>Contact</PageHeader>
    <ContactContainer>
      <StaticQuery
        query={graphql`
          {
            contentfulPage(pageTitle: { eq: "Contact" }) {
              text {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        `}
        render={({ contentfulPage }) => (
          <div>
            <h3>Let&apos;s get in touch!</h3>
            <article
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: contentfulPage.text.childContentfulRichText.html,
              }}
            />
            <SocialLinksContainer>
              <SocialLinks />
            </SocialLinksContainer>
          </div>
        )}
      />
      <div>
        <ContactForm />
      </div>
    </ContactContainer>
  </Layout>
);

export default Contact;
