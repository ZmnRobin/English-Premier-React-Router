import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Jumbotron} from 'react-bootstrap';
import './TeamDetail.css'
import found from '../../Images/found 1.png'
import country from '../../Images/flag (1) 1.png'
import football from '../../Images/football (1) 1.png'
import gender from '../../Images/male-gender-sign 1.png'
import maleImg from '../../Images/male.png'
import femaleImg from '../../Images/female.png'
import { FaTwitter,FaYoutube,FaFacebook } from 'react-icons/fa';

const TeamDetail = () => {
    const {idTeam}=useParams();
    const [teamDetail,setTeamDetail]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setTeamDetail(data.teams[0]))
    },[idTeam])
    const {strTeamBadge,strGender,strSport,strTeam,strTeamBanner,strCountry,intFormedYear,strStadiumDescription,strDescriptionEN,strTwitter,strYoutube,strFacebook}=teamDetail;
    let teamImg;
    if (strGender==='Male') {
        teamImg=<img className='mt-2' style={{width:'314px',height:'220px',marginLeft:'-16px'}} src={maleImg} alt=""/>
    }
    else{
        teamImg= <img className='mt-2' style={{width:'314px',height:'220px',marginLeft:'-16px'}} src={femaleImg} alt=""/>
    }
    const teamDetailBanner={
        backgroundPosition:'center',
        backgroundImage: `url(${strTeamBanner})`,
        width:'100%',
        height:'100%',
        backgroundRepeat:'no-repeat',
        marginTop:'0px',
    }
    return (
        <div className='detail-banner'>
            <Jumbotron fluid>
            <div style={teamDetailBanner}>
            <img style={{width:'170px',height:'180px',}} src={strTeamBadge} alt=""/>
            </div>
           </Jumbotron>
           <div className='container'>
           <div className='row team-details container mt-2'>
               <div className='col-md-4 icon-info'>
                   <h2 className='mt-1'>{strTeam}</h2>
                   <p><img className='icon' src={found} alt=""/> Founded  :{intFormedYear}</p>
                   <p><img className='icon' src={country} alt=""/> Country:{strCountry}</p>
                   <p><img className='icon' src={football} alt=""/> Sport Type : {strSport}</p>
                   <p><img className='icon' src={gender} alt=""/> Gender : {strGender} </p>
               </div>
               <div className='col-md-4'>
               </div>
               <div className='col-md-4'>
               {teamImg}
               </div>
           </div>
           <div className='row mt-4 m-1 p-3'>
               <h2>Club Info  </h2>
               <p style={{textAlign:'left'}}>{strDescriptionEN}</p>
           </div>
           <div className='row mt-4 m-1 p-3'>
               <h2>Stadium Info </h2>
               <p style={{textAlign:'left'}}>{strStadiumDescription}</p>
           </div>
           <div className='footer'>
               <a href={`https://${strTwitter}`} target="blank"><FaTwitter className='fa-icon twitter'/></a>
               <a href={`https://${strFacebook}`}target="blank"><FaFacebook className='fa-icon facebook'/></a>
               <a href={`https://${strYoutube}`} target="blank"><FaYoutube className='fa-icon youtube'/></a>
           </div>
           </div>
        </div>
    );
};
export default TeamDetail;