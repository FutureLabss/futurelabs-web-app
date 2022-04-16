import "./contact.css";
import React, { useState } from 'react'
import axios from "axios";
import { CircularProgress,  Alert } from "@mui/material";

const SERVER_URL = 'https://futurelabs-blog.herokuapp.com/contact';

export default function Contact(props) {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const {isMobile} = props
    let width = "268px"
    
    if(isMobile <= 600){
        width = "150px"
    }

    const handleChange = e => {
        const {name, value} = e.target;        
        setValues({ ...values, [name]:value })        
    }    

    const handleReset = () => {
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
        )
        Array.from(document.querySelectorAll('textarea')).forEach(
            input => (input.value = "")
        )
    } 

    const handleSubmit = async(e) => {        
        e.preventDefault();
       
        try{
            setError("")
            setLoading(true)      
            await axios.post(SERVER_URL, values)
            setMessage("Successfully sent!")
            handleReset();         
            
        }catch(error){
            setError("Failed to send, please try again")
        }
        setLoading(false);            
    }

    return (
        <section className="contact-section">
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className="contact mb-5 text-center">Contact Us</h1>
                    <div className="row">
                    <div className="col-sm-6">
                    <input className="form-control vred form-control-lg " type="text"  onChange={handleChange} name="name" placeholder="Your name " required/>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="phone" placeholder="Your phone number" required/>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="company" placeholder="Your company" required/>
                    <input className="form-control vred form-control-lg " type="text" onChange={handleChange} name="email" placeholder="Your@email.com" required/>
                        </div>
                        <div className="col-sm-6 text-center">
                        <div className="form-floating vred">
                      <textarea className="form-control contact-textarea vred" onChange={handleChange} name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: width}} required></textarea>
                      <label for="floatingTextarea2 vred">Leave a comment here</label>
                    </div>
                        {
                            error && (
                                <Alert severity="error">
                                    {error}
                                </Alert>
                            )
                        }
                        {
                            message && (
                                <Alert severity="success">
                                    {message}
                                </Alert>
                            )
                        }
                    {loading ?  <div className="text-center mt-5"><CircularProgress size={30} /></div>: 
                        <button type="submit" class="buttons  text-center mt-3" disabled={false}>Submit</button>
                    }
                    </div>
                    </div>
                </form>
            </div>

        </section>

    )
}