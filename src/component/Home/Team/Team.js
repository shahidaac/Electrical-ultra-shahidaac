import React from 'react';
import { Col } from 'react-bootstrap';

const Team = ({team}) => {
    return (
      <Col md={3} sm={6} xs={12}>
        <div className="team">
          <img src={team.img} alt="members" className="img-fluid" />
          <h4>{team.name}</h4>
        </div>
      </Col>
    );
};

export default Team;