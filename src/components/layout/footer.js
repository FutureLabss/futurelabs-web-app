import React, { useState, useEffect } from "react";
import "./footer.css";
import { Nav } from "react-bootstrap";

export default function Footer(props) {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row mt-5 d-flex justify-content-around lastted mobile-nop3 ">
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

            <p className="fot ">
              <Nav.Link className="  text-muted" href="/">
                HOME
              </Nav.Link>
            </p>
            <p className="fot  ">
              <Nav.Link className="  text-muted" href="/about">
                <strong>ABOUT</strong>
              </Nav.Link>
            </p>
            <p className="fot  ">
              <Nav.Link className="  text-muted" href="/services">
                <strong>SERVICES</strong>
              </Nav.Link>
            </p>
            <p className="fot  ">
              <Nav.Link className="  text-muted" href="/blog">
                <strong>BLOG</strong>
              </Nav.Link>
            </p>
          </div>
          <div className="col-sm-3 mobile-nop">
            <h6>
              <strong className="carl mt-xs-2">Company</strong>
            </h6>

            <p className="fot ">HOME</p>
            <p className="fot  my-2">ABOUT</p>
            <p className="fot  my-2">SERVICES</p>
            <p className="fot  my-2 ">BLOG</p>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 foot"></div>
        </div>
      </div>
      <div className="copyright">
        &copy;<span id="copyright_date">{date}</span>{" "}
        <img
          src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
