import styled, { css } from 'styled-components';
import { th } from './theme';

const button = css`
  padding: 0.75em 1em;
  border-radius: ${th('borderRadius')}px;
  cursor: pointer;
  transition: background 200ms ease-in-out, transform 100ms ease;

  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: bold;
`;

export const FilledButton = styled.button`
${button}
  background: ${th('main')};
  border: none;
  color: white;

  &:hover,
  &:focus {
    background: ${({ disabled }) => (disabled ? th('main') : th('mainDark'))};
  }
`;

export const OutlinedButton = styled.button`
  ${button}
  background: transparent;
  border: 2px solid ${th('main')};
  color: ${th('main')};

  &:hover,
  &:focus {
    background: ${th('main')};
    color: white;
  }
`;

export const BigButton = styled(FilledButton)`
  font-size: 24px;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};

  @media (max-width: ${th('phone')}px) {
    & > button {
      flex: 1;
    }
  }
`;
