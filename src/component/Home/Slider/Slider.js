import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
import './Slider.css'

const Slider = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="slider 1" />
            <Carousel.Caption>
              <h3>We’re Best & Fixing Specialist! #Electricity</h3>
              <p>
                A large number of production need huge Quality work with Highly
                connection. Also need extra source of Energy. We have all
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="slider 2" />

            <Carousel.Caption>
              <h3>Advanced Electrical Solutions</h3>
              <p>
                Our circuit testers can introduce anything from new security
                lighting for your outside to an entire home generator that will
                keep your machines working during a force blackout. Our
                establishment administrations are constantly done immediately
                and securely.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="slider 3" />

            <Carousel.Caption>
              <h3>SAVE ENERGY FOR FUTURE</h3>
              <p>
                Emergency Electricity Fixing within 60 min Building Wearing and
                Electricity Connection on new Home Install Home Solar Panel and
                IPS with UPS support
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Slider;