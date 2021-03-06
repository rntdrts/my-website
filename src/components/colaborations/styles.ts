import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  min-height: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.p`
  margin-top: 120px;
  flex: 1;
  font-family: Inter;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.5px;

  color: #73808d;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: rows;

  ${({ flex = false }: { flex?: boolean }) =>
    flex &&
    `
  flex: 1;
  margin: 80px 0;
`}
`;

export const Card = styled.div`
  position: relative;
  background: linear-gradient(180deg, #73808d -68.36%, #25292e 100%), #25292e;
  background-blend-mode: hue;
  mix-blend-mode: normal;
  border-radius: 24px;
  border: 4px solid #131618;

  &:hover {
    background: linear-gradient(
        180deg,
        rgba(0, 200, 227, 0.1) -68.36%,
        rgba(0, 200, 227, 0.1) 100%
      ),
      #00c8e3;
    mix-blend-mode: normal;
    border: 4px solid #00c8e3;
    box-sizing: border-box;
    border-radius: 24px;

    p {
      color: #00c8e3;
    }
  }

  > div:first-child {
    width: 440px;
    height: 390px;
    border-radius: inherit;
  }
`;

export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  margin: 36px;
  width: calc(100% - 72px);
`;

export const CardTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 44px;

  letter-spacing: 1px;

  color: #ffffff;
`;

export const CardText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  letter-spacing: 0.5px;

  margin: 0;

  /* Dark Grey/60 */

  color: #73808d;
`;
