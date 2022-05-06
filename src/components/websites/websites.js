import ToolBar from '../layout/toolbar';
import "./websites.css"
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from 'react-page-scroller';
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useSound from '../hooks/useSound';
import {icons} from '../../assets'

export default function Websites() {
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

const {sound, sound1, sound2,  handleSound } = useSound(videoRef, videoRef1, videoRef2)
    

return (
      
<div>
 <ToolBar /> 
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO */}

  {/* *********************************************************************** */}


  {/* Section-One begins here */}
  <ReactPageScroller>
    <div ref={containerRef} className="video-container .text-danger .bg-danger">
        <video ref={videoRef} autoPlay muted loop className='overall' >
            <source src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4"/> 
        </video> 
        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">Websites</h5>
                <h6 className="line3"> We are poised to help your enterprise gain <br className="mobile-no" /> the visibilty and engagements it needs</h6>
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
        <video ref={videoRef1} autoPlay muted loop className='overall' >
            <source src="https://res.cloudinary.com/usenmfon/video/upload/v1651836346/FutureLabs/VID_20220316_175006_638_lgldqz.mp4" type="video/mp4"/> 
        </video> 
        <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">Gospel Worship Has Never <br className="mobile-no" />  Been Better With Emmy Chris</h5>
                <h6 className="line3"> Just another website we brought to life</h6>
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
    {/* <section className="section1 websites-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    Nature At The Comfort of <br className="mobile-no" /> Your Home
                    </h5>

                    <h6 className="line3"> We built visibililty for Green to satisfy nature lovers</h6>


                </div>
                

                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section> */}
    {/* Section-One ends here */}



    {/* Section-One begins here */}
    <section className="video-container .text-danger .bg-danger">
    <span ref={containerRef2}>

      <video autoPlay muted loop ref={videoRef2} className="overall">
        {/* <Transformation endOffset="30" videoCodec="auto" /> */}
        <source 
          src="https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4" type="video/mp4" 
        /> 


      </video> 
    </span>

      <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 mx-sm-5 text-white">
        <div className="text-box .bg-danger">
          <h5 className="line6 ">
            Seamless Cross-border <br className="mobile-no"/>
            Payments and Currency <br className="mobile-no"/> 
            Conversion
          </h5>

          <h5 className="line5 ">
            Securing Payments for Tomorrow on the Web
          </h5>
          {/* <Link to="/strategy"><button type="button" class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5">Learn More</button></Link> */}


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


  </section>
    {/* Section-One ends here */}

        <Contact isMobile={width}/>
        <Footer />
    </ReactPageScroller>
</div>
)
}
