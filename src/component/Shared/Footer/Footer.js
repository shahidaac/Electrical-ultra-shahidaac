import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
      <div class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="row">
              <div class="col-lg-3">
                <div class="about">
                  <h3 class="info-title">About Electman</h3>
                  <p>
                    Pellentesque porta arcu velit faucibs kodales dolor rhoncus
                    sed. Curabitur lacinia masysa vitaese Duis aute .
                  </p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">Installation & Monitoring </h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">
                      Replacemrnt Warrenty Claims
                    </a>
                    <a class="nav-link" href="#">
                      Energy Equipments
                    </a>
                    <a class="nav-link" href="#">
                      After Sales Service Free
                    </a>
                    <a class="nav-link" href="#">
                      Transformer testing
                    </a>
                  </nav>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">My Account</h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">
                      Electrical Maintenance
                    </a>
                    <a class="nav-link" href="#">
                      Electrical Repair
                    </a>
                    <a class="nav-link" href="#">
                      AC Installation
                    </a>
                    <a class="nav-link" href="#">
                      Heating Services
                    </a>
                  </nav>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="info-box">
                  <h3 class="info-title">Quick Links</h3>
                  <nav class="nav flex-column footer-nav">
                    <a class="nav-link" href="#">
                      News Blog
                    </a>
                    <a class="nav-link" href="#">
                      Careers
                    </a>
                    <a class="nav-link" href="#">
                      Meet Our Team
                    </a>
                    <a class="nav-link" href="#">
                      Case Studies
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
              <p className="justify-content-md-center">
                <small>
                  © Copyright {new Date().getFullYear()}, SHAHIDAAC™ | All
                  Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      
    );
};

export default Footer;