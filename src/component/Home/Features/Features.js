import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import tinyImg1 from "../../../images/tinyImg1.png";
import tinyImg2 from "../../../images/tinyImg2.png";
import tinyImg3 from "../../../images/tinyImg3.png";
import tinyImg4 from "../../../images/tinyImg4.png";
import tinyImg5 from "../../../images/tinyImg5.png";
import tinyImg6 from "../../../images/tinyImg6.png";
import './Feature.css';

const features = [
  {
    smallPicture: tinyImg1,
    title: "Faulty & Old Wiring",
    description:
      "We Have The Best Electrician For The Electric Service. Quality Work With Professional Worker And Safety",
  },
  {
    smallPicture: tinyImg2,
    title: "Short Circuit Repair",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    smallPicture: tinyImg3,
    title: "Surge Protection",
    description:
      "We Have The Best Electrician For The Electric Service. Quality Work With Professional Worker And Safety",
  },
  {
    smallPicture: tinyImg4,
    title: "Electricity Overuse",
    description:
      "We Have The Best Electrician For The Electric Service. Quality Work With Professional Worker And Safety",
  },
  {
    smallPicture: tinyImg5,
    title: "Install A Ceiling Fan",
    description:
      "We Have The Best Electrician For The Electric Service. Quality Work With Professional Worker And Safety",
  },
  {
    smallPicture: tinyImg6,
    title: "Electricity Overuse",
    description:
      "All Services in One Place Get Our Fast  and Modern with minimum time limit.We are the Best in this City Since 1999",
  },
];

const Features = () => {
    return (
      <div className="features">
        <Container>
          <h2 className="text-center p-3">WELCOME TO ELECTRIC ULTRA</h2>
          <Row>
            <Col className="feature-center" xs={12}>
              <div className="feature">
                <Row>
                  {features.map((feature) => (
                    <Col lg={4} xs={12}>
                      <div className="single-feature">
                        <img
                          src={feature.smallPicture}
                          alt="Feature Image"
                          className="img-fluid"
                        />
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Features;