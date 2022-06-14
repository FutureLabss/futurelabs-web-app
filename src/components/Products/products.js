import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from '../pageScroll';
import "./products.css"
import {icons} from '../../assets'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useSound from '../hooks/useSound';

export default function Products() {
    let width = window.screen.width;

    const [ containerRef, videoRef] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef1, videoRef1] = useElementOnScreen1({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef2, videoRef2] = useElementOnScreen2({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef3, videoRef3] = useElementOnScreen3({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

  const {sound, sound1, sound2, sound3, handleSound } = useSound(videoRef,videoRef1,videoRef2,videoRef3)


return (
  
<div className="bod">
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <ReactPageScroller>
        {/* Section-One begins here */}
        <div ref={containerRef2} className="video-container .text-danger no-pad one">
        <video ref={videoRef2} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/usenmfon/video/upload/v1651836353/FutureLabs/Rude_Ui_animation_kil6nt.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1 .text-danger">
                Access Your Computer<br className="mobile-no" /> Science Curriculum on the Go
                </h5>
                <h6 className="line3">Redefining the science of computers</h6>
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
    <div ref={containerRef1} className="video-container .text-danger no-pad one">
        <video ref={videoRef1} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/usenmfon/video/upload/v1650284802/FutureLabs/Shopin_animation_qgq2kq.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
            <h5 className="line1">
                    
                    Shop for your feet
                    </h5>
                <h6 className="line3"> Securing Payments for Tomorrow</h6>
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

    <div ref={containerRef3} className="video-container .text-danger no-pad one">
        <video ref={videoRef3} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/usenmfon/video/upload/v1653400836/FutureLabs/Money_nudfwv.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1 .text-danger">
                    Make <br className="mobile-no" /> Faster & Secure  <br className="mobile-no" />
                </h5>
                <h6 className="line3">Payments</h6>
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
    <div ref={containerRef} className="video-container .text-danger no-pad one">
        <video ref={videoRef} autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1 .text-danger">
                    Seamless Cross-border <br className="mobile-no" /> Payments and Currency  <br className="mobile-no" /> Conversion
                </h5>
                <h6 className="line3"> Securing Payments for Tomorrow</h6>
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
    
    {/* Section-One ends here */}


    <Contact isMobile={width} />
    <Footer />
    </ReactPageScroller>
</div>
)
}