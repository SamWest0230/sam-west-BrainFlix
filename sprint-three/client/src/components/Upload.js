import React from 'react';
import './components-styles/Upload.scss'
import uploadPic from '../assets/images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'

class Upload extends React.Component {

    render() {
        return (
            <section className='upload'>
                <h1 className="upload__title">Upload Video</h1>
                <div className='upload--desktopOnly'>
                    <div className="upload--tablet">
                        <h4>VIDEO THUMBNAIL</h4>
                        <img className='upload__video' src={uploadPic} alt='Video Thumbnail' />
                    </div>
                    <form className="upload__form">
                        <label><h4>TITLE YOUR VIDEO</h4>
                            <input className="upload__form--title" type='text' placeholder='add a title to your video' name='title' onChange={this.props.upload}></input>
                        </label>
                        <label><h4>ADD A VIDEO DESCRIPTION</h4>
                            <textarea className='upload__form--description' type='text' placeholder='add a description of your video' name='description' onChange={this.props.upload}></textarea>
                        </label>
                    </form>
                </div>
                <div className="upload__buttons">
                    <Link to={"/"}>
                        <button onClick={this.props.submit} className="upload__form--publish">PUBLISH</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="upload__form--cancel">CANCEL</button>
                    </Link>
                </div>
            </section>

        )
    }
}

export default Upload;