import React from 'react';
import './components-styles/comments.scss'
import userPic from '.././assets/images/Mohan-muruge.jpg'

function Comments(props){
    return(
        <section className='comments'>
            <div className='comments__box'>
                <img className="comments__box--pic" ></img>
                <div className='comments__box2'>
                    <h2 className="comments__box2--name">{props.name}</h2>
                    <h4 className='comments__box2--date'>{props.timestamp}</h4>
                    <p className='comments__box2--content'>{props.comment}</p>
                </div>
            </div>
        </section>
    )
}

export default Comments;