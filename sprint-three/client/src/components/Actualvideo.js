import React from 'react'
import './components-styles/Video.scss'

function Actualvideo(props) {

    const { image } = props.video


    return (

        <div className="actualVideoContainer">
            <video className="actualVideo" poster={image} controls></video>
        </div>
    )

}
export default Actualvideo;