import axios from 'axios'
import "./home.css"
import ToolBar from '../layout/toolbar';
import React, {useState, useEffect} from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useElementOnScreen4 from '../hooks/useElementOnScreen4';
import useSound from '../hooks/useSound'
import ReactPageScroller from '../pageScroll';
import Footer from '../layout/footer';
import Contact from '../layout/contact';
import {icons} from '../../assets'
import {Skeleton} from '@mui/material';
// import { Nav } from 'react-bootstrap';
import  Style from "../animations/style.module.css"
import { useNavigate, Link  } from "react-router-dom";


const SERVER_URL = "https://futurelabs-blog.onrender.com";

export default function Home() {

const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(true)
const [mobile, setMobile] = useState(false)

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

const [ containerRef4, videoRef4] = useElementOnScreen4({
  root: null,
  rootMargin: "0px",
  threshold: 0.5
})

const {sound, sound1, sound2, sound3, handleSound } = useSound(videoRef,videoRef1,videoRef2,videoRef4)

let width = window.screen.width
let value = 3
useEffect(() => {
  document.body.style.overflow = "hidden";
  if(width <= 600){
    setMobile(true)
  }

},[width])

useEffect(() => {
  setLoading(true)
  axios.get(`${SERVER_URL}/?limit=${value}`)
  .then(res => {
    let data = res.data.articles.data
    setPosts(data)
    setLoading(false)    
  })
  .catch(error => console.log(error))
},[value])

const renderTitle = (value) => {
  let shortenTitle = value.split(' ', 9)
  shortenTitle = shortenTitle.join(' ').replace(shortenTitle[8], '...')
  return shortenTitle
} 

window.addEventListener('resize', function(){
  let width = window.screen.width
  if(width <= 600){
    setMobile(true)
  }else{
    setMobile(false)
  }
})

const history = useNavigate()

return (     
<>

  <ToolBar />
 {/* <Suspense fallback={<div className="text-danger">Loading …</div>}> */}
  {/* <PageComponent> */}
  <ReactPageScroller renderAllPagesOnFirstRender>
  <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef4}>
              <video autoPlay muted loop ref={videoRef4} poster={icons.homeImage4} className="overall">
                <source 
                src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669901267/Homepage_video_qd3fs5.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-3 mx-sm-7 text-white">
        <div className="text-box-home .bg-danger">
        <h4 className="paragraph-1">
            We transform ideas into phenomenal <br className="mobile-no" /> products with unprecedented foresight
            <br /> for outliers
            
          </h4>
          <Link to="/services">
                    <button
                      type="button"
                      class="btn btn-outline-warning home-button-text mt-4 text-white py-1 px-5"
                    >
                      Learn More
                    </button>
          </Link>
        </div>


        {/* THE MUTE ICON IS HERE */}
        {/* <div className="mute-box .bg-info" onClick={() => handleSound(2)}>
          {sound2 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div> */}
          {
            mobile ? ( 
              <span></span>
            )
            :
            (
              <span className={Style.scroll_btn}>
	          <a href=".">
		        <span className={Style.mouse}>
			        <span>
			        </span>
		        </span>
	          </a>
            {/* <p className={Style.scroll_txt}>scroll me</p> */}
            </span>
            )
          }
          
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
        <div className=".bg-warning vertical-centering horizontal-centering-home">

          <h4 className="paragraph-3" style={{fontWeight: 500, letterSpacing: 3.0, color: "orange"}}>WE ARE FUTURELABS !</h4>

          <h4 className="heading-2" style={{lineHeight: "120%"}}>
            We are<br /> A digital agency
            <br />
            With global footprints.
            <br />
           
          </h4>

          <h6 className="paragraph-2" style={{margin: "24px 0 8px 0"}}>Giving Users the best experience while turning ideas <br className="mobile-no" />into impactful solutions one happy client per time.</h6>

          {/* <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button> */}
          <Link to="/about">
                    <button
                      type="button"
                      class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5"
                    >
                      Learn More
                    </button>
          </Link>

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

        <div className=".bg-warning px-4">
          <h4 className="line12" style={{fontWeight: 500, letterSpacing: 3.0, fontSize: "14px", fontFamily: "Inter" }}>WE ARE FUTURELABS!</h4>

          <h4 className="line4">
            FutureLabs is a digital
            <br />
            agency with global
            <br />
            footprints
          </h4>

          <h6 className="paragraph-2" style={{color: "white"}}> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <Link to="/about">
                    <button
                      type="button"
                      class="btn btn-outline-warning home-button-text-mobile mt-4 text-dark py-1 px-5"
                    >
                      Learn More
                    </button>
          </Link>
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
          <video autoPlay muted loop ref={videoRef} poster={icons.about2} className="overall-half">
          <source 
            src="https://res.cloudinary.com/usenmfon/video/upload/v1655290725/FutureLabs/Comp_1_1_rr5xub.mp4" type="video/mp4" 
          /> 
         </video> 
        <div className="parent-box3-half d-flex justify-space-between ontop .bg-warning px-5 mx-sm-7 text-white">
          <div className="text-box-half .bg-danger"></div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box .bg-info" onClick={() => handleSound(0)}>
          {sound ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

        </div>


      </div>


         
      </div>



      {/* HALF-TEXT FOR DESKTOP HERE */}
      <div className="sm-1 .bg-danger">
        <div className=".bg-warning vertical-centering horizontal-centering">
          <h3 className="heading-2">We tell stories</h3>

          <h4 className="paragraph-2" style={{margin: "0 0 8px 0"}}>
            We are gifted storytellers, 

            driving viral brand adoption <br /> through
            compelling and relatable
            stories about our <br />products and services.
            <br />
            {/* audience finds relatable and actionable */}
          </h4>

          <Link to="/strategy">
                    <button
                      type="button"
                      class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5"
                    >
                      Learn More
                    </button>
          </Link>
        </div>
      </div>

    </div>
    


      
    
    {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
    <div className="mobile-yes text-white">
    
      <div ref={containerRef3} className="video-container .text-danger .bg-danger">
        
            <video autoPlay muted loop ref={videoRef3} poster={icons.about2} className="overall">
 
          <source 
            src="https://res.cloudinary.com/usenmfon/video/upload/v1655290725/FutureLabs/Comp_1_1_rr5xub.mp4" type="video/mp4" 
          /> 
        </video> 
         

        <div className="overlay-mobile ontop .bg-warning px-3 mx-sm-7 text-white" style={{display: "flex", flexDirection: "column"}}>
          <div className="text-box .bg-danger">
            <h3 className="heading-2">We tell stories</h3>

            <h4 className="paragraph-2">
            We are gifted storytellers, <br className="mobile-no" />driving viral brand adoption through compelling and<br className="mobile-no" /> relatable stories about our products and services.<br className="mobile-no" />
           
            </h4>

            

          </div>


          {/* THE MUTE ICON IS HERE */}
          <div style={{ width: "inherit", display: "flex", justifyContent: "space-between", marginTop: "16px",}}>
          <Link to="/strategy">
                    <button
                      type="button"
                      class="btn btn-outline-warning home-button-text text-dark py-2 px-5"
                      style={{marginLeft: "25px"}}
                    >
                      Learn More
                    </button>
          </Link>
          <div className=".bg-info" style={{paddingTop: "10px"}} onClick={() => handleSound(3)}>
          {sound3 ? 
            <img className=".img-fluid mute-img  .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img  .bg-danger" src={icons.mute} alt="" />
          }
          </div>
          </div>

        </div>


      </div>
    </div>
    



  </section>

  <div className="video-container .text-danger .bg-danger">
  <span ref={containerRef1}>
      <video autoPlay muted loop ref={videoRef1} poster={icons.homeImage2} className="overall">
      <source 
        src="https://res.cloudinary.com/usenmfon/video/upload/v1655290226/FutureLabs/flhy_-_Copy_abrth0.mp4" type="video/mp4" 
      /> 
    </video> 
  </span>
    <div className="overlay-mobile d-flex justify-space-between ontop .bg-warning px-3 mx-sm-7 text-white">
      <div className="text-box-2 .bg-danger">
        <h4 className="paragraph-2">
          <span className="heading-2">We Strategize</span>
          <br />
          In God we trust, others must  
          bring data, we take our time  <br className="mobile-no"/>
          sifting through data and building models.
        </h4>
      </div>
      <div className="mute-box .bg-info" onClick={() => handleSound(1)}>
          {sound1 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
      </div>    
    </div>
  </div>

  <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef2}>
              <video autoPlay muted loop ref={videoRef2} poster={icons.homeImage3} className="overall">
                <source 
                src="https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay-mobile d-flex justify-space-between ontop .bg-warning px-3 mx-sm-7 text-white">
        <div className="text-box-2 .bg-danger">
          <h4 className="heading-2">
          Securing Payments <br className="mobile-no" /> For Tomorrow on the Web
           
          </h4>


          <h5 className="paragraph-2">
            Seamless Cross-border
            Payments and Currency
            Conversion
          </h5>
        </div>
        <div className="mute-box .bg-info" onClick={() => handleSound(2)}>
          {sound2 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

      </div>


  </section>
 {
    mobile ? (
      loading ? Array.from(new Array(value)) : posts).map((item, index) => (
          <div className="col-sm-12 py-sm-4 py-4 blog_mobile">
          <div onClick={() => history(`/singlepost/${item ? item._id : ""}`)} style={{color: 'black', cursor: "pointer"}}>
            <div className="px-2 py-5 Thumbnail-parent .bg-danger" style={{height: '100vh'}}>
          {
            item ? (
              <div className="Thumbnail Thumbnail-image1 bg-primary py-1 rounded" style={{backgroundImage: `url("${item.image}")`}}></div>
            ) : <Skeleton variant="rectangular" minWidth={200} height={270}/>
          }
          <div>
          {
            item ? (
              <h4 className="mt-2">{renderTitle(item.title)}</h4>
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
          </div>
          </div>
        )
    ) : (
      <section className="blog_section">
        <div className="container-fluid blog_desktop py-4">
        <div className="row px-2 px-sm-3 pt-4">
        <h1 className="contact mb-3 text-center">Latest Stories</h1>
        {(loading ? Array.from(new Array(value)) : posts).map((item, index) => (
          <div className="col-md-4 " >
          <div onClick={() => history(`/singlepost/${item ? item._id : ""}`)} style={{color: 'black', cursor: "pointer"}}>
            <div className="px-2 Thumbnail-parent .bg-danger">
          {
            item ? (
              <div className="Thumbnail Thumbnail-image1 bg-primary py-1 rounded" style={{backgroundImage: `url("${item.image}")`}}></div>
            ) : <Skeleton variant="rectangular" minWidth={200} height={270}/>
          }
          <div>
          {
            item ? (
              <h5 className="mt-1">{renderTitle(item.title)}</h5>
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
          </div>
          </div>
        ))}
        </div>
        </div>
      </section>
    )
  }
  <Contact isMobile={width}/>
  <Footer />
  </ReactPageScroller>  
 </>
)}