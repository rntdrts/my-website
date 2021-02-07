/* stylelint-disable */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
  height: 1060px;
  background-size: cover;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 130px;
  width: 498px;
  margin-bottom: 1.45rem;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
`;

export const Title = styled.h1`
  font-family: Inter;
  font-weight: ${({ fontWeight }: { fontWeight?: number }) =>
    fontWeight || 300};
  font-size: 64px;
  line-height: 84px;
  letter-spacing: 1px;
  color: #e5e5e5;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Description = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 31px;

  line-height: 44px;
  letter-spacing: 0.5px;

  color: #73808d;
  margin: 44px 0 64px 0;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 31px;

  background: #ffffff;
  border-radius: 24px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  text-align: center;
  color: #131618;
  margin: 0 auto 300px 0;

  > svg {
    margin-left: 12px;
  }
`;
