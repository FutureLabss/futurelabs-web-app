// import { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import   { Offcanvas } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";



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
  

    <Navbar.Toggle aria-controls="offcanvasNavbar  " className="bg-white text-decoration-none textd" /> 
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" className="bg-light text-decoration-none textd"
      placement="end">
      <NavLink to="/"> <img  className="w-50 mt-5  container" src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/> </NavLink>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel " className="textd"></Offcanvas.Title>
      </Offcanvas.Header> 
      <Offcanvas.Body className="textd">

      

           

        <Nav className="justify-content-end flex-grow-1 pe-3 noise text-decoration-none textd">
        <NavLink className="text-muted container-fluid my-0 py-0 link" to="/about"><h4 className="text-dark title--effect">ABOUT</h4></NavLink>
        <NavLink className="text-muted container-fluid my-0 py-0 link" to="/services"><h4 className="text-dark title--effect">SERVICES</h4></NavLink>
         {/* <Nav.Link className="textd my-2 text-muted" href="/"><strong>HOME</strong> </Nav.Link> */}

  
         {/* <Nav.Link className="textd .my-2 text-muted" href="/about2"><strong>ABOUT</strong></Nav.Link>
         <Nav.Link className="textd .my-2 text-muted" href="/services2"><strong>SERVICES</strong></Nav.Link> */}

         {/* <Link className="textd mt-2 text-muted" to="/strategy"> <strong>STRATEGY</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/strategy"><strong className="title--effect">STRATEGY</strong></NavLink>

          {/* <Link className="textd mt-2 text-muted" to="/products"><strong>PRODUCTS</strong></Link> */}
          <NavLink className="textd .my-2 text-muted link" to="/products"><strong className="title--effect">PRODUCTS</strong></NavLink>

          {/* <Link className="textd mt-2 text-muted" to="/websites"> <strong>WEBSITES</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/websites"><strong className="title--effect">WEBSITES</strong></NavLink>

         <NavLink className="textd .my-2 text-muted link" to="/branding"><strong className="title--effect">BRANDING</strong></NavLink>

         {/* <Link className="textd mt-2 text-muted" to="/modelling"> <strong>3-D MODELLING</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/modelling"><strong className="title--effect">3-D MODELLING</strong></NavLink>

        

        

         {/* <Link className="textd mt-2 text-muted" to="/digitalart"> <strong>DIGITAL ART</strong></Link> */}
         <NavLink className="textd .my-2 text-muted link" to="/digitalart"><strong className="title--effect">DIGITAL ARTS & NFTs</strong></NavLink>
         {/* <Link className="textd my-2 text-muted" to="/about2"> <strong><strong>NEW ABOUT</strong></strong> </Link> */}

         

         <Nav.Link className="textd .my-2 text-muted link" href="https://futurelabs-blog.netlify.app/"><strong className="title--effect">BLOG</strong></Nav.Link>
         

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