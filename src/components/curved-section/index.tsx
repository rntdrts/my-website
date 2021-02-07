import React, { ReactNode } from 'react';
import { Container, ArrowDown, Content, Row } from './styles';

type Props = {
  children?: ReactNode | ReactNode[];
};

const CurvedSection: React.FC<Props> = ({ children }) => {
  console.log(children);
  return (
    <Container>
      <Row>
        <ArrowDown left />
        <ArrowDown right />
      </Row>
      <Content>{children}</Content>
      <Row>
        <ArrowDown left invert />
        <ArrowDown right invert />
      </Row>
    </Container>
  );
};

export default CurvedSection;
