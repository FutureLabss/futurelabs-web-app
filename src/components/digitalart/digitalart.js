import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from '../pageScroll';
import "./digitalart.css"
import useSound from '../hooks/useSound'
import useElementOnScreen from '../hooks/useElementOnScreen';
import {icons} from '../../assets'


export default function DigitalArt() {
  let width = window.screen.width;

  const [ containerRef, videoRef ] = useElementOnScreen({
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
    <ReactPageScroller renderAllPagesOnFirstRender>
    <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef}>
              <video autoPlay muted loop ref={videoRef} poster={icons.service6} className="overall">
                <source 
                src="https://res.cloudinary.com/dps0unrwm/video/upload/v1657903348/Futurelabs/2D_Animation_olttrg.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
        <div className="text-box .bg-danger">
          <h5 className="line6 ">
          Art bridges the gulf between <br className="mobile-no"/>
          dreams and reality <br className="mobile-no"/> 
           
          </h5>

          
        </div>
        <div className="mute-box .bg-info" onClick={() => handleSound(0)}>
          {sound ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

      </div>


  </section>
    <section className="section1 digital-image1">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    A better Future
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">Art helps us reimagine what could be, the future is a masterpiece</h6>


                </div>
               
            </div>
        </div>

    </section>
    {/* Section-One ends here */}




    {/* Section-One begins here */}
    {/* <section className="section1 digital-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                       Re-imagine Surfaces
                    </h5>
                    <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3"> Let's impress art on the digital surfaces<br className="mobile-no" /> around you, making each of it a<br className="mobile-no" /> conversation starter.</h6>


                </div>
               
            </div>
        </div>

    </section> */}
    {/* Section-One ends here */}




    {/* Section-One begins here */}
    <section className="section1 digital-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Attention to details
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">Imagine a future where resources are illimitable,<br className="mobile-no" /> if we can dream it, we can build it.</h6>


                </div>
               
            </div>
        </div>

    </section>
    {/* Section-One ends here */}

    {/* Section-One begins here */}
    <section className="section1 digital-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Versatile
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">We use both digital and local media to pass messages<br className="mobile-no" /><br className="mobile-no" /></h6>


                </div>
               
            </div>
        </div>

    </section>
    {/* Section-One ends here */}

  
    {/* Valuable
    Our pieces sell & outcompete contemporaries in the global market.

    
    Surfaces
    Let's impress art on the digital surfaces around you, making each one of it a conversation starter.
 */}



    



    <Contact isMobile={width} />
  <Footer />
</ReactPageScroller>
</div>
)
}