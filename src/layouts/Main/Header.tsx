import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters={true}>

          <Typography
            variant="h5"
            noWrap={true}
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Merrikh Frontend Test
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
