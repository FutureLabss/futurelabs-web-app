import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import About from './components/About/about';
//import Home from './components/Home/home';
import { AuthProvider } from './Blog/contexts/AuthContext'
import Footer from './components/layout/footer';
import pageRoutes from './router/routes';
import {
  BrowserRouter ,
  Routes ,
  Route
}from "react-router-dom";
import Contact from './components/layout/contact'; 
// import { AppBar, Toolbar} from '@mui/material';
import Header from './Blog/Header';
//import Blog from './Blog/Homepage'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Header />
  <AuthProvider>
      <Routes>
        {
          pageRoutes.map((item)=>{
            return <Route path={item.path} element={<item.element />} />
          })
        }
        <Contact />
      </Routes>
    </AuthProvider>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
