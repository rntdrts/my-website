import React, { ReactNode } from 'react';

import Subtract from '../../svgs/subtract';
import { Container, Content, TopContainer, BottomContainer } from './styles';

type Props = {
  children?: ReactNode | ReactNode[];
};

const CurvedSection: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <TopContainer>
        <Subtract />
      </TopContainer>
      <Content>{children}</Content>
      <BottomContainer>
        <Subtract viewBox='0 1 1920 125.5' />
      </BottomContainer>
    </Container>
  );
};

export default CurvedSection;
