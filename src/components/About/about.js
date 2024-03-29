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
    <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef1}>
              <video autoPlay muted loop ref={videoRef1} poster={icons.about3} className="overall">
                <source 
                src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669905979/About_Hero_Video_kuskdy.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-3 text-white">
      <div>
        <h4 className="heading-3">WE ARE FUTURISTS!</h4>
      
        </div>


        {/* THE MUTE ICON IS HERE */}
       

      </div>


  </section>
    {/* Section-One ends here */}

    








    {/* Section-Two begins here*/}
    <section className="section2">

        <div className="mobile-no sm-divider">

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                <h4 className="heading-2">
                        WE ARE FUTURISTS!
                    </h4>
                    <h3 className="paragraph-2">
                        We will help you plan for 
                        the future with extraordinary
                        <br />
                        foresight, You can either grow
                        exponentially as the  <br /> android OS  
                        or go extinct like blackberry
                    </h3>

                </div>
            </div>

            <div ref={containerRef} className="video-container-half section2-image sm-2 .bg-warning">
                    <video autoPlay muted loop ref={videoRef} poster={icons.about1} className="overall-half">
                        <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906508/Comp_1_1_ixmb3j.mp4" type="video/mp4" />
                    </video>
            </div>

        </div>


        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef} className="mobile-yes  text-white">
            <video autoPlay muted loop ref={videoRef} poster={icons.about1} className="overall">
                <source src="https://res.cloudinary.com/usenmfon/video/upload/v1653342157/FutureLabs/Comp_1_jqqeuv.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">
                
                <div className=".bg-warning px-3">
                <h4 className="heading-2">
                        WE ARE FUTURISTS!
                    </h4>
                    <h3 className="paragraph-2">
                        <span className=""> 
                        We will help you plan for 

                        <br />
                        the future with
                        </span>
                        <br />
                        extraordinary foresight

                        <br />
                        You can either grow  
                        <br />
                        exponentially as the android OS  
                        <br />
                        or go extinct like blackberry
                    </h3>
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
                    <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906737/Comp_1_1_z63wwg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                    <h4 className="heading-2" style={{fontSize: "38px"}}>
                        THE BEST FUTURE IMAGINABLE
                    </h4>
                    <h3 className="paragraph-2">
                        We combine a p2p and deep
                        learning model <br />
                        to deliver impactful business solutions
                    </h3>
                </div>
            </div>

        </div>


        

        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef2} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef2} poster={icons.about2} className="overall">
                <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906737/Comp_1_1_z63wwg.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">

                <div className=".bg-warning px-3">
                    <h4 className="heading-2">
                        THE BEST FUTURE IMAGINABLE
                    </h4>
                    <h3 className="paragraph-2">
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
                src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906852/about_4_oakopa.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-3 text-white">
        <div className=".bg-danger">
            <h5 className="heading-2">
                THE BEST FUTURE IMAGINABLE
           </h5>
          <h5 className="paragraph-2">
                We draw from our deep 
                skillsets across multiple <br className="mobile-no"/>
                domains to build the best 
                future imaginable
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
                    <h5 className="line5" style={{border: "solid white"}}>
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
                    <h4 className="heading-2" style={{fontSize: "42px"}}>
                        SEAMLESS COLLABORATION
                    </h4>
                <h3 className="paragraph-2">
                        We Intuitively understand 
                        
                        our client’s business language,
                        <br />
                        enabling seamless collaboration
                    </h3>

                </div>
            </div>

            <div ref={containerRef5} className="video-container-half section2-image sm-2 .bg-warning">
                    <video autoPlay muted loop ref={videoRef5} poster={icons.about5} className="overall-half">
                        <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907073/about_5_pt2jkg.mp4" type="video/mp4" />
                    </video>
            </div>

        </div>


        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef5} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef5} poster={icons.about5} className="overall">
                <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907073/about_5_pt2jkg.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">
                
                <div className=".bg-warning px-3">
                    <h4 className="heading-2">
                        SEAMLESS COLLABORATION
                    </h4>
                <h3 className="paragraph-2">
                        We Intuitively
                        <br />
                        understand our client’s
                        <br />
                        business language,
                        <br />
                        enabling seamless 
                        <br />
                        collaboration
                    </h3>

                </div>

            </div>
        </div>

        
    </section>

    <section className="section2">
        
        {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
        <div className="mobile-no sm-divider">
            <div ref={containerRef3} className="video-container-half section2-image sm-2 .bg-warning">
                <video autoPlay muted loop ref={videoRef3} poster={icons.about6} className="overall-half">
                    <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907139/About_6_kcbr3x.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="sm-1 .bg-danger">
                <div className=".bg-warning vertical-centering horizontal-centering">
                    <h4 className="heading-2" style={{fontSize: "38px"}}>
                        TURBOCHARGE YOUR KPIs
                    </h4>
                <h3 className="paragraph-2">
                        We will analyze your brand
                        
                        data and draw valuable 
                        <br />
                        insights to increase revenue
                        
                    </h3>


                </div>
            </div>

        </div>


        

        {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
        <div ref={containerRef3} className="mobile-yes .bg-primary text-white">
            <video autoPlay muted loop ref={videoRef3} poster={icons.about6} className="overall">
                <source src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907139/About_6_kcbr3x.mp4" type="video/mp4" />
            </video>
            <div className="overlay-about">
                <div className=".bg-warning px-3">
                    <h4 className="heading-2">
                        TURBOCHARGE YOUR KPIs
                    </h4>
                <h3 className="paragraph-2 mt-5">
                        We will analyze your
                        <br />
                        brand data and draw
                        <br />
                        valuable insights to
                        <br />
                        increase revenue
                    </h3>

                </div>

            </div>
        </div>


    </section>

    <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef1}>
              <video autoPlay muted loop ref={videoRef1} poster={icons.about7} className="overall">
                <source 
                src="https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907205/about_underscore_7_cfhk5q.mp4" type="video/mp4" 
              /> 
              </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
        <div className=".bg-danger">
        <h4 className="heading-2">
           DREAM BIG
        </h4>
        <h3 className="paragraph-2">
            The future was created by 
            men who dared to dream <br />
            it better than they met it.<br />
        </h3>

          {/* <h5 className="line5">
                THE BEST FUTURE IMAGINABLE.
           </h5> */}
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