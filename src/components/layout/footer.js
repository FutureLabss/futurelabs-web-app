import React, { useState, useEffect } from "react";
import "./footer.css";
import { Nav } from "react-bootstrap";
import {icons} from "../../assets";

const testimonial = [
  {
    id: 0,
    name: "Ima-obong",
    career: "Senior Designer at FutureLabs",
    testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: icons.profile,
  },
  {
    id: 1,
    name: "Abasifreke",
    career: "CTO at FutureLabs",
    testimonial: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    image: icons.profile,
  },
  {
    id: 2,
    name: "Triumph",
    career: "Senior Model Designer at FutureLabs",
    testimonial: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: icons.profile,
  },
]

export default function Footer(props) {
  const [date, setDate] = useState();
  const [data] = useState(testimonial)
  let [count, setCount] = useState(0)
  
  useEffect(() => {
    setDate(new Date().getFullYear());
  },[data]);

 

  const handleClick = (value) => {
    if(value === "prev" && count !== 0 ){
      count--;
      setCount(count)
      console.log("prev ==> ", count)
    }
    if(value === "next" && count < data.length - 1 ){
      count++;
      setCount(count)
      console.log("next ==> ", count)
    }
  }

  return (
  <section className="footer">
      <div className="container">
      <div className="container--carousel">
        <section className="carousel--left">
          <h4 class="carousel--text">What Our <br />Customers<br/> Are Saying</h4>
          <div class="carousel--controls">
            <button className="prev" onClick={() => handleClick("prev")}><img src={icons.left} alt="left" width="20px"/></button>
            <button className="next" onClick={() => handleClick("next")}><img src={icons.right} alt="right" width="20px"/></button>
          </div>
        </section>
        <section className="testimonials">
          {data.filter(item => item.id === count).map(item =>
           (
            <>
            <div className="testimonial">{item.testimonial}</div>
            <div className="profile">
              <img src={item.image} alt="profile" />
              <h5>{item.name}</h5>
              <h6>{item.career}</h6>
            </div>
            </>
           )
           )}
        </section>
      </div>
        <div className="row d-flex justify-content-around lastted mobile-nop3 ">
        
          <div className="col-sm-3">
            <h6>
              <img
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png"
                alt=""
              />
            </h6>

            <p className="ca">
              +160726007432 <br />
              hello@futurelabs.agency
            </p>
            <div className="row ph-no">
              <div className="col-3 mb-3 vid">
                <a href="https://twitter.com/FutureLabsNG">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718872/Vector_tdilvr.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-3 mb-3 vid">
                <a href="https://www.facebook.com/FutureLabsNews">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718859/Vector_1_txd0dt.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-3 mb-3 vid">
                <a href="https://www.instagram.com/futurelabshq/">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718842/Vector_2_mjerqh.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="row ph-yes mb-3 vid">
              <div className="col-4">
                <img
                  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718872/Vector_tdilvr.png"
                  alt=""
                />
              </div>
              <div className="col-4 mb-3">
                <img
                  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718859/Vector_1_txd0dt.png"
                  alt=""
                />
              </div>
              <div className="col-4 mb-3">
                <img
                  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718842/Vector_2_mjerqh.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 mobile-yest">
            <h6>
              <strong className="carl mt-xs-2">Company</strong>
            </h6>

            <p className="fot down">
              <Nav.Link className="  text-muted" href="/">
              <strong>HOME</strong>
              </Nav.Link>
            </p>
            <p className="fot  down">
              <Nav.Link className="  text-muted" href="/about">
                <strong>ABOUT</strong>
              </Nav.Link>
            </p>
            <p className="fot  down">
              <Nav.Link className="  text-muted" href="/services">
                <strong>SERVICES</strong>
              </Nav.Link>
            </p>
            <p className="fot  down">
              <Nav.Link className="  text-muted" href="/blog">
                <strong>BLOG</strong>
              </Nav.Link>
            </p>
          </div>
          
          <div className="col-sm-3">
            <h6>
              <strong className="carl">Let's Get in Touch</strong>
              <p className="ca my-3">
                Sign up to receive our newsletter about industry trends
              </p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Enter your@email.com"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

                <button class="btn colors text-white" type="button">
                  Send
                </button>
              </div>
            </h6>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-12 foot"></div>
        </div>
      </div> */}
      <div className="copyright">
        &copy;<span class="copyright_spacing">{date}</span>
        <span class="copyright_spacing">FUTURELABS</span>
      </div>
  </section>
  );
}
