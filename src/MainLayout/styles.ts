import styled from "@emotion/styled";

export const Header = styled.header`
  padding: 12px 20px;
  font-size: 24px;
  color: black;
  font-weight: bold;
  height: 74px;
  display: flex;
  justify-content: flex-start;
  align-items: center
`;

export const Main = styled.div`
  padding: 50px 15px 15px;
  display: flex;
  flex-direction: column;
  justife-content: center;
  align-items: center;
  height: calc(100vh - 270px);

  @media (max-width: 910px) {
    height: calc(100vh - 20px);
  }
`;

export const Footer = styled.footer`
  padding: 12px;
  font-size: 24px;
  color: black;
  font-weight: bold;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
