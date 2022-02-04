import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import "./services.css"
import { Link } from "react-router-dom"


export default function Services() {
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


   {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box1 d-flex justify-space-between ontop .bg-warning px-5 text-white">
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
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1643984600/Rude_Ui_animation_co2vvu.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box2 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    Product Design
                </h5>

                <Link to="/products"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>


    {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box3 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    Websites
                </h5>

                <Link to="/websites"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>


    {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box4 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    3D Modelling
                </h5>

                <Link to="/modelling"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>

    {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box5 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                   Digital Art
                </h5>

                <Link to="/digitalart"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>



    {/* Section-One begins here */}
   <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop className="">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box6 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    Branding & Advertising
                </h5>

                <Link to="/branding"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>



    {/* ****** */}


    




    







    <Contact />












</div>
)
}