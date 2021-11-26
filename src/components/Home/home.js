
import "./home.css"


export default function Home() {
return (
      
<div>

  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


  {/* Section-One begins here */}
  <section className="section1 home-image1">

    <div className="container">
      <div className="row .bg-warning d-flex justify-space-between">
        <div className="col-9 .bg-primary px-xs-4 px-sm-0 text-white">

          <h4 className="line1">WE ARE FUTURISTS!</h4>
          
          <h5 className="line2">
            We create indelible <br  className="mobile-no" />
            digital experiences.
          </h5>

          {/* <h6 className="line3"> We will help you turn ideas into the reality <br className="mobile-no" /> you hope to create.</h6> */}

        </div>
        


        {/* THE MUTE ICON IS HERE */}
        <div className="col-3 .bg-info text-center">
          <img className=".img-fluid mute" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div>

      </div>
    </div>

  </section>
  {/* Section-One ends here */}








  {/* Section-Two begins here*/}
  <section className="section2">

    <div className="mobile-no sm-divider">

      <div className="sm-1 .bg-danger">
        <div className=".bg-warning vertical-centering horizontal-centering">

          <h4 className="line1">We are Future Labs!</h4>

          <h3 className="line4">
            FutureLabs is a digital
            <br />
            agency with global
            <br />
            footprints
          </h3>

          <h6 className="line3"> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark">LEARN MORE</button>


        </div>
      </div>

      <div className="section2-image home-image2 sm-2 bg-warning"></div>

    </div>


    {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
    <div className="mobile-yes section2-image-mobile home-image2 .bg-warning text-white">
      <div className="vertical-centering">

        <div className=".bg-warning px-3">
          <h4 className="line1">We are Future Labs!</h4>

          <h3 className="line4">
            FutureLabs is a digital
            <br />
            agency with global
            <br />
            footprints
          </h3>

          <h6 className="line3"> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark">LEARN MORE</button>

        </div>

      </div>
    </div>

      
  </section>
  {/* Section-Two ends here */}






  {/* Section-Three begins here*/}
  <section className="section2">
      
    {/* THIS PARENT DIV DISAPPEARS ONLY ON MOBILE */}
    <div className="mobile-no sm-divider">

      <div className="section2-image home-image3 sm-2 .bg-warning"></div>

      <div className="sm-1 .bg-danger">
        <div className=".bg-warning vertical-centering horizontal-centering">
          <h4 className="line1">We tell stories</h4>

          <h3 className="line4">
            We craft User centric
            <br />
            stories about products and
            <br />
            services that our target
            <br />
            audience finds relatable and actionable
          </h3>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark">LEARN MORE</button>

        </div>
      </div>

    </div>


      

    {/* THIS PARENT DIV APPEARS ONLY ON MOBILE */}
    <div className="mobile-yes section2-image-mobile home-image3 .bg-primary text-white">
      <div className="vertical-centering">

        <div className=".bg-warning px-3">
          <h4 className="line1">We tell stories</h4>

          <h3 className="line4">
            We craft User centric
            <br />
            stories about products and
            <br />
            services that our target
            <br />
            audience finds relatable and actionable
          </h3>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark">LEARN MORE</button>

        </div>

      </div>
    </div>


  </section>
  {/* Section-Three ends here */}


  {/* *********************************************************************** */}
  {/* END OF SEGMENT-ONE */}
  {/* *********************************************************************** */}









  {/* *********************************************************************** */}
  {/* SEGMENT-TWO BEGINS HERE. (A REPEAT OF SEGMENT ONE) */}
  {/* *********************************************************************** */}


  {/* Section-One begins here */}
  <section className="section1 home-image4">

    <div className="container">
      <div className="row .bg-warning d-flex justify-space-between">
        <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

          <h5 className="line6">
            <span className="italicize">We Strategize.</span>
            <br />
            We take our time <br className="mobile-no"/>
            sifting through Data <br className="mobile-no"/> 
            and building models
          </h5>

          <h5 className="line5">
            {/* THE BEST FUTURE IMAGINABLE. */}
          </h5>

        </div>
        

        {/* THE MUTE ICON IS HERE */}
        <div className="col-3 .bg-info text-center">
          <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div>

      </div>
    </div>

  </section>
  {/* Section-One ends here */}








  {/* Section-One begins here */}
  <section className="section1 home-image5">

    <div className="container">
      <div className="row .bg-warning d-flex justify-space-between">
        <div className="col-9 .bg-primary px-3 px-sm-1 text-white mobile-yes">

          <h5 className="line6">
            Seamless Cross-border <br className="mobile-no"/>
            Payments and Currency  <br className="mobile-no"/>
            Conversion
          </h5>
          <h6 className="line3"> Securing Payments for Tomorrow on the Web</h6>


        </div>
        

        {/* THE MUTE ICON IS HERE */}
        <div className="col-3 .bg-info text-center">
          <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
        </div>

      </div>
    </div>

  </section>
  {/* Section-One ends here */}




  {/* *********************************************************************** */}
  {/* END OF SEGMENT TWO */}
  {/* *********************************************************************** */}






  {/* THE SECTION BELOW HOLDS THE THUMBNAILS */}

  <section>
    <div className="container-fluid">
      <div className="row px-2 px-sm-3 pt-4">

      <div className="col-sm-4 py-sm-4">
        <div className="px-2 Thumbnail-parent .bg-danger">
          <div className="Thumbnail Thumbnail-image1 bg-primary py-1 rounded">
            {/* photo here */}
          </div>
          <div>
            <h4 className="mt-2">The Coca-cola Strategy</h4>
            <p>
              23 Sept, 2021
              <hr className="under bg-warning rounded " />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
          </div>
        </div>
      </div>


      <div className="col-sm-4 py-sm-4">
        <div className="px-2 Thumbnail-parent .bg-danger">
          <div className="Thumbnail Thumbnail-image2 .bg-primary py-1 rounded">
            {/* photo here */}
          </div>
          <div>
            <h4 className="mt-2">The Coca-cola Strategy</h4>
            <p>
              23 Sept, 2021
              <hr className="under .bg-warning rounded " />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
          </div>
        </div>
      </div>


      <div className="col-sm-4 py-sm-4">
        <div className="px-2 Thumbnail-parent .bg-danger">
          <div className="Thumbnail Thumbnail-image3 bg-primary py-1 rounded">
            {/* photo here */}
          </div>
          <div>
            <h4 className="mt-2">The Coca-cola Strategy</h4>
            <p>
              23 Sept, 2021
              <hr className="under .bg-warning rounded " />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
          </div>
        </div>
      </div>

      </div>


    </div>


  </section>

    











</div>
)
}