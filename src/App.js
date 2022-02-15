import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/layouts/Footer";
import pageRoutes from "./router/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/layouts/Contact";
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
          <Contact />
        </Routes>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
