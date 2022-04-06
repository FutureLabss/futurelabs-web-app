import "./contact.css";
import React, {useState} from 'react'
import axios from "axios";

const SERVER_URL = 'https://futurelabs-blog.herokuapp.com/contact';

export default function Contact(props) {
    const [values, setValues] = useState({})

    const {isMobile} = props
    let width = "268px"
    
    if(isMobile <= 600){
        width = "150px"
    }

    const handleChange = e => {
        const {name, value} = e.target;        
        setValues({ ...values, [name]:value })        
    }

    const handleSubmit = async(e) => {        
        e.preventDefault();      
        await axios.post(SERVER_URL, values)
        .catch(error => console.error(error))      
    }

    return (
        <section className="contact-section">
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className="contact mb-5 text-center">Contact Us</h1>
                    <div className="row">
                    <div className="col-sm-6">
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="name" placeholder="Your name "></input>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="phone" placeholder="Your phone number"></input>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="company" placeholder="Your company"></input>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="email" placeholder="Your@email.com"></input>
                        </div>
                        <div className="col-sm-6 text-center">
                        <div className="form-floating vred">
                      <textarea className="form-control contact-textarea vred" onChange={handleChange} name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: width}}></textarea>
                      <label for="floatingTextarea2 vred">Leave a comment here</label>
                    </div>
                    <button type="submit" class=" buttons  text-center mt-5">Submit</button>
                    </div>
                    </div>
                </form>
            </div>

        </section>

    )
}