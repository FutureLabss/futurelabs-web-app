import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import pageRoutes from "./router/HomeRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>     
          {pageRoutes.map((item) => {
            return <Route path={item.path} element={<item.element />} />;
          })} 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
