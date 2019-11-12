import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container, ScreenLoading } from './styles';

export default function Loading() {
  return (
    <Container>
      <ScreenLoading>
        <FaSpinner size={40} color="#fff" />
      </ScreenLoading>
    </Container>
  );
}
