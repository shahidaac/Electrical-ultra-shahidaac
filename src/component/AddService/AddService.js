import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/Navbar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "fc7b2df1f12a67a996c8e90d6a7a8615");
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            pName: data.pName,
            description: data.description,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
            image: imageURL
        }
        const newBooking = {...loggedInUser, ...bookData};
        const url = `https://serene-crag-41999.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => {
            console.log('from the server');
            alert('service has been added!')
        })
        console.log(data)
        console.log(newBooking)
    };
    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col md={3} xs={12}>
              <Sidebar></Sidebar>
            </Col>
            <Col md={9} xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="pName">Service Catalogue</label>
                <input
                  className="form-control"
                  name="pName"
                  placeholder="Service Name"
                  {...register("pName")}
                />
                <br />
                <label htmlFor="description">Service Descriptions</label>
                <input
                  className="form-control"
                  name="description"
                  placeholder="descriptions"
                  {...register("description")}
                />
                <br />
                <label htmlFor="image">Please upload your service images</label>
                <input
                  className="form-control"
                  name="image"
                  type="file"
                  onChange={handleImageUpload}
                />
                <br />
                <input type="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AddService;