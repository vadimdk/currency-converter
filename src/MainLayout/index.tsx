import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { Footer, Header, Main } from "./styles";
import flagImg from "./../assets/icons8-ukraine-48.png"

interface ILayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header>
        <Box width="48px" height="48px">
          <img src={flagImg} alt="flag" />
        </Box>
        <Typography variant="h5" ml="20px">Currency converter</Typography>
      </Header>
      <Divider/>
      <Main>{children}</Main>
      <Divider/>
      <Footer>
      <Typography variant="body2">2023 All right reserved</Typography>
      </Footer>
    </>
  );
};

export default MainLayout;
