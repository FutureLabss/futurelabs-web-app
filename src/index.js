import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './Blog/contexts/AuthContext'
import Footer from './components/layout/footer';
import pageRoutes from './router/routes';
import {
  BrowserRouter ,
  Routes ,
  Route
}from "react-router-dom";
import Contact from './components/layout/contact'; 
import Header from './Blog/Header';


ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
    <Header />
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
