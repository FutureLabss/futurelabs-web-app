import React, { useState, useEffect } from "react";
import "./footer.css";
import { Nav, Carousel} from "react-bootstrap";
import {icons} from "../../assets";

const testimonial = [
  {
    id: 0,
    name: "Ima-obong",
    career: "Senior Designer at FutureLabs",
    testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: icons.Imaobong,
  },
  {
    id: 1,
    name: "Abasifreke",
    career: "CTO at FutureLabs",
    testimonial: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    image: icons.Abas,
  },
  {
    id: 2,
    name: "Triumph",
    career: "Senior Model Designer at FutureLabs",
    testimonial: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: icons.Triumph,
  },
]

export default function Footer(props) {
  const [date, setDate] = useState();
  const [data] = useState(testimonial)
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  useEffect(() => {
    setDate(new Date().getFullYear());
  },[data]);

  return (
  <section className="footer">
  <Carousel className="container--carousel" activeIndex={index} onSelect={handleSelect}>
        {data.map(item => (
          <Carousel.Item style={{backgroundImage: `url("${item.image}")`}}>
          {/* <img
            className="d-block w-100 carousel-image-big"
            src={testimonial[0].image}
            alt="First slide"
          />  */}
          <div className="background-effect"></div>
          <Carousel.Caption>
          <img
            className="carousel-image-small"
            src={item.image}
            alt="First slide"
            width="50"
            height="50"
          /> 
          <p>{item.testimonial}</p>
          <div>
            <h3>{item.name}</h3>
            <p>{item.career}</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
        
      </Carousel>
      <div className="container">
      {/* <div className="container--carousel"> */}
      
      {/* </div> */}
        <div className="row d-flex justify-content-around lastted mobile-nop3 ">
        
          <div className="col-sm-3">
            <h6>
              <img
                src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png"
                alt=""
                id="futurelabs_logo"
              />
            </h6>

            <div className="ca show-text">
              <p>+160726007432</p>
              <p>hello@futurelabs.agency</p>
            </div>
            <div className="row ph-no">
              <div className="col-3 mb-3 vid">
                <a href="https://twitter.com/FutureLabsNG">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718872/Vector_tdilvr.png"
                    alt=""
                    id="social-media__image"
                  />
                </a>
              </div>
              <div className="col-3 mb-3 vid">
                <a href="https://www.facebook.com/FutureLabsNews">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718859/Vector_1_txd0dt.png"
                    alt=""
                    id="social-media__image"
                  />
                </a>
              </div>
              <div className="col-3 mb-3 vid">
                <a href="https://www.instagram.com/futurelabshq/">
                  <img
                    src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1636718842/Vector_2_mjerqh.png"
                    alt=""
                    id="social-media__image"
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
              <p className="ca  my-3">
                Sign up to receive our newsletter on industry trends
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
