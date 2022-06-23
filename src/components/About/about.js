import "./about.css"
import Contact from "../layout/contact"
import ToolBar from '../layout/toolbar';
import Footer from '../layout/footer';
import ReactPageScroller from '../pageScroll';
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useElementOnScreen4 from '../hooks/useElementOnScreen4';
import useElementOnScreen5 from '../hooks/useElementOnScreen5';
// import useSound from '../hooks/useSound'
import {icons} from '../../assets'

export default function About() {
    let width = window.screen.width

    const [ containerRef, videoRef ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    const [ containerRef1, videoRef1 ] = useElementOnScreen1({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    const [ containerRef2, videoRef2 ] = useElementOnScreen2({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    const [ containerRef3, videoRef3 ] = useElementOnScreen3({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    const [ containerRef4, videoRef4 ] = useElementOnScreen4({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    const [ containerRef5, videoRef5 ] = useElementOnScreen5({
        root: null,
        rootMargin: "0px",
        threshold: 1
      })
    
    // const {sound, handleSound } = useSound(videoRef)
     
return (
      
<div>
<ToolBar />
    {/* *********************************************************************** */}

        {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
        {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

    {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <ReactPageScroller renderAllPagesOnFirstRender>
    <section className="section1 about-image1">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between ">
                <div className="col-9 .bg-primary px-xs-4 px-sm-0 text-white ">

                    <h4 className="line1">WE ARE FUTURISTS!</h4>
                    
                    <h5 className="line2">
                        We are a dedicated team <br  className="mobile-no" />
                        of creative strategists, <br className="mobile-no" />
                        Designers & Developers.
                    </h5>

                    <h6 className="line3"> We will help you turn ideas into the reality <br className="mobile-no" /> you hope to create.</h6>

                </div>
                


                {/* THE MUTE ICON IS HERE */}
                {/* <div className="col-3 .bg-info text-center pt-sm-5 mt-sm-5">
                    <img className=".img-fluid mute" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div> */}

            </div>
        </div>

    </section>
    {/* Section-One ends here */}

    








    {/* Section-Two begins here*/}
    <section className="section2">

        <div className="mobile-no sm-divider">

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                    <h3 className="line2">
                        <span className="italicize"> 
                          We enable you to
                          <br />
                          see beyond the now.
                        </span>
                        <br />
                        You could either be
                        <br />
                        android or you go 
                        <br />
                        extinct like
                        <br />
                        Blackberry...” 
                    </h3>

                    <h4 className="line5">
                        WE ARE FUTURISTS!
                    </h4>
                </div>
            </div>

            <div ref={containerRef} className="video-container-half section2-image sm-2 .bg-warning">
                    <video autoPlay muted loop ref={videoRef} poster={icons.about1} className="overall-half">
                        <source src="https://res.cloudinary.com/usenmfon/video/upload/v1653342157/FutureLabs/Comp_1_jqqeuv.mp4" type="video/mp4" />
                    </video>
            </div>

        </div>


        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef1} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef1} poster={icons.about1} className="overall">
                <source src="https://res.cloudinary.com/usenmfon/video/upload/v1653342157/FutureLabs/Comp_1_jqqeuv.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">
                
                <div className=".bg-warning px-3">
                    <h3 className="line4">
                        <span className="italicize">
                            We enable you to
                            <br />
                            see beyond the now.
                        </span>
                        <br />
                        You could either be
                        <br />
                        android or you go 
                        <br />
                        extinct like
                        <br />
                        Blackberry...” 
                    </h3>

                    <h4 className="line5">
                        WE ARE FUTURISTS!
                    </h4>
                </div>

            </div>
        </div>

        
    </section>
    {/* Section-Two ends here */}
    






    {/* Section-Three begins here*/}
    <section className="section2">
        
        {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
        <div className="mobile-no sm-divider">
            <div ref={containerRef2} className="video-container-half section2-image sm-2 .bg-warning">
                <video autoPlay muted loop ref={videoRef2} poster={icons.about2} className="overall-half">
                    <source src="https://res.cloudinary.com/usenmfon/video/upload/v1654863914/FutureLabs/Comp_1_1_qxrp2d.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                    <h3 className="line4">
                        We combine a p2p
                        <br />
                        and deep learning 
                        <br />
                        model to deliver
                        <br />
                        impactful business 
                        <br />
                        solutions
                    </h3>

                    <h4 className="line5">
                        THE BEST FUTURE IMAGINABLE.
                    </h4>
                </div>
            </div>

        </div>


        

        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef2} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef2} poster={icons.about2} className="overall">
                <source src="https://res.cloudinary.com/usenmfon/video/upload/v1654863914/FutureLabs/Comp_1_1_qxrp2d.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">

                <div className=".bg-warning px-3">
                    <h3 className="line4">
                        We combine a p2p
                        <br />
                        and deep learning 
                        <br />
                        model to deliver
                        <br />
                        impactful business 
                        <br />
                        solutions
                    </h3>

                    <h4 className="line5">
                        THE BEST FUTURE IMAGINABLE.
                    </h4>
                </div>

            </div>
        </div>


    </section>
    {/* Section-Three ends here */}


    {/* *********************************************************************** */}
    {/* END OF SEGMENT ONE */}
    {/* *********************************************************************** */}









    {/* *********************************************************************** */}
    {/* SEGMENT-TWO BEGINS HERE. (A REPEAT OF SEGMENT ONE) */}
    {/* *********************************************************************** */}
    <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef4}>
              <video autoPlay muted loop ref={videoRef4} poster={icons.about4} className="overall">
                <source 
                src="https://res.cloudinary.com/dps0unrwm/video/upload/v1655828672/Futurelabs/about_4_ewn3ye.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
        <div className="text-box .bg-danger">
          <h5 className="line6 ">
                We draw from our deep <br className="mobile-no"/>
                skillsets across multiple <br className="mobile-no"/>
                domains to build the best <br className="mobile-no"/>
                future imaginable
          </h5>

          <h5 className="line5">
                THE BEST FUTURE IMAGINABLE.
           </h5>
          {/* <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link> */}


        </div>


        {/* THE MUTE ICON IS HERE */}
        {/* <div className="mute-box .bg-info" onClick={() => handleSound(2)}>
          {sound2 ? 
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt="" />
            :
            <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt="" />
          }
          </div> */}

      </div>


  </section>

    {/* Section-One begins here */}
    {/* <section className="section1 about-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line6">
                        We draw from our deep <br className="mobile-no"/>
                        skillsets across multiple <br className="mobile-no"/>
                        domains to build the best <br className="mobile-no"/>
                        future imaginable
                    </h5>
                    <h5 className="line5">
                        THE BEST FUTURE IMAGINABLE.
                    </h5>

                </div>
                


            </div>
        </div>

    </section> */}
    {/* Section-One ends here */}
    <section className="section2">

        <div className="mobile-no sm-divider">

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                <h3 className="line4">
                        We effortlessly
                        <br />
                        understand our client’s
                        <br />
                        business language
                        <br />
                        enabling seamless 
                        <br />
                        collaboration
                    </h3>

                    <h4 className="line5">
                        SEAMLESS COLLABORATION
                    </h4>
                </div>
            </div>

            <div ref={containerRef5} className="video-container-half section2-image sm-2 .bg-warning">
                    <video autoPlay muted loop ref={videoRef5} poster={icons.about5} className="overall-half">
                        <source src="https://res.cloudinary.com/dps0unrwm/video/upload/v1655828667/Futurelabs/about_5_tk0qwk.mp4" type="video/mp4" />
                    </video>
            </div>

        </div>


        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef5} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef5} poster={icons.about5} className="overall">
                <source src="https://res.cloudinary.com/dps0unrwm/video/upload/v1655828667/Futurelabs/about_5_tk0qwk.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">
                
                <div className=".bg-warning px-3">
                <h3 className="line4">
                        We effortlessly
                        <br />
                        understand our client’s
                        <br />
                        business language
                        <br />
                        enabling seamless 
                        <br />
                        collaboration
                    </h3>

                    <h4 className="line5">
                        SEAMLESS COLLABORATION
                    </h4>
                </div>

            </div>
        </div>

        
    </section>

    <section className="section2">
        
        {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
        <div className="mobile-no sm-divider">
            <div ref={containerRef3} className="video-container-half section2-image sm-2 .bg-warning">
                <video autoPlay muted loop ref={videoRef3} poster={icons.about6} className="overall-half">
                    <source src="https://res.cloudinary.com/dps0unrwm/video/upload/v1655828672/Futurelabs/About_6_s6qngi.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                <h3 className="line4">
                        We will analyze your
                        <br />
                        brand data and draw
                        <br />
                        valuable insights to
                        <br />
                        increase profit
                    </h3>

                    <h4 className="line5">
                        SEAMLESS COLLABORATION
                    </h4>

                </div>
            </div>

        </div>


        

        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef3} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef3} poster={icons.about6} className="overall">
                <source src="https://res.cloudinary.com/dps0unrwm/video/upload/v1655828672/Futurelabs/About_6_s6qngi.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">

                <div className=".bg-warning px-3">
                <h3 className="line4">
                        We will analyze your
                        <br />
                        brand data and draw
                        <br />
                        valuable insights to
                        <br />
                        increase profit
                    </h3>

                    <h4 className="line5">
                        SEAMLESS COLLABORATION
                    </h4>
                </div>

            </div>
        </div>


    </section>

    {/* Section-One begins here */}
    <section className="section1 about-image7">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line6">
                        The future was created by <br className="mobile-no" />
                        men who dared to dream <br className="mobile-no" />
                        it better than they met it.<br className="mobile-no" />
                    </h5>
                    <h5 className="line5">
                        {/* THE BEST FUTURE IMAGINABLE. */}
                    </h5>

                </div>



                
                {/* THE MUTE ICON IS HERE */}
                {/* <div className="col-3 .bg-info text-center">
                    <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />   
                </div> */}

            </div>
        </div>

    </section>


    <Contact isMobile={width}/>
    <Footer />
    </ReactPageScroller>
    {/* Section-One ends here */}

    {/* *********************************************************************** */}
    {/* END OF SEGMENT TWO */}
    {/* *********************************************************************** */}

    











</div>
)
}