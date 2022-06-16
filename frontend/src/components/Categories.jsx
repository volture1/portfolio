import React from "react";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "./CategorySlice.jsx";

import AppsIcon from "@mui/icons-material/Apps";
import GamesIcon from "@mui/icons-material/Games";
import MapIcon from '@mui/icons-material/Map';
import ViewInArIcon from "@mui/icons-material/ViewInAr";
const Categories = () => {
  const navigate = useNavigate();
  const storedCategory = useSelector(selectCategories);
  console.log(storedCategory)

  return (
    <div>
      <div className="Categories" style={styles.page}>
        {storedCategory.category.map((category) => (
          <Card
            sx={{
              width: "100%",
              minHeight: 60,
              marginTop: "5px",
              display: "flex",
            }}
            elevation={3}
            onClick={() => {
              return navigate(category.route);
            }}
          >
            <Box
              sx={{
                marginTop: 2,
                marginLeft: 2,
                paddingRight: "15px",
                width: "20px",
              }}
            >
              {category.category === "Applications" && <AppsIcon />}
              {category.category === "Games" && <GamesIcon />}
              {category.category === "Level design" && <MapIcon />}
              {category.category === "3D modelling" && <ViewInArIcon />}
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <CardActionArea>
              <CardContent>
                <Typography>{category.category}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <div className="Categories" style={styles.page}>
  //       {storedCategory.category.map((category) => (
  //         <Card
  //           sx={{ width: 250, backgroundColor: "#73796f" }}
  //           key={category}
  //           style={styles.card}
  //           variant="outlined"
  //           onClick={() => {
  //             return navigate(category.route);
  //           }}
  //         >
  //           <CardContent sx={{ minHeight: 50 }}>
  //             <Typography variant="h5">
  //               {category.category}
  //             </Typography>
  //           </CardContent>
  //           <CardMedia
  //             component="img"
  //             height="194"
  //             width="150"
  //             image={category.image}
  //             alt="categoryPics"
  //           />
  //         </Card>
  //       ))}
  //     </div>
  //   </div>
  // );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "70vh",
  },
  card: {
    marginLeft: "20px",
  },
};

export default Categories;