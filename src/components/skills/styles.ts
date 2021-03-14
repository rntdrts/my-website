import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  min-height: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 180px 0 60px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
`;

export const Title = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;

  text-align: center;
  letter-spacing: 1px;

  color: #e5e5e5;
  margin: 49px 0;
`;

export const Description = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  line-height: 30px;
  letter-spacing: 0.5px;

  color: #73808d;
  margin: 0 0 20px;
`;

export const TechRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const TechColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Tech = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  padding-left: 66px;
  align-items: center;
  min-height: 36px;

  letter-spacing: 0.5px;

  color: #73808d;

  &:after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 36px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #101214;
  }
`;
