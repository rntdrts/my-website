/* stylelint-disable */

import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const isTruth = (boolString: string) => boolString === 'true';

export const Container = styled.header`
  max-width: 1440px;
  margin: 0 auto;
`;

export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const ListLinks = styled.ul`
  list-style-type: none;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  margin-top: 129px;
`;

export const Item = styled.li`
  margin: auto 32px;
`;

export const Link = styled(GatsbyLink)`
  font-family: inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-decoration: none;
  letter-spacing: 1px;
  color: ${({ active }: { active: string }) =>
    isTruth(active) ? '#73808D' : '#e5e5e5'};
  cursor: ${({ active }: { active: string }) =>
    isTruth(active) ? 'default' : 'pointer'};

  ${({ active }: { active: string }) =>
    !isTruth(active) &&
    `
    &:hover {
      color: #00c8e3;
      text-decoration: underline;
    }`}
`;

export const ExternalLink = styled.a`
  text-decoration: none;

  &:hover {
    #github {
      path {
        stroke: #00c8e3;
      }
    }

    #linkedIn {
      path {
        fill: #00c8e3;
      }
    }
  }
`;
