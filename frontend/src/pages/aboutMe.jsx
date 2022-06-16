import React from 'react'
import AboutBox from "../components/AboutBox.jsx";
const aboutMe = () => {
  return (
    <div style={styles.aboutBoxContainer}>
      <AboutBox></AboutBox>
    </div>
  );
}

const styles = {
  aboutBoxContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
};
export default aboutMe