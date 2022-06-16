import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";

import { useSelector } from "react-redux";
import { selectCategories } from "./CategorySlice.jsx";

const CategoryLevelDesign = () => {
  const storedCategory = useSelector(selectCategories);
  return (
    <div className="test" style={styles.category}>
      {storedCategory.category[2].projects.length === 0 && (
        <div>
          <h3>Oops, looks like i haven't added any projects... </h3>
        </div>
      )}
      {storedCategory.category[2].projects.map((project) => (
        <Card sx={{ marginBottom: 5 }}>
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt="projectpic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <Box sx={{ display: "flex", marginTop: 1 }}>
              <BuildIcon fontSize="small" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: 1 }}
              >
                {project.tools}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" target="_blank" href={project.link}>
              {project.linkText}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

const styles = {
  category: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  card: {
    width: "100%",
    backgroundColor: "#dfb6b9a4",
    marginBottom: "20px",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
    height: "20vh",
  },
};
export default CategoryLevelDesign