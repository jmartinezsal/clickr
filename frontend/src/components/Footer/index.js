import React from 'react';

import './footer.css'
function Footer(){

  return(
    <footer className="footer">
        <div className="footer-left">
          <h3>Created by Jose Martinez </h3>
          <a href="https://github.com/jmartinezsal">
          <i class="fa-brands fa-github"> &nbsp; Github </i>
          </a>
          <a href="https://www.linkedin.com/in/jose-martinez-b7a1b3b8/">
          <i class="fa-brands fa-linkedin">&nbsp; LinkedIn</i>
          </a>
        </div>
      <div className="footer-right">
        <h3>Powered by:</h3>
        <p>Javascript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Sequelize</p>
      </div>

    </footer>

  )
}


export default Footer;
