import React from 'react'
import './components-styles/Video.scss'
import likes1 from '.././assets/icons/Icon-likes.svg'
import eye from '.././assets/icons/Icon-views.svg'
function Video (props){

    const {title, channel, timestamp, views, likes, description} = props.info

    // function taking the timestamp prop and turning it into a human date
        let newDay = (time) => {
        let day = time;
        let today = new Date(day)
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        today = `${mm}/${dd}/${yyyy}`;
        
        return today;
        }
        return(
            <section className="video">
            <h1 className='video__title'>{title}</h1>
            <div className='video__div'>
            <div className='video__infobox'>
            <h2 className='vide0__infobox--channel'>{channel}</h2>
            <h4 className="video__infobox--timestamp">{newDay(timestamp)}</h4>
            </div>
            <div className="video__stats">
                <img src={eye} alt='views icon' />
                <h3 className="video__stats--views">{views}</h3>
                <img src={likes1} alt=''like icon/>
                <h3 className='video__stats--likes'>{likes}</h3>
            </div>
            </div>
            <div className="video__description"> 
                <div className="video__description--content">
                <h4>{description}</h4>
                </div>
            </div>
            </section>

        )





    
}

export default Video;