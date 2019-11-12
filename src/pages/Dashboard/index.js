import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import ScreenLoading from '~/components/Loading';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <Container>{loading ? <ScreenLoading /> : <>Dash</>}</Container>;
}
