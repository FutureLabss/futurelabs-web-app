import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import About from './components/About/about';
//import Home from './components/Home/home';
import Footer from './components/layout/footer';
import Blog from './Blog/Homepage'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
    <Blog />
    <Footer />
  </>,
  document.getElementById('root')
);
