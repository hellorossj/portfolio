import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import rossImage from '../assets/images/ross.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={rossImage} alt="Ross Jones" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hellorossj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jones-ross/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ross Jones</h1>
          <p>Mechanical EIT • Engineering Physics Graduate</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hellorossj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jones-ross/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
