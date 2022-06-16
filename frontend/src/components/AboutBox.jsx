import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Typography, CardActions, Button } from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const AboutBox = () => {
  return (
    <Paper
      elevation={3}
      sx={{ width: "700px", height: "250px", display: "flex" }}
    >
      <Box>
        <CardMedia
          component="img"
          height="250"
          sx={{ width: 250 }}
          image="https://images.cdn.yle.fi/image/upload/f_auto,fl_progressive/q_auto/w_6000,h_3375,c_crop,x_0,y_9/w_500/dpr_2/v1570008804/39-5955395d946e04d6291.jpg"
          alt="Paella dish"
        />
      </Box>
      <Box>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            {" "}
            Tobias Östergren
          </Typography>
          <Divider variant="middle" sx={{ marginBottom: "10px" }} />
          <Typography>
            I'm a fullstack developer with a passion for games. I have been
            working with 3d modelling, level design and coding.{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" target="_blank" href="www.google.com">
            Instagram
          </Button>
        </CardActions>
      </Box>
    </Paper>
  );
}

export default AboutBox