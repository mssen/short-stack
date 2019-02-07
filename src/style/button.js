import styled from 'styled-components';
import { th } from './theme';

const Button = styled.button`
  padding: 0.75em 1em;
  background: ${th('main')};
  border-radius: 2px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background 200ms ease-in-out, transform 100ms ease;

  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;

  &:hover,
  &:focus {
    background: ${th('mainDark')};
  }
`;

export default Button;
