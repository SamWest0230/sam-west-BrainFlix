import React from 'react'
import './components-styles/Video.scss'

function Video (props){

    const {image, title, channel, timestamp, views, likes, description} = props.videos


        return(
            <section className="video">
                <video className="video__Player" poster={image} controls></video>
            <h1 className='video__title'>{title}</h1>

            <div className='video__infobox'>
            <h2 className='vide0__infobox--channel'>{channel}</h2>
            <h4>{timestamp}</h4>
            </div>
            <div>
                <h3>{views}</h3>
                <h3>{likes}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            </section>


        )





    
}

export default Video;