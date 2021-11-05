import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Home from './components/Home/home';
import pageRoutes from './router/routes'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/layout/footer';
// import './index.css';
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
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
