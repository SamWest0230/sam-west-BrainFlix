import React from 'react';
import logo from '.././assets/logos/Logo-brainflix.svg';
import userPic from '.././assets/images/Mohan-muruge.jpg'
import './components-styles/Header.scss'


function Header(props) {
    return(
        <header className="header">
        <div className='header__container'>
        <img className="header__container--logo" src={logo}></img>
        </div>
        <input className="header__search" type="text" placeholder="Search..."></input>
        <div className="header__user"> 
        <button className="header__button">+ Upload</button>
        <img className="header__userPic" src={userPic}></img>
        </div>
        </header>
    );
}

export default Header;