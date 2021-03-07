import React from 'react';
import './components-styles/Upload.scss'
import uploadPic from '../assets/images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'

function Upload(){

    let uploadAlert = () =>{
        window.alert("Video Was Uploaded!");
    }



    return(
        <section className='upload'>
        <h1 className="upload__title">Upload Video</h1>
        <div className='upload--desktopOnly'>
        <div className="upload--tablet">
            <h4>VIDEO THUMBNAIL</h4>
            <img className='upload__video' src={uploadPic} />
        </div>
        <form className="upload__form">
            <label><h4>TITLE YOUR VIDEO</h4>
                <input className="upload__form--title" type='text' placeholder='add a title to your video'></input>
            </label>
            <label><h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea className='upload__form--description' type='text' placeholder='add a description of your video'></textarea>
            </label>
        </form>
        </div>
        <div className="upload__buttons">
        <Link to={"/"}>
            <button onClick={uploadAlert} className="upload__form--publish">PUBLISH</button>
            </Link>
            <button className="upload__form--cancel">CANCEL</button>
         </div>
        </section>

    )
} 

export default Upload;