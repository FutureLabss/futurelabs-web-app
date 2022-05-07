import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import About from './components/About/about';
//import Home from './components/Home/home';
// import Footer from './components/layout/footer';
import pageRoutes from './router/routes';
import {
  BrowserRouter ,
  Routes ,
  Route
}from "react-router-dom";
import Contact from './components/layout/contact'; 

//import Blog from './Blog/Homepage'
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {
        pageRoutes.map((item)=>{
          return <Route path={item.path} element={<item.element />} />
        })
      }
      <Contact />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
  document.getElementById('root')
);
