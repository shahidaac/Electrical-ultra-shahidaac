import React from 'react';
import { Container, Row } from 'react-bootstrap';
import reviewGirls from '../../../images/reviewGirls.jpg'
import Team from '../Team/Team';
import './Teams.css'
const teams = [
    {
        id: 1,
        img: reviewGirls,
        name: 'Maria & Ana'
    },
    {
        id: 2,
        img: reviewGirls,
        name: 'Precilla & Mia'
    },
    {
        id: 3,
        img: reviewGirls,
        name: 'Jassy & Karli'
    },
    {
        id: 4,
        img: reviewGirls,
        name: 'Lucy & Letti'
    }
]

const Teams = () => {
    return (
        <div className="teams">
            <Container>
               <div className="section-title">
                   <h1>Our Experienced Engineers</h1>
               </div>
                <Row>
                    {
                    teams.map(team => <Team key={team.id} team={team}></Team>)  
                    } 
                </Row>
            </Container> 
        </div>
    );
};

export default Teams;