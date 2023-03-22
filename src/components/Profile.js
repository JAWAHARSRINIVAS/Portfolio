import React from 'react';
import '../css/profile.css';


function Profile() {
  return (
    <div className="Profile">
      <div className="left">
        <svg
          className="h-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 220"
        >
          <path
            fill="#27AE60"
            fillOpacity="1"
            d="M0,96L120,112C240,128,480,160,720,170.7C960,181,1200,171,1320,165.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div className="profile-image">
          <img src="images/nivas1.jpg" alt="nivas" />
        </div>
      </div>

      <div className="right">
        <div>Aspiring Web Developer</div>
        <h2>
          Hi, I'm <span>JAWAHARSRINIVAS S</span>
        </h2>
        <p>From Gobi,TamilNadu</p>
        <div className="about">
          I am a web Developer, I love to create professional websites
        </div>
        <button>
          <a href="Resume.pdf"  download >Download cv <i className="fa-solid fa-download"></i></a>
        </button>
      </div>
    </div>
  );
}

export default Profile;
