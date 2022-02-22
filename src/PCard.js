import React from "react";
import Location  from './Location';
import Phone from './Phone';
import { useLocation } from "react-router";
const PCard  =() =>{
    const {state} =useLocation();
    const userData = state;
    return (
    <div>
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <div className="card__image">
                    <img src={userData.picture.medium}/>
                </div>
            <Location location={userData.location}/>
            <Phone number={userData.phone} type="Home"/>
            <Phone number={userData.cell} type="Cell"/>
            </div>
        </div>
    </div>
    )
};
export default PCard;