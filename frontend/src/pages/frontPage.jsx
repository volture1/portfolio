import React from 'react'
import InfoBox from '../components/infobox.jsx';
const frontPage = () => {
  return (
    <div style={styles.container}>
      <InfoBox></InfoBox>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
}
export default frontPage