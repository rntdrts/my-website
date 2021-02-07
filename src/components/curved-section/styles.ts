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
`;

export const ArrowDown = styled.div`
  height: 180px;
  width: 50vw;
  &:after {
    width: 0px;
    height: 0px;
    content: '';
    position: absolute;
    top: 0;
    z-index: 2;

    ${({ left, right, invert }: { left?: boolean, right?: boolean, invert?: boolean }) =>
      left ?
      `
        left: 0;
        border-top: 180px solid ${invert ? '#1c2023' : 'transparent'};
        border-left: 50vw solid ${invert ? 'transparent' : '#1c2023'};
      ` : right ? `
        left: 50vw;
        border-bottom: 180px solid ${invert ? 'transparent' : '#1c2023'};
        border-left: 50vw solid ${invert ? '#1c2023' : 'transparent'};
      `: null
    }
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100vw;
  background: #1c2023;
`;
//border-bottom-left-radius: 50%;
//  border-top: 100px solid red;
// border-left: 100px solid transparent;
