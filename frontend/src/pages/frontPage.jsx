import React from 'react'
import InfoBox from '../components/Infobox.jsx';
const frontPage = () => {
  return (
    <div className="container" style={styles.container}>
      <img alt="hwat" src="../assets/bg.jpg"/>
      <div className="page" style={styles.page}>
        <div className="cards" style={styles.cards}>
          {/* This will be a function posting the card div in a for loop */}
          <InfoBox></InfoBox>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    width: "50%",
    backgroundColor: "#c4e6c3",
    justifyContent: "center",
    flexDirection: " column",
    borderRadius: "5px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
  },
};
export default frontPage