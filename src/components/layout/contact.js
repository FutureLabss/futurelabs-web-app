import "./contact.css";

export default function Contact(props) {
    return (
        <div>
           
<div className="container">
<h1 className="contact mb-5">Contact Us</h1>
<div className="row">
<div className="col-sm-6">
<input className="form-control vred form-control-lg mb-5" type="text" placeholder="Your name "></input>
<input className="form-control vred form-control-lg mb-5" type="text" placeholder="Your phone number"></input>
<input className="form-control vred form-control-lg mb-5" type="text" placeholder="Your company"></input>
<input className="form-control vred form-control-lg mb-5" type="text" placeholder="Your@email.com"></input>
    </div>
    <div className="col-sm-6 text-center">
    <div className="form-floating vred">
  <textarea className="form-control vred" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "263px"}}></textarea>
  <label for="floatingTextarea2 vred">Leave a comment here</label>
</div>
<button type="button" class="btn buttons  text-center mt-5">Submit</button>
    </div>
    </div>
</div>

        </div>

    )
}