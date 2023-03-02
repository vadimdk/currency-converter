import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SwapBtn = styled.div`
  margin-top: 7px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #1565c0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 910px) {
    margin-top: 25px;
    margin-right: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexBoxWrapper = styled(Box)`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  width: 90%;

  @media (max-width: 910px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;
