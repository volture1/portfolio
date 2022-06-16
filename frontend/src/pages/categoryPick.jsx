import React from 'react'
import Categories from '../components/Categories.jsx';
const categoryPick = () => {
  return (
    <div className="CategoryPageContainer" style={styles.page}> 
      <div className="CategoryContainer" style={styles.container}>
        {/* For loop that spits out the categories OR hardcoded */}
        <Categories></Categories>
      </div>
    </div>
  )
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "75%",
    justifyContent: "center",
    paddingTop: "5px",
  },
};
export default categoryPick