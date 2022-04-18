import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from 'react-page-scroller';
import "./products.css"
import {icons} from '../../assets'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
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

  const {sound, sound1, handleSound } = useSound(videoRef,videoRef1)


return (



    
      
<div className="bod">
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <ReactPageScroller>
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

    {/* Section-One begins here */}
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
    {/* Section-One ends here */}




    {/* Section-One begins here */}
    <section className="section1 product-image3 one">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    Access Your Computer<br className="mobile-no" /> Science Curriculum on the Go
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning products-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">Redefining the science of computers</h6>


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
    <section className="section1 product-image4 one">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Seamless Cross-border <br className="mobile-no" /> Payments and Currency  <br className="mobile-no" /> Conversion
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning products-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Securing Payments for Tomorrow</h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}


    <Contact isMobile={width} />
    <Footer />
    </ReactPageScroller>
</div>
)
}