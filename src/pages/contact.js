import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Button from '../style/button';
import PageHeader from '../style/pageHeader';

const Contact = () => (
  <Layout>
    <PageHeader>Contact</PageHeader>
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
        <React.Fragment>
          <h3>Let&apos;s get in touch!</h3>
          <article
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: contentfulPage.text.childContentfulRichText.html,
            }}
          />
        </React.Fragment>
      )}
    />
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label htmlFor="name">
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <Button type="submit">Send</Button>
      </p>
    </form>
  </Layout>
);

export default Contact;
