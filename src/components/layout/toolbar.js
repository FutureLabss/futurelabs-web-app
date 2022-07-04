// import { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import   { Offcanvas } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import {icons} from "../../assets"
import ScrollIntoView from 'react-scroll-into-view'

import './toolbar.css'


export default function ToolBar(props){
    // let location = props
    // console.log("Hello", location.path)
    // const location = useLocation();
    // console.log(location);

    // useEffect(() => {
    //   const path = location.pathname.split('/').pop()
      
    // })


    return (
        <div className="nav text-white">
    <div className="picyture">
      <Nav.Link href="/">{/* Logo image is here */}</Nav.Link>
    </div>
    

    <div className="sub-nav">
      <div>
        <div className="mobile-yes my-auto">
          <h6 className="text-white yes">
            
          </h6>
        </div>

        <div className="mobile-no my-auto">
          <h6 className="text-white noise">
            {/* All categories */}
          </h6>
        </div>

      </div>

      <div className="mx-3 mx-sm-4 my-auto horizontal rounded my-auto">
        {/* Dividing hr */}
      </div>
      <Navbar  bg="" expand={false}>
  <div className="container-fluid text-decoration-none textd">
  

    <Navbar.Toggle aria-controls="offcanvasNavbar" className=" text-decoration-none textd" /> 
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" className="bg-light text-decoration-none textd"
      placement="end">
      <div className="nav_actions">

      <NavLink to="/"> <img height="30" width="30" src={icons.futurelabs} alt=""/> </NavLink>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel " className="textd"></Offcanvas.Title>
      </Offcanvas.Header> 
      </div>
      <Offcanvas.Body className="textd menu_links">

      

           
        
        <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none textd">
        <NavLink className="textd menu_button text-muted link" to="/about"><div className="title--effect">ABOUT</div></NavLink>
        <NavLink className="textd text-muted link" to="/services"><div className="title--effect">SERVICES</div></NavLink>
        
         <NavLink className="textd .my-2 text-muted link" to="/strategy"><div className="title--effect">STRATEGY</div></NavLink>

          {/* <Link className="textd mt-2 text-muted" to="/products"><strong>PRODUCTS</strong></Link> */}
          <NavLink className="textd .my-2 text-muted link" to="/products"><div className="title--effect">PRODUCTS</div></NavLink>

          {/* <Link className="textd mt-2 text-muted" to="/websites"> <strong>WEBSITES</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/websites"><div className="title--effect">WEBSITES</div></NavLink>

         <NavLink className="textd .my-2 text-muted link" to="/branding"><div className="title--effect">BRANDING</div></NavLink>

         {/* <Link className="textd mt-2 text-muted" to="/modelling"> <strong>3-D MODELLING</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/modelling"><div className="title--effect">3-D MODELLING</div></NavLink>

        

        

         {/* <Link className="textd mt-2 text-muted" to="/digitalart"> <strong>DIGITAL ART</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/digitalart"><div className="title--effect">DIGITAL ARTS & NFTs</div></NavLink>
         <NavLink className="textd .my-2 text-muted link contact-link" to="#contact">
          <ScrollIntoView selector="#contact">
            <div className="contact-link">CONTACT US</div>
          </ScrollIntoView>
         </NavLink>
         {/* <Link className="textd my-2 text-muted" to="/about2"> <strong><strong>NEW ABOUT</strong></strong> </Link> */}

         

         <Nav.Link className="textd .my-2 text-muted link" href="https://futurelabs-blog.netlify.app/"><div className="title--effect">BLOG</div></Nav.Link>
         

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