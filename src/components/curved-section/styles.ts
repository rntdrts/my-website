/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* stylelint-disable */

import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100vw;
  padding-top: 72px;

  svg:last-child {
    transform: rotate(180deg);
  }
`;

export const Content = styled.div`
  width: 100vw;
  background: #1c2023;
`;

export const DarkContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  background: #1c2023;

  svg {
    path {
      fill: #131618;
    }
  }
`;
