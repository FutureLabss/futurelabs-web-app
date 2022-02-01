import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import "./products.css"


export default function Products() {
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <section className="section1 product-image1">

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




    {/* Section-One begins here */}
    <section className="section1 product-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                    {/* Access Your Computer  <br className="mobile-no" />  Science Curriculum on the Go */}
                    Shop for your feet
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning products-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> We partnered wuth Zuga to deliver <br className="mobile-no" /> effortless transportation</h6>


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
    <section className="section1 product-image3">

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
    <section className="section1 product-image4">

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


    <Contact />
















</div>
)
}