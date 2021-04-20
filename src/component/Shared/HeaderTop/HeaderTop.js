import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeaderTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMobile, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { Nav } from 'react-bootstrap';

const HeaderTop = () => {
    return (
      <div className="hero-topbar">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className="contact-info">
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faMobile} />
                    </span>
                    <a href="#"> +880 999 555 97</a>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <a href="#">info@electricalultra.com.bd</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="social">
                <Nav className="ml-auto">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCloudDownloadAlt} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faSearchLocation} />
                      </a>
                    </li>
                  </ul>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default HeaderTop;