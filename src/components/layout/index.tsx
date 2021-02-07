import React, { ReactNode } from 'react';

import Header from '../header/index';
import { GlobalStyle, Container } from './styles';
import { WindowLocation } from '@reach/router';

type Props = {
  children?: ReactNode | ReactNode[];
  location: WindowLocation;
};

const Layout: React.FC<Props> = ({ children, location }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header location={location} />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
