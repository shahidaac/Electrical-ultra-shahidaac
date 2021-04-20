import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
           <Container>
               <div className="section-title">
                   <h1>Our Services</h1>
               </div>
            <Row>
                {
                  services.map(service => <Service key={service._id} service={service}></Service>)  
                }
            </Row>
           </Container> 
        </div>
    );
};

export default Services;