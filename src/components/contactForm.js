/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from '../style/button';

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validate={(values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = 'Required';
      }

      return errors;
    }}
  >
    {({ isValid }) => (
      <Form name="contact" method="POST" data-netlify="true">
        <label htmlFor="name">
          Name: <Field type="text" name="name" />
        </label>
        <ErrorMessage name="name" component="div" />
        <label htmlFor="email">
          Email: <Field type="email" name="email" />
        </label>
        <ErrorMessage name="email" component="div" />
        <label htmlFor="message">
          Message: <Field component="textarea" name="message" />
        </label>
        <ErrorMessage name="message" component="div" />
        <Button type="submit" disabled={!isValid}>
          Send
        </Button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
