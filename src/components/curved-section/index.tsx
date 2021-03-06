import React, { ReactNode } from 'react';

import Curved from '../../svgs/curved.svg';
import { Container, Content, DarkContainer } from './styles';

type Props = {
  children?: ReactNode | ReactNode[];
};

const CurvedSection: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <DarkContainer>
        <Curved />
      </DarkContainer>
      <Content>{children}</Content>
      <Curved />
    </Container>
  );
};

export default CurvedSection;
