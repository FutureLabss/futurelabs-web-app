import "./contact.css";
import React from 'react'

export default function Contact(props) {
    const {isMobile} = props
    let value = "268px"
    
    if(isMobile <= 600){
        value = "100px"
    }

    return (
        <section className="contact-section">
            <div className="container">
                <h1 className="contact mb-5">Contact Us</h1>
                <div className="row">
                <div className="col-sm-6">
                <input className="form-control vred form-control-lg " type="text" name placeholder="Your name "></input>
                <input className="form-control vred form-control-lg " type="text" phone placeholder="Your phone number"></input>
                <input className="form-control vred form-control-lg " type="text" company placeholder="Your company"></input>
                <input className="form-control vred form-control-lg " type="text" email placeholder="Your@email.com"></input>
                    </div>
                    <div className="col-sm-6 text-center">
                    <div className="form-floating vred">
                  <textarea className="form-control contact-textarea vred" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: value}}></textarea>
                  <label for="floatingTextarea2 vred">Leave a comment here</label>
                </div>
                <button type="button" class=" buttons  text-center mt-5">Submit</button>
                </div>
                </div>
            </div>

        </section>

    )
}