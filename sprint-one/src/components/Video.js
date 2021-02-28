import React from 'react'
import './components-styles/Video.scss'

function Video (props){

    const {image, title, channel, timestamp, views, likes, description} = props.videos


        return(
            <>
            <video className="actualVideo" poster={image} controls></video>
            
            <section className="video">
            <h1 className='video__title'>{title}</h1>
            <div className='video__div'>
            <div className='video__infobox'>
            <h2 className='vide0__infobox--channel'>{channel}</h2>
            <h4 className="video__infobox--timestamp">{timestamp}</h4>
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
            </>

        )





    
}

export default Video;