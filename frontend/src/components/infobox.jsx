import React from 'react'
import { useSelector } from "react-redux";
import { selectCategories } from "./CategorySlice.jsx";

const Infobox = () => {
  //const storedCategory = useSelector(selectCategories);
  return (
    <div>
      {" "}
      <p style={styles.textDecoration}>
        I literally know nothing 
      </p>
    </div>
  );
}
const styles = {
  textDecoration: {
    display: "flex",
    color: "#ca1b1b",
    width: "150px",
    justifyContent: "center",
  },
};


export default Infobox