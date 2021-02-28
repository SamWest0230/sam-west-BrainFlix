import React from 'react'
import './components-styles/Recommended.scss'




function Recommended(props) {
    return(
        <section className='recommended'>
        <div className='recommended__video' id={props.id}>
            <img className='recommended__video--pic' src={props.image} onClick={props.videoselect}></img>
            <div className='recommended__video--info'>
                <h3 className='recommended__video--info-title'>{props.title}</h3>
                <h4>{props.channel}</h4>
            </div>
        </div>
        </section>
    );
}

export default Recommended;

