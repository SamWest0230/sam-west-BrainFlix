import React from 'react'
import './components-styles/Recommended.scss'



function Recommended(props) {
    return(
        <section className='recommended'>    
        <div className='recommended__video' key={props.id}>
            <img className='recommended__video--pic' src={props.image}></img>
            <div className='recommended__video--info'><h3>{props.title}</h3><h4>{props.channel}</h4></div>
        </div>
        </section>
   
    );
}

export default Recommended;

