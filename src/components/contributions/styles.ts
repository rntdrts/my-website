import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  min-height: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  padding: 180px 0 60px;

  .separator {
    height: 640px;
    margin-top: 44px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Title = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #73808d;
`;

export const Card = styled.a`
  text-decoration: none;
  margin: 24px 0;
  width: 100%;

  > svg {
    transform: rotate(0deg) !important;
    margin: auto 0;
  }

  &:hover {
    p,
    h4 {
      color: #00c8e3;
    }

    svg.github {
      path {
        stroke: #00c8e3;
      }
    }

    svg.medium {
      path {
        fill: #00c8e3;
      }
    }
  }
`;

export const CardDate = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.5px;
  color: #73808d;
  margin: 0 0 16px 16px;
`;

export const CardTitle = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 0;
`;
