import styled from 'styled-components';
import { th } from './theme';

const Button = styled.button`
  padding: 0.75em 1em;
  background: ${th('main')};
  border-radius: 2px;
  border: none;
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: background 200ms ease-in-out, transform 100ms ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: bold;

  &:hover,
  &:focus {
    background: ${({ disabled }) => (disabled ? th('main') : th('mainDark'))};
  }
`;

export default Button;
