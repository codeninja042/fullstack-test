import React from "react";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import {AppBar} from "../app-bar";

export const BaseLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Box sx={{display: "flex"}}>
      <AppBar title="Traffic" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          marginTop: "64px",
        }}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
