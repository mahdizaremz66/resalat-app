import React from 'react'
import contactImageSrc from '../assests/images/contactUs.png'

const ContactUsPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 bg-info rounded p-3">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row align-items-center pt-1">
        <div className="col-md-7">
          <div className="mt-5">
            <h3 className="text text-primary">How to Contact us</h3>
            <h5>+98 913 253 7217</h5>
            <h5>+35 35 25 2000</h5>
            <h5>mahdizare.mz66@gmail.com</h5>
          </div>

          <div className="mt-5">
            <div className="mb-3">
              <label className="form-label">Your Name :</label>
              <input type="text" className="form-control" placeholder="Please type your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message :</label>
              <input type="text" className="form-control" placeholder="Please type your message" />
            </div>
            <button className="btn btn-outline-primary ms-3">Send</button>
          </div>
        </div>

        <div className="col-md-5 text-center">
          <img src={contactImageSrc} alt="aboutImg" className='img-fluid about-img' />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage;
