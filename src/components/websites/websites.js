import ToolBar from '../layout/toolbar';
import "./websites.css"
import Contact from "../layout/contact"



export default function Websites() {
return (
      
<div>
 <ToolBar /> 
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO */}

  {/* *********************************************************************** */}


  {/* Section-One begins here */}
  <div className="video-container .text-danger .bg-danger">
        <video autoPlay muted loop >
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box1 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1">
                Websites

                </h5>

                <h6 className="line3"> We are poised to help your enterprise gain <br className="mobile-no" /> the visibilty and engagements it needs</h6>


            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>






    




    {/* Section-One begins here */}
    <section className="section1 websites-image2 bg-warning">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    Gospel Worship Has Never <br className="mobile-no" />  Been Better With Emmy Chris
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning websites-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">Just another website we brought to life</h6>


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
    <section className="section1 websites-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    Nature At The Comfort of <br className="mobile-no" /> Your Home
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning websites-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> We built visibililty for Green to satisfy nature lovers</h6>


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
    <section className="section1 websites-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Seamless Cross-border  <br className="mobile-no" /> Payments and Currency  <br className="mobile-no" /> Conversion
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning websites-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Securing Payments for Tomorrow on the Web</h6>

                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}

    <Contact />
















</div>
)
}
