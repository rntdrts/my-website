import { WindowLocation } from '@reach/router';
import React from 'react';
import {
  Container,
  LinksContainer,
  ListLinks,
  Item,
  Link,
  ExternalLink,
} from './styles';
import Github from '../../svgs/github.svg';
import LinkedIn from '../../svgs/linkedin.svg';

const links = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
  },
  {
    key: 'work',
    title: 'Work',
    path: '/work',
  },
  {
    key: 'about',
    title: 'About',
    path: '/about',
  },
  {
    key: 'contact',
    title: 'Contact',
    path: '/contact',
  },
];

const Header = ({ location }: { location: WindowLocation }): JSX.Element => (
  <Container>
    <LinksContainer>
      <ListLinks>
        {links.map(link => (
          <Item key={link.key}>
            <Link
              to={link.path}
              active={(location.pathname === link.path).toString()}
            >
              {link.title}
            </Link>
          </Item>
        ))}
        <Item>
          <ExternalLink
            href='https://github.com/rntdrts'
            target='_blank'
            rel='noreferrer'
          >
            <Github id='github' />
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink
            href='https://linkedin.com/in/rntdrt/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn id='linkedIn' />
          </ExternalLink>
        </Item>
      </ListLinks>
    </LinksContainer>
  </Container>
);

export default Header;
