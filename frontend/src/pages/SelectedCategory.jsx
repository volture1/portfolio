import React from 'react'
import { useParams } from 'react-router-dom';

import ProjectContainer from "../components/ProjectContainer.jsx"
import CategoryApplications from "./../components/CategoryApplications.jsx";
import CategoryGames from "./../components/CategoryGames.jsx";
import CategoryLevelDesign from "./../components/CategoryLevelDesign.jsx";
import Category3Dmodelling from "./../components/Category3Dmodelling.jsx";
const SelectedCategory = () => {
  
  return (
    <div style={styles.pageContainer}>
      <div className="overlayContainer" style={styles.overlayContainer}>
      <ProjectContainer />
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  overlayContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "45%",
  },
};

export default SelectedCategory;