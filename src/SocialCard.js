import './SocialCard.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';


const SocialCard =({userData}) => {
    const navigate=useNavigate();
    const MoreInfo=(Event)=>{
        // console.log(userData);
        navigate('/Info',{state:userData})
    };
    return(
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
            <div className="card__image"><img src={userData.picture.medium}/></div>
            </div>
            <button className="button" onClick={MoreInfo}>More Info</button>

        </div>
    );
};
export default SocialCard;