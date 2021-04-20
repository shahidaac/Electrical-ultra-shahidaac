import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../../App';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';
import './BookingList.css'

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch('https://serene-crag-41999.herokuapp.com/userOrders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrderedProducts(data))
    } , [])
    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col md={3} xs={12}>
              <Sidebar></Sidebar>
            </Col>
            <Col md={9} xs={12}>
              <div className="service-detail">
                <div className="detail-header">
                  <ul>
                    <li className="book"> Booked List</li>
                    <li className="book-user-name">{loggedInUser.name}</li>
                  </ul>
                </div>
                <Row>
                  {orderedProducts.map((order) => (
                    <Col md={4} xs={12}>
                      <Card className="service">
                        <Card.Img variant="top" src={order.book.image} />
                        <Card.Body>
                          <Card.Title>{order.book.pName}</Card.Title>
                          <Card.Text>{order.book.description}</Card.Text>
                        </Card.Body>
                        <p className="status">on going</p>
                      </Card>
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

export default BookingList;