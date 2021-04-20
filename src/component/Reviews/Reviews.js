import React, { useState, useEffect } from 'react';
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://serene-crag-41999.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="reviews">
      <Container>
        <div className="section-title">
          <h1>Reviews</h1>
        </div>
        <Row>
          {reviews.map((review) => (
            <Review
              key={review._id}
              review={review}
            ></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};



export default Reviews;