import React from 'react';

import './footer.css'
function Footer(){

  return(
    <footer className="footer">
        <div className="footer-left">
          <h3>Created by Jose Martinez </h3>
          <a href="https://github.com/jmartinezsal" target="_blank">
          <i class="fa-brands fa-github"> &nbsp; Github </i>
          </a>
          <a  href="https://www.linkedin.com/in/jose-martinez-b7a1b3b8/" target="_blank">
          <i class="fa-brands fa-linkedin">&nbsp; LinkedIn</i>
          </a>
        </div>
      <div className="footer-right">
        <h3>Powered by:</h3>
        <i class="fa-brands fa-js">Javascript</i>
        <i class="fa-brands fa-html5">HTML</i>
        <i class="fa-brands fa-css3">CSS</i>
        Sequelize
        <i class="fa-brands fa-react">React</i>

      </div>

    </footer>

  )
}


export default Footer;
