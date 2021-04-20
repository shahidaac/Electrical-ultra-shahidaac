import React from 'react';
import { Col } from "react-bootstrap";

const Review = ({ review }) => {
  return (
    <Col md={4} sm={6} xs={12}>
      <div className="review">
        <p>{review.description}</p>
        <div className="review-name">
          <h5>{review.name}</h5>
          <p>{review.company}</p>
        </div>
      </div>
    </Col>
  );
};


export default Review;