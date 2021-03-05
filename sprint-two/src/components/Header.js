import React from 'react';
import logo from '.././assets/logos/Logo-brainflix.svg';
import userPic from '.././assets/images/Mohan-muruge.jpg'
import { Link } from 'react-router-dom';
import './components-styles/Header.scss'


function Header(props) {
    return(
        <header className="header">
        <div className='header__container'>
        <img className="header__container--logo" src={logo} alt='site logo'></img>
        </div>
        <input className="header__search" type="text" placeholder="Search..."></input>
        <div className="header__user"> 
        <Link to={`upload`}>
        <button className="header__button">+ Upload</button>
        </Link>
        <img className="header__userPic" src={userPic} alt='user Pic'></img>
        </div>
        </header>
    );
}

export default Header;