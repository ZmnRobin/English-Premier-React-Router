import React from 'react';
import './TeamList.css'
import {Card,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const TeamList = (props) => {
    const {strTeam,strTeamBadge,strSport,idTeam}=props.teams;
    return (
        <div className='col-md-4 my-3'>
        <Card className='club-card' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title> <h4 className='font-weight-bold'> {strTeam}</h4></Card.Title>
                <Card.Text>Sports type:{strSport}</Card.Text>
               <Link to={`/TeamDetail/${idTeam}`}> <Button variant="primary"> Explore <FontAwesomeIcon icon={faArrowRight} /> </Button></Link>
            </Card.Body>
        </Card>
        </div>
    );
};
export default TeamList;