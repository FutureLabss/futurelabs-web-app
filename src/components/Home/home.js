// import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./home.css"
// import Contact from "../layout/contact"
import ToolBar from '../layout/toolbar';


import React, {useState, useEffect} from 'react';
// import useScrollToView from '../hooks/useScrollToView'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import ReactPageScroller from 'react-page-scroller';
import Footer from '../layout/footer';
// import React, {Suspense, useState, useEffect} from 'react';
// import React, { Suspense } from 'react';
// import ScrollableContainer from "react-full-page-scroll";
import {Skeleton} from '@mui/material';
import { Nav } from 'react-bootstrap';

const SERVER_URL = "https://futurelabs-blog.herokuapp.com";

// const Contact = React.lazy(() => import('../layout/contact'));






export default function Home() {
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(true)
// const sectionZeroRef = useRef()
// const sectionOneRef = useRef()
// const sectionTwoRef = useRef()
// const sectionThreeRef = useRef()
// const sectionFourRef = useRef()
// const sectionFiveRef = useRef()
// let [count] = useState(0)

// useScrollToView(count,sectionZeroRef,sectionOneRef,sectionTwoRef,sectionThreeRef,sectionFourRef,sectionFiveRef);

const [ containerRef, videoRef ] = useElementOnScreen({
  root: null,
  rootMargin: "0px",
  threshold: 1
})

const [ containerRef1, videoRef1 ] = useElementOnScreen1({
  root: null,
  rootMargin: "0px",
  threshold: 0.5
})

const [ containerRef2, videoRef2 ] = useElementOnScreen2({
  root: null,
  rootMargin: "0px",
  threshold: 0.5
})

const [ containerRef3, videoRef3] = useElementOnScreen3({
  root: null,
  rootMargin: "0px",
  threshold: 0.5
})

useEffect(() => {
  axios.get(`${SERVER_URL}/?limit=3`)
  .then(data => {
    console.log(data.data.articles.data)
    setPosts(data.data.articles.data)
    setLoading(false)    
  })
  .catch(error => console.log(error))
},[])

// console.log("post ==>", posts)

return (
      
<div>

  <ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}

  
  {/* Section-One begins here */}
  
  

  {/* <ScrollableContainer animationTime={2000}> */}

  {/* <Suspense fallback={<div className="text-danger">Loading …</div>}> */}
  {/* <PageComponent> */}
  <ReactPageScroller>
  <section  className="section1 home-image1">

    <div className="container .bg-primary">
      <div className="row .bg-warning d-flex justify-space-between  mt-sm-5 pt-sm-5">
        <div className="col-9 .bg-primary px-xs-4 px-sm-0 text-white">

          <h4 className="line1">WE ARE FUTURISTS!</h4>
          <span>
          <h5 className="line2">
            We are a dedicated team<br  className="mobile-no" />
            of creative strategists,<br  className="mobile-no" />
            Designers & Developers.<br  className="mobile-no" />
          </h5>
          {/* <h6 className="line3"> We will help you turn ideas into the reality <br className="mobile-no" /> you hope to create.</h6> */}
          <p className="line3">
            We will help you turn ideas into<br  className="mobile-no" />
            the reality you hope to create...
          </p>
          </span>
        </div>
        


        {/* THE MUTE ICON IS HERE */}
        <div className="col-3 .bg-info text-center pt-5">
          <img className=".img-fluid mute" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div>

      </div>
    </div>

  </section>
 
  {/* Section-One ends here */}
  {/* </PageComponent> */}
  {/* </Suspense> */}
  









  {/* Section-Two begins here*/}
  {/* <Suspense fallback={<div className="text-danger">Loading …</div>}> */}
  {/* <PageComponent>  */}

  <section className="section2">

    <div className="mobile-no sm-divider">

      <div className="sm-1 .bg-danger">
        <div className=".bg-warning vertical-centering horizontal-centering">

          <h4 className="line1">We are Future Labs!</h4>

          <h3 className="line4">
            FutureLabs is a digital
            <br />
            agency with global
            <br />
            footprints.
          </h3>

          <h6 className="line3"> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>


        </div>
      </div>

      <div className="section2-image home-image2 sm-2 .bg-warning">
        <div class="vertical-centering text-center">
          <img src="https://res.cloudinary.com/dremo/image/upload/v1638808890/Futurelabs-logo_2_sgxejz.svg" alt=""/>
        </div>
      </div>

    </div>


    {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
    <div className="mobile-yes section2-image-mobile home-image2 .bg-warning text-white">
      <div className="vertical-centering">

        <div className=".bg-warning px-3">
          <h4 className="line1">We are Future Labs!</h4>

          <h3 className="line4">
            FutureLabs is a digital
            <br />
            agency with global
            <br />
            footprints
          </h3>

          <h6 className="line3"> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <button type="button" class="btn btn-outline-light home-button-text1 mt-4 text-white py-1 px-5">Learn More</button>

        </div>

      </div>
    </div>

      
  </section>
  {/* </PageComponent> */}
  {/* </Suspense> */}
 




  
  {/* Section-Two ends here */}






  {/* HALF-VIDEO FOR DESKTOP HERE */}
  
  {/* <Suspense fallback={<div className="text-danger">Loading …</div>}> */}
  {/* <PageComponent>  */}
  <section className="section2">
      
    {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
    <div className="mobile-no half sm-divider">

      <div  className="half sm-2 .bg-warning">


      <div ref={containerRef} className="video-container-half .text-danger .bg-danger">
        <video autoPlay="true" muted loop ref={videoRef} className="overall-half">
          {/* <Transformation endOffset="30" videoCodec="auto" /> */}
          <source 
            src="https://res.cloudinary.com/not-set/video/upload/v1644576276/FutureLabs.agency1_3_izapfv.mp4" type="video/mp4" 
          /> 
            
        
        </video> 

        <div className="parent-box3-half d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
          <div className="text-box-half .bg-danger"></div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box-half text-center .bg-info">
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
          </div>

        </div>


      </div>


         
      </div>



      {/* HALF-TEXT FOR DESKTOP HERE */}
      <div className="sm-1 .bg-danger">
        <div className=".bg-warning vertical-centering horizontal-centering">
          <h4 className="line1">We tell stories</h4>

          <h3 className="line4">
            We craft User centric
            <br />
            stories about products and
            <br />
            services that our target
            <br />
            audience finds relatable and actionable
          </h3>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>

        </div>
      </div>

    </div>
    


      
    
    {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
    <div className="mobile-yes text-white">
    
      <div ref={containerRef3} className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop ref={videoRef3} className="overall">
          {/* <Transformation endOffset="30" videoCodec="auto" /> */}
          <source 
            src="https://res.cloudinary.com/not-set/video/upload/v1644576276/FutureLabs.agency1_3_izapfv.mp4" type="video/mp4" 
          /> 
            
          
        </video> 

        <div className="parent-box3 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
          <div className="text-box .bg-danger">
            <h4 className="line1">We tell stories</h4>

            <h3 className="line4">
              We craft User centric <br className="mobile-no" />stories about products and<br className="mobile-no" /> services that our target<br className="mobile-no" /> audience finds relatable and actionable
           
            </h3>

            <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>

          </div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box-half text-center .bg-info">
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
          </div>

        </div>


      </div>
    </div>
    



  </section>
  {/* </PageComponent> */}
  {/* </Suspense> */}
  


  
  {/* Section-Three ends here */}


  {/* *********************************************************************** */}
  {/* END OF SEGMENT-ONE */}
  {/* *********************************************************************** */}









  {/* *********************************************************************** */}
  {/* SEGMENT-TWO BEGINS HERE. (A REPEAT OF SEGMENT ONE) */}
  {/* *********************************************************************** */}


  {/* <Suspense fallback={<div>Loading …</div>}> */}
  {/* <PageComponent> */}
  {/* Section-One begins here */}

  <div className="video-container .text-danger .bg-danger">
  <span ref={containerRef2}>
    <video autoPlay muted loop ref={videoRef2} className="overall">
      {/* <Transformation endOffset="30" videoCodec="auto" /> */}
      <source 
        src="https://res.cloudinary.com/not-set/video/upload/v1644590584/FutureLabs.agency1_4_mqq6ds.mp4" type="video/mp4" 
      /> 
        
      
    </video> 
  </span>
    <div className="parent-box4 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
      <div className="text-box .bg-danger">
        <h5 className="line6">
          <span className="italicize">We Strategize.</span>
          <br />
          We take our time <br className="mobile-no"/>
          sifting through Data <br className="mobile-no"/>
          and building models
        </h5>

        {/* <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link> */}


      </div>


      {/* THE MUTE ICON IS HERE */}
      <div className="mute-box text-center .bg-info">
          <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
      </div>

    </div>


  </div>
  {/* </PageComponent> */}
  {/* </Suspense> */}
 









  {/* Section-One begins here */}
  {/* <Suspense fallback={<div>Loading …</div>}> */}
  {/* <PageComponent> */}

  <div className="video-container .text-danger .bg-danger">
  <span ref={containerRef1}>

    <video autoPlay muted loop ref={videoRef1} className="overall">
      {/* <Transformation endOffset="30" videoCodec="auto" /> */}
      <source 
        src="https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4" type="video/mp4" 
      /> 
        
      
    </video> 
  </span>

    <div className="parent-box5 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
      <div className="text-box .bg-danger">
        <h5 className="line6 ">
          Seamless Cross-border <br className="mobile-no"/>
          Payments and Currency <br className="mobile-no"/> 
          Conversion
        </h5>

        <h5 className="line5 ">
          Securing Payments for Tomorrow on the Web
        </h5>
        {/* <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link> */}


      </div>


      {/* THE MUTE ICON IS HERE */}
      <div className="mute-box text-center .bg-info">
          <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
      </div>

    </div>


  </div>
  {/* </PageComponent> */}
  {/* </Suspense> */}

  {/* mmmmmmmm */}


  




  {/* *********************************************************************** */}
  {/* END OF SEGMENT TWO */}
  {/* *********************************************************************** */}






  {/* THE SECTION BELOW HOLDS THE THUMBNAILS */}

  
  {/* <Suspense fallback={<div>Loading …</div>}> */}
  {/* <PageComponent> */}
  <section className="blog_section">
    <div className="container-fluid">
      <div className="row px-2 px-sm-3 pt-4">
      <h1 className="contact mb-3 text-center">Latest Stories</h1>
      {(loading ? Array.from(new Array(3)) : posts).map((item, index) => (
        <div className="col-sm-4 py-sm-4 py-4" >
        <Nav.Link href={`https://futurelabs-blog.netlify.app/singlepost/${item ? item._id : ""}`} style={{color: 'black'}}>
          <div className="px-2 Thumbnail-parent .bg-danger">
        {
          item ? (
            <div className="Thumbnail Thumbnail-image1 bg-primary py-1 rounded" style={{backgroundImage: `url("${item.image}")`}}></div>
          ) : <Skeleton variant="rectangular" minWidth={200} height={270}/>
        }
        <div>
        {
          item ? (
            <h4 className="mt-2">{item.title}</h4>
          ) : <Skeleton variant="text" />
        }
        {
          item ? (
            <p>
              {new Date(item.createdAt).toLocaleDateString('en-us', { hour: "numeric"})}
              <hr className="under bg-warning rounded " />
            </p>
          ) : <Skeleton variant="text" width={200}/>
        }
        {
          item ? (
            <p>
                {item.description}
              </p>
          ) : (<Skeleton />)
        }
        </div>
        </div>
        </Nav.Link>
        </div>
      ))}
      </div>
    </div>



    
    {/* <Suspense fallback={<div>Loading …</div>}><Contact /></Suspense> */}
    {/* <PageComponent><Contact /></PageComponent> */}

  


  </section>
  {/* <span className="footer"> */}
    <Footer/>
  {/* </span> */}
  </ReactPageScroller>
  {/* </PageComponent> */}
  
  {/* </Suspense> */}

  {/* </ScrollableContainer> */}

 </div>
)}