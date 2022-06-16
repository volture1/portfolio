import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./app/store";
import FrontPage from './pages/frontPage.jsx';
import Categories from "./pages/categoryPick.jsx";
import AboutMe from "./pages/aboutMe.jsx";
import Contact from "./pages/contact.jsx";
import SnackBar from './components/SnackBar.jsx';
import SelectedCategory from './pages/SelectedCategory.jsx';
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
    <Provider store={store}>
      <BrowserRouter>
        <SnackBar />
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/category" element={<Categories />}></Route>
          <Route path="/category/:categoryID" element={<SelectedCategory />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
