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
  <div className="container-fluid text-decoration-none textd">
  

    <Navbar.Toggle aria-controls="offcanvasNavbar  " className="bg-white text-decoration-none textd" /> 
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" className="bg-light text-decoration-none textd"
      placement="end">
       <img  className="w-50 mt-5  container"src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/> 
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel " className="textd"></Offcanvas.Title>
      </Offcanvas.Header> 
      <Offcanvas.Body className="textd">
        <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none textd container-fluid">
           <Nav.Link className="text-muted container-fluid" href="/services"><h3 className="text-dark">WHAT WE DO <br/>COMPANY<br/>CONTACT</h3></Nav.Link>
         <Nav.Link className="text-muted container-fluid" href="/">HOME</Nav.Link>
         <Nav.Link className="text-muted container-fluid" href="/about"> ABOUT</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/services">SERVICES</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/strategy">STRATEGY</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/modelling">3D-MODELLING</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/products">PRODUCTS</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/websites">WEBSITES</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/digitalart"> DIGITAL-ART</Nav.Link>
          <Nav.Link className="text-muted container-fluid" href="/branding">BRANDING AND ADS</Nav.Link>
           
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