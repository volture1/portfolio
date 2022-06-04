import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FrontPage from './pages/frontPage.jsx';
import SnackBar from './components/snackBar.jsx';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackBar/>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
