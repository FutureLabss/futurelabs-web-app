import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import   { Offcanvas } from 'react-bootstrap'

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
  <div className="container-fluid ">
  

    <Navbar.Toggle aria-controls="offcanvasNavbar  " className="bg-white" /> 
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" className="bg-light"
      placement="end">
       <img  className="w-50 mt-5  container"src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/> 
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 ">
          <Nav.Link href="#action1">SERVICES</Nav.Link>
          <Nav.Link href="#action2">ABOUT</Nav.Link>
          <Nav.Link href="#action2">BLOG</Nav.Link>
          <Nav.Link href="#action1">SERVICES</Nav.Link>
          <Nav.Link href="#action2">ABOUT</Nav.Link>
          <Nav.Link href="#action2">BLOG</Nav.Link>
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