import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container, Text } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress,
    [0.178, 0.198],
    ['0%', '-100%']
  );

  return <Container style={{ y: headerY }}>
    <Text>Header</Text>
  </Container>;
};

export default Header;
