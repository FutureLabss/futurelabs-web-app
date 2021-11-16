import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import   { Offcanvas } from 'react-bootstrap'
import { Link } from "react-router-dom"

import './toolbar.js'

export default function ToolBar(props){
    return (
        <div className="nav text-white py-2">
    <div className="logo">
      {/* Logo image is here */}
    </div>
    

    <div className="sub-nav">
      <div>
        <div className="mobile-yes my-auto">
          <h6 className="text-white yes">
            
          </h6>
        </div>

        <div className="mobile-no my-auto">
          <h6 className="text-white noise">
            All categories
          </h6>
        </div>

      </div>

      <div className="mx-3 mx-sm-4 my-auto horizontal rounded my-auto">
        {/* Dividing hr */}
      </div>
      <Navbar  bg="" expand={false}>
  <div className="container-fluid text-decoration-none ">
  

    <Navbar.Toggle aria-controls="offcanvasNavbar  " className="bg-white text-decoration-none" /> 
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" className="bg-light text-decoration-none"
      placement="end">
       <img  className="w-50 mt-5  container"src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/> 
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header> 
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none">
         <Link to="/services"> SERVICES</Link>
         <Link to="/"> HOME</Link>
         <Link to="/about"> ABOUT</Link>
         <Link to="/strategy"> STRATEGY</Link>
         <Link to="/modelling"> 3D-MODELLING</Link>
         <Link to="/websites"> WEBSITES</Link>
         
         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </div>
    
 
</Navbar>
      <div>
      
      </div>
    </div>

  </div>

    )
}