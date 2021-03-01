import React from 'react'
import './components-styles/Video.scss'

function Video (props){

    const {image, title, channel, timestamp, views, likes, description} = props.videos

    
        let newDay = (time) => {
        let day = time;
        let today = new Date(day)
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        today = `${mm}/${dd}/${yyyy}`;
        
        // const newDate = new Date(day).toDateString(mm/dd/yyyy);
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
                <h3 className="video__stats--views">{views}</h3>
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