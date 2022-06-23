import React from "react";
import { icons } from "../../assets";
import ReactPageScroller from "../pageScroll";
import Footer from "../layout/footer";
import Contact from "../layout/contact";
import { Link } from "react-router-dom"

function Section(props) {
  const { data } = props;
  let width = window.screen.width;

  return (
    <ReactPageScroller renderAllPagesOnFirstRender>
       {data.map((item, index) => {
        return (
          <div key={index} ref={item.containerRef} className="video-container .text-danger .bg-danger">
            <video ref={item.videoRef} autoPlay muted loop poster={item.icon} className="overall">
              <source src={item.src} type="video/mp4"/>
            </video>
            <div className="overlay d-flex justify-space-between ontop .bg-warning px-5 text-white">
              <div className="text-box .bg-danger">
                <h5 className="line1">
                    {item.line1} <br className="mobile-no" />  {item.break} <br className="mobile-no" /> {item.break1}
                </h5>
                {item.link ? (
                  <Link to={item.link}>
                    <button
                      type="button"
                      class="btn btn-outline-warning services-button-text mt-4 text-white py-1 px-5"
                    >
                      Learn More
                    </button>
                  </Link>
                ) : (
                  <h6 className="line3">
                    {" "}
                    {item.line3} <br className="mobile-no" /> {item.line4} <br className="mobile-no" />{item.line5}
                  </h6>
                )}
              </div>
              {/* THE MUTE ICON IS HERE */}
              <div className="mute-box .bg-info" onClick={() => item.handleSound(item.index)}>
                {item.sound ? (
                  <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.unmute} alt=""/>
                ) : (
                  <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src={icons.mute} alt=""/>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <Contact isMobile={width} />
      <Footer />
    </ReactPageScroller>
  );
}

export default Section;
