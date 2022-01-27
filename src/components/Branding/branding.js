import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import "./branding.css"


export default function Branding() {
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <section className="section1 branding-image1">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                  <h5 className="line1">
                    Branding & Advertising
                  </h5>
                  {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                  <h6 className="line3"> Brand visibility is one of our core values</h6>


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
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

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

                    <h6 className="line3"> Checkout our latest activities on Facebook <br /> <span className="visit">Visit page &#x2192; </span>  </h6>


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
    <section className="section1 branding-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      We are on Instagram
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning modelling-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Visit our Instagram page to see what we do <br /> <span className="visit">Visit page &#x2192; </span> </h6>


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