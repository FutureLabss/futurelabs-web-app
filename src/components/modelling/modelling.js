// import {useState} from 'react'
import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from 'react-page-scroller';
import "./modelling.css"
import {icons} from '../../assets'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useSound from '../hooks/useSound';

export default function Modelling() {
   
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

  const [sound, sound1, sound2, sound3, handleSound ] = useSound(videoRef,videoRef1,videoRef2,videoRef3)
    

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
              src="https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                  <h5 className="line1">
                    3D Modeling
                  </h5>
                  {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                  <h6 className="line3"> What if a 12 year old genius reimagined the future of <br className="mobile-no" /> urban transportation, flying cars and all?</h6>

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

    <div ref={containerRef1} className="video-container .text-danger .bg-danger">
      <video ref={videoRef1} muted autoPlay loop className='overall' >
        {/* <Transformation endOffset="30" videoCodec="auto" /> */}
        <source 
          src="https://res.cloudinary.com/usenmfon/video/upload/v1649428231/FutureLabs/FutureLabs_Audi_R8_Animation_xyyqp2.mp4" type="video/mp4" 
        /> 
          
        
      </video> 

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
        <div className="text-box .bg-danger">
        <h5 className="line1">
          Fine Craftmanship
        </h5>
        {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

        <h6 className="line3"> Our team effortlessly achieves masterpieces <br className="mobile-no" />on all commissions.</h6>


        </div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box text-center .bg-info" onClick={() => handleSound(1)}>
          {sound1 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

      </div>


    </div>
    <div ref={containerRef2} className="video-container .text-danger .bg-danger">
      <video ref={videoRef2} muted autoPlay loop className='overall' >
        {/* <Transformation endOffset="30" videoCodec="auto" /> */}
        <source 
          src="https://res.cloudinary.com/usenmfon/video/upload/v1649856240/FutureLabs/FutureDroid_Final_Animation_hcrlzq.mp4" type="video/mp4" 
        /> 
          
        
      </video> 

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
        <div className="text-box .bg-danger">
        <h5 className="line1">
          Craftmanship
        </h5>
        {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

        <h6 className="line3"> Our team effortlessly achieves masterpieces <br className="mobile-no" />on all commissions.</h6>


        </div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box text-center .bg-info" onClick={() => handleSound(2)}>
          {sound2 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

      </div>


    </div>

    <div ref={containerRef3} className="video-container .text-danger .bg-danger">
      <video ref={videoRef3} autoPlay muted loop className='overall' >
        {/* <Transformation endOffset="30" videoCodec="auto" /> */}
        <source 
          src="https://res.cloudinary.com/not-set/video/upload/v1644404865/VID-20220207-WA0036_zgaqo2.mp4" type="video/mp4" 
        /> 
          
        
      </video> 

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
        <div className="text-box .bg-danger">
        <h5 className="line1">
          Imagination
        </h5>
        {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

        <h6 className="line3"> It’s easier to build if we help you picture what your <br className="mobile-no" /> product will look like before you even get started. </h6>


        </div>


          {/* THE MUTE ICON IS HERE */}
          <div className="mute-box text-center .bg-info" onClick={() => handleSound(3)}>
          {sound3 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div>

      </div>


    </div>
    


    {/* Section-One begins here */}
    {/* <section className="section1 modelling-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Precision
                    </h5>
                    <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3">Watches are meant to tell more than time,  with <br className="mobile-no" /> future time pieces, we redefined luxury and <br className="mobile-no" /> precision.</h6>


                </div>
                

                THE MUTE ICON IS HERE
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section> */}
    {/* Section-One ends here */}

    


    

    

    


    {/* <section className="section1 modelling-image5">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Noiseless Design
                    </h5>
                    <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3"> Our deep understanding of curves, tones <br className="mobile-no" /> & texture affords us flawless execution.</h6>


                </div>
                

                THE MUTE ICON IS HERE
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section> */}

    {/* <section className="section1 modelling-image6">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Non-conforming
                    </h5>
                    <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3"> We always set out to create what stands apart & <br className="mobile-no" /> makes its own statement from day one. </h6>


                </div>
                

                THE MUTE ICON IS HERE
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section> */}


    {/* <section className="section1 modelling-image7">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      3D Perspective
                    </h5>
                    <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3"> On flat screens, we create bodies <br className="mobile-no" /> that appear to pop out of it. </h6>


                </div>
                

                THE MUTE ICON IS HERE
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section> */}

    {/* <section className="section1 modelling-image7">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Imagination
                    </h5>
                    <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button>

                    <h6 className="line3"> It’s easier to build if we help you picture what your <br className="mobile-no" /> product will look ike before you even get started </h6>


                </div>
                

                THE MUTE ICON IS HERE
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
 */}

    <Contact isMobile={width} />
    <Footer />
  </ReactPageScroller>
</div>
)
}