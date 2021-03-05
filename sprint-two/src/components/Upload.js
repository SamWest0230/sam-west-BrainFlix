import React from 'react';
import Header from './Header';
import './components-styles/Upload.scss'
import uploadPic from '../assets/images/Upload-video-preview.jpg'

function Upload(){
    return(
        <>
        <Header />
        <h1>Upload Video</h1>
        <div className='uploadPage--desktopOnly'>
        <div>
            <h4>VIDEO THUMBNAIL</h4>
            <img className='uploadPage__video' src={uploadPic} />
        </div>
        <form>
            <label><h4>TITLE YOUR VIDEO</h4>
                <input type='text' placeholder='add a title to your video'></input>
            </label>
            <label><h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea type='text' placeholder='add a description of your video'></textarea>
            </label>
            <button>PUBLISH</button>
            <button>CANCEL</button>
        </form>
        </div>
        </>

    )
} 

export default Upload;