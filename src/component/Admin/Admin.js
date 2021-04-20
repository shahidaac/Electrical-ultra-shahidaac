import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Shared/Navbar/NavBar';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
                    <li className="book">Admin</li>
                    <li className="book-user-name">{loggedInUser.name}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Admin;