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
    <div className="video-container .text-danger no-pad">
        <video autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box1 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
                <h5 className="line1 .text-danger">
                    Seamless Cross-border <br className="mobile-no" /> Payments and Currency  <br className="mobile-no" /> Conversion
                </h5>
                <h6 className="line3"> Securing Payments for Tomorrow</h6>
            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>









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