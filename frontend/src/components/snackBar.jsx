import { Typography, Box } from '@mui/material';
import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "PROJECTS", link: "category" },
  { name: "ABOUT", link: "about-me" },
  { name: "CONTACT", link: "contact" }
];
const SnackBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ExploreIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VOLTURE.ORG
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => {
                  return navigate(item.link);
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const styles = {
  textDecoration: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#9898b3",
    width: "100%",
    height: "60px",
  },
};
export default SnackBar