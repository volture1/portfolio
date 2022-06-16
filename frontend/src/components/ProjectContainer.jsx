import React from 'react'

import { useParams } from "react-router-dom";
//import ProjectContainer from "../components/ProjectContainer.jsx";
import CategoryApplications from "./../components/CategoryApplications.jsx";
import CategoryGames from "./../components/CategoryGames.jsx";
import CategoryLevelDesign from "./../components/CategoryLevelDesign.jsx";
import Category3Dmodelling from "./../components/Category3Dmodelling.jsx";

const ProjectContainer = (props) => {
    const params = useParams();

    if (params.categoryID === "applications") {
      return (
        <div className="projectComponentContainer" style={styles.overlayContainer}>
          <h3 style={styles.topPart}> Applications
          </h3>
            <CategoryApplications />
        </div>
      );
    } else if (params.categoryID === "games") {
      return (
        <div style={styles.overlayContainer}>
          <h3 style={styles.topPart}> Games</h3>
          <CategoryGames />
        </div>
      );
    } else if (params.categoryID === "level-design") {
      return (
        <div style={styles.overlayContainer}>
          <h3 style={styles.topPart}> Level design</h3>
          <CategoryLevelDesign />
        </div>
      );
    } else if (params.categoryID === "3d-modelling") {
      return (
        <div style={styles.overlayContainer}>
          <h3 style={styles.topPart}> 3d Modelling</h3>
          <Category3Dmodelling />
        </div>
      );
    } else {
      return <div>Didn't find the category...maybe something went wrong?</div>;
    }
 
}

const styles = {
  overlayContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
};
export default ProjectContainer