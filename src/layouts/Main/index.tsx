import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";

const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
    </>
  );
};
export default MainLayout;
