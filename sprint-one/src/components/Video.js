import React from 'react'
import './components-styles/Video.scss'

function Video (props){

        return(
            <section className="video">
                <video className="video__Player" poster={props.videos.image} controls></video>
            <h1 className='video__title'>{props.videos.title}</h1>

            <div className='video__infobox'>
            <h2 className='vide0__infobox--channel'>{props.videos.channel}</h2>
            <h4>{props.videos.timestamp}</h4>
            </div>
            <div>
                <h3>{props.videos.views}</h3>
                <h3>{props.videos.likes}</h3>
            </div>
            <div>
                <p>{props.videos.description}</p>
            </div>
            </section>


        )





    
}

export default Video;