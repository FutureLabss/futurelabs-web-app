import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import About from './components/About/about';
//import Home from './components/Home/home';
// import Footer from './components/layout/footer';
import { AuthProvider } from "./contexts/AuthContext";
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
  <AuthProvider>
    <Routes>
      {
        pageRoutes.map((item, index)=>{
          return <Route key={index} path={item.path} element={<item.element />} />
        })
      }
      <Contact />
    </Routes>
    {/* <Footer /> */}
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
