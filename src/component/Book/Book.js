import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../../App';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {id} = useParams();
    const [book, setBook] = useState({});

    const userDetail = {
        ...loggedInUser,
        role: 'user'
    }

    fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
        .then(res => res.json())
        .then(data => {
            console.log('added');
        })

    const handlePaymentSuccess = paymentId => {
        const orderDetail = {
            ...loggedInUser,
            book,  
            paymentId,
            orderTime: new Date()
        }

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('order has been placed!');
            }
        })
    }
    
    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [id])
    console.log(book)
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
                    <li className="book">Order history</li>
                    <li className="book-user-name">{loggedInUser.name}</li>
                  </ul>
                </div>
                <ul className="book-info">
                  <li>{book.pName}</li>
                  <li>{book.description}</li>
                  <p> Consultant fee is $999</p>
                </ul>
                <PaymentProcess
                  handlePayment={handlePaymentSuccess}
                ></PaymentProcess>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Book;