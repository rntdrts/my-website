/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* stylelint-disable */

import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-top: 72px;

`;

export const Content = styled.div`
  width: 100vw;
  background: #1c2023;
`;

export const TopContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 100vw;

  svg {
    path {
      fill: #131618;
    }
  }
`;

export const BottomContainer = styled.div`
  svg {
    path {
      fill: #1c2023;
    }
  }
`;
