import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import ChevronLeftIcon from '../images/chevronLeft.svg';
import ChevronRightIcon from '../images/chevronRight.svg';
import { th } from '../style/theme';

const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
  },
  exit: {
    opacity: 0,
  },
});

const QuoteContainer = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 35em;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  min-height: 250px;
  justify-items: center;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  border-radius: 0 0 4px 4px;
  background-color: white;
  border-top: 4px solid ${th('main')};

  @media (max-width: ${th('phone')}px) {
    min-height: 500px;
  }
`;

const Blockquote = styled.blockquote`
  line-height: 1.5em;
  font-style: italic;
`;

const Cite = styled.cite`
  color: gray;
  align-self: flex-end;
  font-style: normal;
`;

const arrow = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const LeftArrow = styled.button`
  grid-column: 1;
  ${arrow}
`;

const RightArrow = styled.button`
  grid-column: 3;
  ${arrow}
`;

class Testimonials extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    quotes: this.props.quotes,
    currentIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextQuote();
    }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  previousQuote = () =>
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.quotes.length,
    }));

  nextQuote = () =>
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.quotes.length) % prevState.quotes.length,
    }));

  render() {
    const { quotes, currentIndex } = this.state;
    const currentQuote = quotes[currentIndex];

    return (
      <Container>
        <LeftArrow onClick={this.previousQuote}>
          <ChevronLeftIcon />
        </LeftArrow>
        <PoseGroup>
          <QuoteContainer key={currentQuote.key}>
            <Blockquote>{currentQuote.message}</Blockquote>
            <Cite>- {currentQuote.client}</Cite>
          </QuoteContainer>
        </PoseGroup>
        <RightArrow onClick={this.nextQuote}>
          <ChevronRightIcon />
        </RightArrow>
      </Container>
    );
  }
}

Testimonials.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      client: PropTypes.string,
      key: PropTypes.string,
    })
  ).isRequired,
};

export default Testimonials;
