import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="title">
        <div className="bg-text">Contactme</div>
        <div className="main-text">
          Contact<span>Me</span>
        </div>
      </div>
      <div className="Total-contact">
        <div className="Left-contact">
          <div className="contact-head">contact me here</div>
          <div className="contact-subhead">Get in touch</div>
          <div className="details">
            <div className="location detail">
              <i className="fa-sharp fa-solid fa-location-dot"></i>Location:
              <div>Gobi,TamilNadu</div>
            </div>
            <div className="email detail">
              <i className="fa-solid fa-envelope"></i>Email:
              <div>jawaharsrinivas77@gmail.com</div>
            </div>
            <div className="location detail">
              <i className="fa-solid fa-phone"></i>Mobile Number:
              <div>(+91)9445836057</div>
            </div>
          </div>
          <div className="icons">
            <a href="/" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="/" className="icon">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="right-contact">
          <form className="contact-form">
            <label className="input-control">
              <input type="text" required placeholder={'YOUR NAME'} />
            </label>
            <label className="input-control">
              <input type="email" required placeholder={'YOUR EMAIL'} />
            </label>
            <label className="input-control">
              <input type="subject" required placeholder={'YOUR SUBJECT'} />
            </label>
            <label className="input-control">
              <textarea type="text" required placeholder={'YOUR NAME'} />
            </label>
          </form>
          <button>
            Send <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
