import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Jumbotron} from 'react-bootstrap';
import TeamList from '../TeamList/TeamList';
import './Home.css'
import logo from '../../Images/leaguelogo.webp'

const Home = () => {
    const [teams,setTeams]=useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(response=>response.json())
        .then(data=>setTeams(data.teams))
    },[])
    return (
        <div>
        <div className='banner'>
        <Jumbotron fluid>
            <img style={{width:'170px',height:'170px'}} src={logo} alt=""/>
            <h1 style={{color:'antiquewhite'}}>ENGLISH PREMIER LEAGUE</h1>
        </Jumbotron>
        </div>
        <div className='container py-2'>
        <div className='row'>
            {
                teams.map(teams=> <TeamList teams={teams} key={teams.idTeam}></TeamList>)
            }
        </div>
        </div>
        </div>
    );
};
export default Home;