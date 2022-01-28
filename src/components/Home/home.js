<<<<<<< HEAD
import "./home.css";
import ToolBar from "../layout/toolbar";

export default function Home() {
  return (
    <div>
      <ToolBar />
=======
import "./home.css"
import Contact from "../layout/contact"
import ToolBar from '../layout/toolbar';


export default function Home() {
return (
      
<div>
<ToolBar />
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



>>>>>>> ac40f8877f0e617443d05a2ea69b0cfaf2cc6989

      <div className="section1">
        <div className="punchbox text-white">
          <h4 className="punchline">WE ARE FUTURISTS!</h4>

<<<<<<< HEAD
          <h5 className="sub-line">
            We create indelible <br />
            digital experiences.
          </h5>

          <br />
        </div>

        <img
          className="img-fluid mute "
          src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png"
          alt=""
        />
      </div>
=======



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
            footprints.
          </h3>

          <h6 className="line3"> Enhancing User Experiences and turning ideas <br className="mobile-no" /> to realities one elated client a time</h6>

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>


        </div>
      </div>

      <div className="section2-image home-image2 sm-2 .bg-warning">
        <div class="vertical-centering text-center">
          <img src="https://res.cloudinary.com/dremo/image/upload/v1638808890/Futurelabs-logo_2_sgxejz.svg" alt=""/>
        </div>
      </div>

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

          <button type="button" class="btn btn-outline-light home-button-text1 mt-4 text-white py-1 px-5">Learn More</button>

        </div>

      </div>
    </div>

      
  </section>
  {/* Section-Two ends here */}




>>>>>>> ac40f8877f0e617443d05a2ea69b0cfaf2cc6989

      {/* Section 2 begins here */}
      <div className="container-fluid section2">
        <div className="row">
          <div className="col-sm-6 section2-box1">
            <div className="section2-box1-inner">
              <h5 className="fontys mb-4"> We are Future Labs!</h5>
              <h3 className="textss">
                Futurelabs is a digital
                <br /> agency with global <br />
                footprints.
              </h3>
              <br />
              <h5 className="fonty2">
                Enhancing User Experience and turning
                <br /> ideas to realities one elated client a time{" "}
              </h5>
              <button className="but mb-5 mt-3">learn more</button>
            </div>
          </div>

<<<<<<< HEAD
          <div className="col-sm-6 p-0 section2-box2 text-center">
            <div className="image2 text-center ">
              <img
                className="piks"
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1635262165/Futurelabs-logo_2_fsvqs9.png"
                alt=""
              />

              <div className="section2-mobile-yes">
                <h3 className="section2-mobile-inner">
                  <h5 className="fontys"> We are Future Labs!</h5>
                  <h3 className=". ">
                    Futurelabs is a digital
                    <br /> agency with global <br />
                    footprints.
                  </h3>
                  <br />
                  <h5 className="fonty2 text-white">
                    Enhancing User Experience
                    <br /> and turning ideas to realities
                    <br /> one elated client a time{" "}
                  </h5>
                  <button className="but mt-3">learn more</button>
                </h3>

                {/* <br /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 begins here */}
      <div className="container-fluid section2">
        <div className="row">
          <div className="col-sm-6 p-0 .section2-box2">
            <div className="image3 bg-danger">
              <div className="section3-mobile-yes">
                <h5 className="fontys"> We tell stories</h5>
                <h3 className=".">
                  We craft user-centric <br />
                  stories about products
                  <br /> and services that our
                  <br /> target audience finds
                  <br /> relatable and actionable.
                </h3>
                <button className="but mt-3">learn more</button>
                {/* <br /> */}
              </div>
            </div>
          </div>

          <div className="col-sm-6 section2-box1">
            <div className="section2-box1-inner">
              <h5 className="fontys mb-3"> We tell stories</h5>
              <h3 className="textss">
                We craft user-centric <br />
                stories about products
                <br /> and services that our
                <br /> target audience finds
                <br /> relatable and actionable.
              </h3>
              <button className="but mt-3">learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="punchbox42 text-white">
          <h5 className="sub-line subline2">
            We Strategize <br className="no-break-mobile" />
            We take our time <br className="no-break-mobile" />
            sifting through Data <br className="no-break-mobile" />
            and building models
          </h5>
          <br />
          <br />

          {/* <br /> */}
          <img
            className="img-fluid mute123"
            src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png"
            alt=""
          />
        </div>
      </div>

      <div className="section45"></div>
      <div className="container sec">
        <div className="row">
          <div className="col-md-4 mt-5">
            <div className="card">
              <img
                className="card-img-top h"
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1635348411/priscilla-du-preez-XkKCui44iM0-unsplash_1_pd3v8t.png"
                alt=""
                srcset=""
              />
              <div className="card-body">
                <h5 className="card-tittle var">The coca-cola Strategy</h5>
                <p className="p card-text">29 sep , 2021 </p>
                <div className="sli"></div>
                <p className="card-text vars mt-3">
                  {" "}
                  Coca-cola focuses on improving the community relationships and
                  increasing thhier happiness,that positively reflects on thier
                  public image, resulting in customer and revenue rise.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <img
                className="card-img-top h"
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1635349111/ben-white-4K2lIP0zc_k-unsplash_1_lew38n.png"
                alt=""
                srcset=""
              />
              <div className="card-body">
                <h5 className="card-tittle var">The coca-cola Strategy</h5>
                <p className="p card-text">29 sep , 2021 </p>
                <div className="sli"></div>
                <p className="card-text vars mt-3">
                  {" "}
                  Coca-cola focuses on improving the community relationships and
                  increasing thhier happiness,that positively reflects on thier
                  public image, resulting in customer and revenue rise.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <img
                className="card-img-top h"
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1635349190/scott-graham-5fNmWej4tAA-unsplash_1_mcymci.png"
                alt=""
                srcset=""
              />
              <div className="card-body">
                <h5 className="card-tittle var">The coca-cola Strategy</h5>
                <p className="p card-text">29 sep , 2021 </p>
                <div className="sli"></div>
                <p className="card-text vars mt-3">
                  {" "}
                  Coca-cola focuses on improving the community relationships and
                  increasing
                  <br /> thhier happiness,that positively reflects <br />
                  on thier public image, resulting
                  <br />
                  in customer and revenue rise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row pt-3">
          <div className="">
            <h5>
              <strong className="contact container">Contact us</strong>
            </h5>
=======
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

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>

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

          <button type="button" class="btn btn-outline-warning home-button-text mt-4 text-dark py-1 px-5">Learn More</button>

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
        <div className="col-9 .bg-primary px-3 px-sm-1 text-white mobile-yes-1">

          <h5 className="line6 ">
            Seamless Cross-border <br className="mobile-no"/>
            Payments and Currency <br className="mobile-no"/> 
            Conversion
          </h5>

          <h5 className="line5 ">
            Securing Payments for Tomorrow on the Web
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




  {/* *********************************************************************** */}
  {/* END OF SEGMENT TWO */}
  {/* *********************************************************************** */}






  {/* THE SECTION BELOW HOLDS THE THUMBNAILS */}

  <section>
    <div className="container-fluid">
      <div className="row px-2 px-sm-3 pt-4">
      <h1 className="contact mb-5 text-center">Latest Stories</h1>
      <div className="col-sm-4 py-sm-4 py-4">
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
            <p>
              Coca-cola focuses on improving the community
              relationships and increasing thhier happiness,that
              positively reflects on thier public image, resulting
              in customer and revenue rise.
            </p>
          </div>
        </div>
      </div>


      <div className="col-sm-4 py-sm-4 py-4">
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
            <p>
              Coca-cola focuses on improving the community
              relationships and increasing thhier happiness,that
              positively reflects on thier public image, resulting
              in customer and revenue rise.
            </p>
          </div>
        </div>
      </div>


      <div className="col-sm-4 py-sm-4 py-4">
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
            <p>
              Coca-cola focuses on improving the community
              relationships and increasing thhier happiness,that
              positively reflects on thier public image, resulting
              in customer and revenue rise.
            </p>
>>>>>>> ac40f8877f0e617443d05a2ea69b0cfaf2cc6989
          </div>
        </div>
        <div className="row pt-3 px-2">
          <div className="col-sm-6">
            <div class="input-group mb-2  h-25">
              <input
                type="text"
                class="form-control inputs  rounded"
                placeholder="Your name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
              </div>
            </div>

            <div class="input-group mb-3  h-25">
              <input
                type="text"
                class="form-control inputs rounded"
                placeholder="Your phone number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
              </div>
            </div>

            <div class="input-group mb-4 h-25">
              <input
                type="text"
                class="form-control inputs rounded"
                placeholder="Your company"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
              </div>
            </div>

            <div class="input-group mb-5 h-25">
              <input
                type="text"
                class="form-control inputs rounded"
                placeholder="Your@email.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="col-sm-6">
            <div class=" message">
              <textarea
                class="form-control inputss rounded "
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              ></textarea>
            </div>

            <div className="d-flex sends ">
              <button class="mx-auto  submit rounded ">
                <strong>Submit</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
      </div>


    </div>



    {/* THESE PARENTS ONLY APPEAR ON MOBILE */}

    {/* <div className="Thumbnail-parent bg-danger mobile-yes-thumb">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>


    <div className="Thumbnail-parent bg-warning">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>


    <div className="Thumbnail-parent bg-info">
      <div className="Thumbnail bg-primary py-1">
        photo here
      </div>
      <div>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quis sapiente dignissimos velit ducimus eligendi.</p>
      </div>
    </div>
 */}



<Contact />

  </section>

    











</div>
)
}
>>>>>>> ac40f8877f0e617443d05a2ea69b0cfaf2cc6989
