
import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from '../pageScroll';
import "./branding.css"
import {icons} from '../../assets'
import useSound from '../hooks/useSound';
import useElementOnScreen from '../hooks/useElementOnScreen';


export default function Branding() {
  let width = window.screen.width;

  const [ containerRef, videoRef] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
  })

const {sound, handleSound } = useSound(videoRef)



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
              src="https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                  <h5 className="line1">
                  Branding & Advertising
                  </h5>
                  {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                  <h6 className="line3">Brand visibility is one of our core values</h6>

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




    {/* Section-One begins here */}
    <section className="section1 branding-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Community & Connectivity
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">We leverage on social media to reach and create <br className="mobile-no" /> bonds with the larger audience outside our locality</h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                {/* <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div> */}

            </div>
        </div>

    </section>
    {/* Section-One ends here */}




    {/* Section-One begins here */}
    <section className="section1 branding-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Connect with us on Facebook
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Checkout our latest activities on Facebook <br /> <span className="visit"><a href="https://www.facebook.com/FutureLabsNews" target="_blank" rel="noopener noreferrer">Visit page &#x2192;</a> </span>  </h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                {/* <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div> */}

            </div>
        </div>

    </section>
    {/* Section-One ends here */}



    {/* Section-One begins here */}
    <section className="section1 branding-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      We are on Instagram
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Visit our Instagram page to see what we do <br /> <span className="visit"><a href="https://www.instagram.com/futurelabshq/" target="_blank" rel="noopener noreferrer">Visit page &#x2192;</a> </span> </h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                {/* <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div> */}

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