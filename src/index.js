import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import About from './components/About/about';
//import Home from './components/Home/home';
import pageRoutes from './router/routes'
import {
  BrowserRouter ,
  Routes,
  Route,
//  Link
} from "react-router-dom";
import Footer from './components/layout/footer';
import ToolBar from './components/layout/toolbar';
import Contact from './components/layout/contact';
import Blog from './Blog/Homepage'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Blog />,
  document.getElementById('root')
);


