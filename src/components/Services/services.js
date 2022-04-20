import ToolBar from "../layout/toolbar";
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from 'react-page-scroller';
import { Link } from "react-router-dom"
import useElementOnScreen from '../hooks/useElementOnScreen'
import useElementOnScreen1 from '../hooks/useElementOnScreen1'
import useElementOnScreen2 from '../hooks/useElementOnScreen2'
import useElementOnScreen3 from '../hooks/useElementOnScreen3'
import useElementOnScreen4 from '../hooks/useElementOnScreen4'
// import useElementOnScreen5 from '../hooks/useElementOnScreen5'
import "./services.css"
import {icons} from '../../assets'
import useSound from '../hooks/useSound'


export default function Services() {
    let width = window.screen.width

    const [ containerRef, videoRef ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    })

    const [ containerRef1, videoRef1 ] = useElementOnScreen1({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    })

    const [ containerRef2, videoRef2 ] = useElementOnScreen2({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    })
    const [ containerRef3, videoRef3 ] = useElementOnScreen3({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    })
    const [ containerRef4, videoRef4 ] = useElementOnScreen4({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    })
    // const [ containerRef5, videoRef5 ] = useElementOnScreen5({
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 1,
    // })

    const { sound, sound1, sound2, sound3, sound4, handleSound } = useSound(
        videoRef, videoRef1, videoRef2, videoRef3, videoRef4
    )
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


   {/* Section-One begins here */}
   <ReactPageScroller>
   <div ref={containerRef} className="video-container .text-danger .bg-danger">
        <video ref={videoRef} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Strategy
            </h5>
                <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>

            </div>


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




    {/* Section-One begins here */}
   <div ref={containerRef1} className="video-container .text-danger .bg-danger">
        <video ref={videoRef1} autoPlay muted loop className="overall">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1643984600/Rude_Ui_animation_co2vvu.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Product Design
            </h5>
                <Link to="/products"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box .bg-info" onClick={() => handleSound(1)}>
                {sound1 ? 
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
                    :
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
                }
            </div>

        </div>


    </div>





    {/* Section-One begins here */}
   <div ref={containerRef2} className="video-container .text-danger .bg-danger">
        <video ref={videoRef2} autoPlay muted loop className="overall">
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Websites
            </h5>
                <Link to="/websites"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box .bg-info" onClick={() => handleSound(2)}>
                {sound2 ? 
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
                    :
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
                }
            </div>

        </div>


    </div>



    {/* Section-One begins here */}
    <div ref={containerRef4} className="video-container .text-danger .bg-danger">
        <video ref={videoRef4} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                Branding &<br className="mobile-no" /> Advertising
            </h5>
                <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>

            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box .bg-info" onClick={() => handleSound(4)}>
                {sound4 ? 
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
                    :
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
                }
            </div>

        </div>
    </div>
    {/* Section-One ends here */}


    


     {/* Section-One begins here */}
   <div ref={containerRef3} className="video-container .text-danger .bg-danger">
        <video ref={videoRef3} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    3D Modelling
                </h5>
                    <Link to="/modelling"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>

            
                {/* <h6 className="line3"> We develop corporate & brand strategies that <br className="mobile-no" /> set you apart</h6> */}


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

    
    



    {/* Section-One begins here */}
    {/* <div ref={containerRef5} className="video-container .text-danger .bg-danger">
        <video ref={videoRef5} autoPlay muted loop className='overall'>
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4" type="video/mp4" 
            />   
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                    NFTs & Digital Art
                </h5>
                    <Link to="/modelling"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link>
            </div>

            <div className="mute-box .bg-info" onClick={() => handleSound(5)}>
                {sound5 ? 
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
                    :
                    <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
                }
            </div>

        </div>
    </div> */}
 
    <Contact isMobile={width}/>
    <Footer />
    </ReactPageScroller> 
</div>
)
}