
import './footer.css'

export default function Footer(props) {
    return (
        <div>
            <div className="container">
  <div className="row mt-5 d-flex justify-content-around last">
    <div className="col-sm-3">
      <h6>
        <strong>About Future Labs</strong> 
      </h6>

      <p>
        We are a dedicated team of creative and innovative content and corporate strategists, Designers, Developers and Leaders;we will help
        you build your project ideas into the reality you
        hope to create.
      </p>
    </div>

    <div className="col-sm-3">
      <h6>
        <strong>Contact Us </strong>
      </h6>

      <p>
        +160726007432 <br />
        hello@futurelabs.agency
      </p>
    </div>

    <div className="col-sm-3">
      <h6>
        <strong>Let's Get in Touch</strong>
        <p>
          Sign up to recieve our newsletter about industry trends
        </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control rounded" placeholder="Enter your@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary text-white email rounded" type="button">Send</button>
          </div>
        </div>

      </h6>

    </div>


  </div>
  
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-12 foot">

    </div>
  </div>
</div>

        </div>

    )
}