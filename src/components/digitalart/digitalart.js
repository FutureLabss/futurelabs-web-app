import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import Footer from "../layout/footer"
import ReactPageScroller from '../pageScroll';
import "./digitalart.css"


export default function DigitalArt() {
  let width = window.screen.width;

return (   
<div>
  <ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}


    {/* Section-One begins here */}
    <ReactPageScroller renderAllPagesOnFirstRender>
    <section className="section1 digital-image1">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      NFTs, Digital Arts & Illustrations
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3">Art is no more just portraits. It’s digital now! </h6>


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
    <section className="section1 digital-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                       Re-imagine Surfaces
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Let's impress art on the digital surfaces<br className="mobile-no" /> around you, making each of it a<br className="mobile-no" /> conversation starter.</h6>


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
    <section className="section1 digital-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Attention to details
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> The scenes, people and places we <br className="mobile-no" />remake on digital canvas, come alive. </h6>


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
    <section className="section1 digital-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Love & Friendship
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning digital-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> We are humans too. We understand<br className="mobile-no" /> the value of family, the place of humanity <br className="mobile-no" />& personal aspirations in all we do. </h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}

  
    {/* Valuable
    Our pieces sell & outcompete contemporaries in the global market.

    
    Surfaces
    Let's impress art on the digital surfaces around you, making each one of it a conversation starter.
 */}



    



    <Contact isMobile={width} />
  <Footer />
</ReactPageScroller>
</div>
)
}