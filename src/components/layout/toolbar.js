import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import   { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'



import './toolbar.js'

export default function ToolBar(props){
    return (
        <div className="nav text-white">
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

        {/* <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none textd container-fluid"> */}
           <Nav.Link className="text-muted container-fluid" href="/services2"><h3 className="text-dark">WHAT WE DO <br/>COMPANY<br/>CONTACT</h3></Nav.Link>
         {/* <Nav.Link className="text-muted container-fluid" href="/"><i class="fa fa fa-home" aria-hidden="true"></i>HOME</Nav.Link> */}
         {/* <Nav.Link className="text-muted container-fluid" href="/about"><i class="fa fa fa-user-circle" aria-hidden="true"></i> ABOUT</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/services"><i class="fa-brands fa-servicestack"></i>SERVICES</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/strategy"><i class="fa-duotone fa-chess"></i>STRATEGY</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/modelling"><i class="fa-solid fa-cubes"></i>3D-MODELLING</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/products"><i class="fa-brands fa-product-hunt"></i>PRODUCTS</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/websites"><i class="fa fa-safari" aria-hidden="true"></i>WEBSITES</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/digitalart"><i class="fa fa-picture-o" aria-hidden="true"></i> DIGITAL-ART</Nav.Link> */}
          {/* <Nav.Link className="text-muted container-fluid" href="/branding"><i class="fa-brands fa-figma"></i>BRANDING AND ADS</Nav.Link> */}
        {/* </Nav>   */}

           

        <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none textd">
         <Link className="textd my-2 text-muted" to="/"><i class="fa fa fa-home" aria-hidden="true"></i> <strong>HOME</strong> </Link>

         {/* <Link className="textd mt-2 text-muted" to="/about"> <strong>ABOUT</strong> </Link> */}
         <Link className="textd .my-2 text-muted" to="/about2"><i class="fa fa fa-user" aria-hidden="true"></i><strong>ABOUT</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/services"><strong>SERVICES</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/services2"><i class="fa fa fa-superpowers" aria-hidden="true"></i><strong>SERVICES</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/strategy"> <strong>STRATEGY</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/strategy2"> <i class="fa fa fa-superpowers" aria-hidden="true"></i><strong>STRATEGY</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/modelling"> <strong>3-D MODELLING</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/modelling2"><i class="fa fa fa-car" aria-hidden="true"></i> <strong>3-D MODELLING</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/products"><strong>PRODUCTS</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/products2"><i class="fa fa fa-cart-plus" aria-hidden="true"></i><strong>PRODUCTS</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/websites"> <strong>WEBSITES</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/websites2"> <i class="fa fa fa-wikipedia-w" aria-hidden="true"></i><strong>WEBSITES</strong></Link>

         {/* <Link className="textd mt-2 text-muted" to="/digitalart"> <strong>DIGITAL ART</strong></Link> */}
         <Link className="textd .my-2 text-muted" to="/digitalart2"><i class="fa fa-picture-o" aria-hidden="true"></i> <strong>DIGITAL ART</strong></Link>
         {/* <Link className="textd my-2 text-muted" to="/about2"> <strong><strong>NEW ABOUT</strong></strong> </Link> */}
         

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