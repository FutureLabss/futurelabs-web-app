import axios from 'axios'
import "./home.css"
import ToolBar from '../layout/toolbar';
import React, {useState, useEffect} from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useSound from '../hooks/useSound'
import ReactPageScroller from '../pageScroll';
import Footer from '../layout/footer';
import Contact from '../layout/contact';
import {icons} from '../../assets'
import {Skeleton} from '@mui/material';
// import { Nav } from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";


const SERVER_URL = "https://futurelabs-blog.herokuapp.com";

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

const {sound, sound1, sound2, sound3, handleSound } = useSound(videoRef,videoRef1,videoRef2)

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
  <section  className="section1 home-image1">

    <div className="container .bg-primary">
      <div className="row .bg-warning d-flex justify-space-between  mt-sm-5 pt-sm-5">
        <div className="col-9 .bg-primary px-xs-4 px-sm-0 text-white">

          {/* <h4 className="line1"> We are Futurists!</h4> */}
          <h6 className="line3" style={{lineHeight: "35px"}}>
            We are a dedicated team of creative and innovative strategists,
            <br />
            Designers, Developers, Product Managers, Project Managers,
            <br />
            and Business Leaders; let’s turn your ideas into 
            <br />
            let’s turn your ideas into  <br className="mobile-no" /> products in record time.

          </h6>
        </div>
        


        {/* THE MUTE ICON IS HERE */}
        {/* <div className="col-3 .bg-info text-center pt-5">
          <img className=".img-fluid mute" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div> */}

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
            We are a digital
            <br />
            agency with global
            <br />
            footprints.
          </h3>

          <h6 className="line3"> Giving Users the best experience while turning ideas <br className="mobile-no" /> into impactful solutions one happy client per time</h6>

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
          <video autoPlay muted loop ref={videoRef} poster={icons.about2} className="overall-half">
          <source 
            src="https://res.cloudinary.com/usenmfon/video/upload/v1655290725/FutureLabs/Comp_1_1_rr5xub.mp4" type="video/mp4" 
          /> 
         </video> 
        <div className="parent-box3-half d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
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
          <h4 className="line1">We tell stories</h4>

          <h3 className="line4">
            We are gifted storytellers, 
            <br />
            driving viral brand adoption through compelling and 
            <br />
            relatable stories about our products and services.
            <br />
            {/* audience finds relatable and actionable */}
          </h3>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>
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
         

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
          <div className="text-box .bg-danger">
            <h4 className="line1">We tell stories</h4>

            <h3 className="line3">
            We are gifted storytellers, <br className="mobile-no" />driving viral brand adoption through compelling and<br className="mobile-no" /> relatable stories about our products and services.<br className="mobile-no" />
           
            </h3>

            <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>

          </div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box .bg-info" onClick={() => handleSound(3)}>
          {sound3 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
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
    <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
      <div className="text-box .bg-danger">
        <h5 className="line6">
          <span className="italicize">We Strategize.</span>
          <br />
          In God we trust, <br className="mobile-no"/>
          others must bring data, <br className="mobile-no"/>
          we take our time sifting <br className="mobile-no"/>through data and building models.
        </h5>
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

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
        <div className="text-box .bg-danger">
          <h5 className="line6 ">
            Seamless Cross-border <br className="mobile-no"/>
            Payments and Currency <br className="mobile-no"/> 
            Conversion
          </h5>

          <h5 className="line5 ">
            Securing Payments for Tomorrow on the Web
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
          <div className="col-sm-4 py-sm-4 py-4 blog_mobile">
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
        <div className="container-fluid blog_desktop">
        <div className="row px-2 px-sm-3 pt-4">
        <h1 className="contact mb-3 text-center">Latest Stories</h1>
        {(loading ? Array.from(new Array(value)) : posts).map((item, index) => (
          <div className="col-sm-4 py-sm-4 py-4" >
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