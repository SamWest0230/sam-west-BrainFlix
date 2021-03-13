import React from 'react'
import { Link } from 'react-router-dom';
import './components-styles/Recommended.scss'




function Recommended(props) {
    const { id, image, title, channel } = props.video


    return (
        <section className='recommended'>
            <Link to={`/${id}`}>
                <div className='recommended__video' key={id}>
                    <img className='recommended__video--pic' src={image} alt='video thumbnail'></img>
                    <div className='recommended__video--info'>
                        <h3 className='recommended__video--info-title'>{title}</h3>
                        <h4>{channel}</h4>
                    </div>

                </div>
            </Link>
        </section>
    );
}

export default Recommended;

