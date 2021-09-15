/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql, navigateTo } from 'gatsby';

import { th } from '../style/theme';
import { FilledButton, ButtonContainer } from '../style/button';

const formField = css`
  border: 1px solid black;
  border-radius: ${th('borderRadius')}px;
  background: white;
  width: calc(100% - 1rem);
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.5rem;

  &:focus {
    border-color: ${th('main')} ${({ submitted }) => (submitted ? '' : '!important')};
    outline: currentcolor none 0px;
    box-shadow: 0px 0px 4px 0px rgba(216, 29, 125, 0.8)
      ${({ submitted }) => (submitted ? '' : '!important')};
  }

  &:invalid {
    border-color: ${({ submitted }) => (submitted ? 'red' : 'black')};
    box-shadow: ${({ submitted }) =>
      submitted ? '0px 0px 4px 0px rgba(225, 45, 57, 0.8)' : 'none'};
  }
`;

const Input = styled.input`
  ${formField}
  height: 30px;
`;

const Textarea = styled.textarea`
  ${formField}
  min-height: 100px;
`;

const Select = styled.select`
  ${formField}
  height: 50px;
  width: 100%;
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class SimpleForm extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { submitted: false };

  onClick = () => this.setState({ submitted: true });

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    }).then(() => navigateTo(form.getAttribute('action')));
  };

  render() {
    const { submitted } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query ServiceTitles {
            allContentfulService {
              edges {
                node {
                  title
                }
              }
            }
          }
        `}
        render={({ allContentfulService: { edges } }) => {
          const services = edges.map(({ node }) => node.title);

          return (
            <form
              name="contact"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="bot-field" hidden>
                Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
              </label>
              <label htmlFor="name">
                Name
                <Input
                  type="text"
                  name="name"
                  required
                  submitted={submitted}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="email">
                Email
                <Input
                  type="email"
                  name="email"
                  required
                  submitted={submitted}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="service">
                Service
                <Select name="service" required submitted={submitted} onChange={this.handleChange}>
                  <option value="">Please select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Select>
              </label>
              <label htmlFor="hearAbout">
                How did you hear about me?
                <Input
                  type="text"
                  name="hearAbout"
                  submitted={submitted}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="message">
                Message
                <Textarea
                  name="message"
                  required
                  submitted={submitted}
                  onChange={this.handleChange}
                />
              </label>
              <ButtonContainer justify="flex-end">
                <FilledButton type="submit">Send</FilledButton>
              </ButtonContainer>
            </form>
          );
        }}
      />
    );
  }
}

export default SimpleForm;
