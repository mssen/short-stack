/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled, { css } from 'styled-components';

import { th } from '../style/theme';
import { FilledButton } from '../style/button';

const formField = css`
  border: 1px solid #7b8794;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 700px) {
    & > button {
      flex: 1;
    }
  }
`;

class SimpleForm extends React.Component {
  state = { submitted: false };

  onClick = () => this.setState({ submitted: true });

  render() {
    const { submitted } = this.state;
    return (
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <label htmlFor="name">
          Name <Input type="text" name="name" required submitted={submitted} />
        </label>
        <label htmlFor="email">
          Email <Input type="email" name="email" required submitted={submitted} />
        </label>
        <label htmlFor="message">
          Message <Textarea name="message" required submitted={submitted} />
        </label>
        <ButtonContainer>
          <FilledButton type="submit" onClick={this.onClick}>
            Send
          </FilledButton>
        </ButtonContainer>
      </form>
    );
  }
}

export default SimpleForm;
