import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./home.css"
import Contact from "../layout/contact"
import ToolBar from '../layout/toolbar';


const SERVER_URL = "https://futurelabs-blog.herokuapp.com";



export default function Home() {
const [posts, setPosts] = useState([])

useEffect(() => {
  axios.get(`${SERVER_URL}/?limit=3`)
  .then(data => {
    // console.log(data.data.articles)
    // console.log("image url ==>", data.data.articles.data[0].image)
    setPosts(data.data.articles.data)
    
  })
  .catch(error => console.log(error))
},[])

console.log("post ==>", posts)

return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


  {/* Section-One begins here */}
  <section className="section1 home-image1">

    <div className="container .bg-primary">
      <div className="row .bg-warning d-flex justify-space-between  mt-sm-5 pt-sm-5">
        <div className="col-9 .bg-primary px-xs-4 px-sm-0 text-white">

          <h4 className="line1">WE ARE FUTURISTS!</h4>
          
          <h5 className="line2">
            We create indelible <br  className="mobile-no" />
            digital experiences.
          </h5>
          {/* <h6 className="line3"> We will help you turn ideas into the reality <br className="mobile-no" /> you hope to create.</h6> */}

        </div>
        


        {/* THE MUTE ICON IS HERE */}
        <div className="col-3 .bg-info text-center pt-5">
          <img className=".img-fluid mute" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div>

      </div>
    </div>

  </section>
  {/* Section-One ends here */}








  {/* Section-Two begins here*/}
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
  {/* Section-Two ends here */}






  {/* HALF-VIDEO FOR DESKTOP HERE */}
  <section className="section2">
      
    {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
    <div className="mobile-no half sm-divider">

      <div className="half sm-2 .bg-warning">


      <div className="video-container-half .text-danger .bg-danger">
        <video autoPlay muted loop className="overall-half">
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
         
      <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="overall">
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
  {/* Section-Three ends here */}


  {/* *********************************************************************** */}
  {/* END OF SEGMENT-ONE */}
  {/* *********************************************************************** */}









  {/* *********************************************************************** */}
  {/* SEGMENT-TWO BEGINS HERE. (A REPEAT OF SEGMENT ONE) */}
  {/* *********************************************************************** */}



  {/* Section-One begins here */}
  <div className="video-container .text-danger .bg-danger">
    <video autoPlay muted loop className="overall">
      {/* <Transformation endOffset="30" videoCodec="auto" /> */}
      <source 
        src="https://res.cloudinary.com/not-set/video/upload/v1644590584/FutureLabs.agency1_4_mqq6ds.mp4" type="video/mp4" 
      /> 
        
      
    </video> 

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









  {/* Section-One begins here */}
  <div className="video-container .text-danger .bg-danger">
    <video autoPlay muted loop className="overall">
      {/* <Transformation endOffset="30" videoCodec="auto" /> */}
      <source 
        src="https://res.cloudinary.com/not-set/video/upload/v1644591166/Comp_1_2_1_ezhho4.mp4" type="video/mp4" 
      /> 
        
      
    </video> 

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


  {/* mmmmmmmm */}


  




  {/* *********************************************************************** */}
  {/* END OF SEGMENT TWO */}
  {/* *********************************************************************** */}






  {/* THE SECTION BELOW HOLDS THE THUMBNAILS */}
  
  <section>
    <div className="container-fluid">
      <div className="row px-2 px-sm-3 pt-4">
      <h1 className="contact mb-5 text-center">Latest Stories</h1>

      {
        posts.map(post => {
        return(
        <div className="col-sm-4 py-sm-4 py-4">
          <div className="px-2 Thumbnail-parent .bg-danger">
            <div className="Thumbnail Thumbnail-image1 bg-primary py-1 rounded" style={{backgroundImage: `url("${post.image}")`}}>
              {/* photo here */}
            </div>
            <div>
              <h4 className="mt-2">{post.title}</h4>
              <p>
              {new Date(post.createdAt).toLocaleDateString('en-us', { hour: "numeric"})}
                <hr className="under bg-warning rounded " />
              </p>
              <p>
                {post.description}
              </p>
            </div>
          </div>
        </div>
        )
      })}
     
      


          

      </div>


    </div>



    {/* THESE PARENTS ONLY APPEAR ON MOBILE */}

    {/* <div className="Thumbnail-parent bg-danger mobile-yes-thumb">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>


    <div className="Thumbnail-parent bg-warning">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>


    <div className="Thumbnail-parent bg-info">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>
 */}



<Contact />

  </section>

    











</div>
)
}