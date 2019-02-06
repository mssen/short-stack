import React from 'react';

import Layout from '../components/layout';
import Button from '../style/button';

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
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
