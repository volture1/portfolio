import logo from './logo.svg';
import './App.css';
import FrontPage from './pages/frontPage.jsx';

function App() {
  return (
    <div className="App">
      {/* <-- <FrontPage style={styles.frontPage}></FrontPage>  */}
    </div>
  );
}

const styles = {
  frontPage: {
    backgroundColor: "#ca1b1b",
    width: "500px",
    height: "200px",
  },
  homeContainer: {
    marginTop: "2rem",
    paddingBottom: "8rem",
    display: "flex",
    justifyContent: "center",
  },
};
export default App;
