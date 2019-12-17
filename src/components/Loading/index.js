import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import Proptypes from 'prop-types';

import { Container, ScreenLoading } from './styles';

export default function Loading({ height, size }) {
  return (
    <Container>
      <ScreenLoading height={height}>
        <FaSpinner size={size} color="#fff" />
      </ScreenLoading>
    </Container>
  );
}

Loading.propTypes = {
  height: Proptypes.number.isRequired,
  size: Proptypes.number.isRequired,
};
