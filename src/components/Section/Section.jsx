import React from 'react';
import PropTypes from 'prop-types';
import { Container, Titel } from './Section.styled';

const Section = ({ titel, children }) => {
  return (
    <Container>
      <Titel>{titel}</Titel>
      {children}
    </Container>
  );
};

Section.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
