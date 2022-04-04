import ToolBar from "../layout/toolbar";
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from 'react-page-scroller';
import "./services.css"
import { Link } from "react-router-dom"


export default function Services() {
    let width = window.screen.width
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


   {/* Section-One begins here */}
   <ReactPageScroller>
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box1 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Strategy
            </h5>
                <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


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
              src="https://res.cloudinary.com/not-set/video/upload/v1643984600/Rude_Ui_animation_co2vvu.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box2 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Product Design
            </h5>
                <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


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
              src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box3 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Websites
            </h5>
                <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>



    {/* Section-One begins here */}
    <section className="section1 services-image6">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                        Branding &<br className="mobile-no" /> Advertising
                    </h5>
                    <button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn more</button>

                    {/* <h6 className="line3"> We develop corporate & brand strategies that <br className="mobile-no" /> set you apart</h6> */}


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}


    


     {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box5 d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    3D Modelling
                </h5>
                    <Link to="/modelling"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>

            
                {/* <h6 className="line3"> We develop corporate & brand strategies that <br className="mobile-no" /> set you apart</h6> */}


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>

    
    



    {/* Section-One begins here */}
    <section className="section1 services-image5">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                        NFTs & Digital Art
                    </h5>
                    <button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn more</button>

                    {/* <h6 className="line3"> We develop corporate & brand strategies that <br className="mobile-no" /> set you apart</h6> */}


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
 
    <Contact isMobile={width}/>
    <Footer />
    </ReactPageScroller> 
</div>
)
}