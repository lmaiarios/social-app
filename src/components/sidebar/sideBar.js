import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './sideBar.css';

function SideBar({picture, name, phone, email, city, country}) {

  return (
    <div className="sidebar">
        <img className="avatar" src={picture} alt='Avatar' />
        <p>{name}</p>
        <p><i className="fas fa-phone"></i> {phone}</p>
        <p><i className="fas fa-envelope-square"></i> {email}</p>
        
        <p>
            <Link to={'/country/'+country.toLowerCase()}>
                <i className="fas fa-map-marker-alt"></i>
                {' '+city+', '+country}
            </Link>
        </p>
        
    </div>
  );
}

export default SideBar;