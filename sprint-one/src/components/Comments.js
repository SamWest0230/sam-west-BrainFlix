import React from 'react';
import './components-styles/comments.scss'
import userPic from '.././assets/images/150.png'


function Comments(props){
    return(
        <section className='comments'>

            {props.listOfComments.map(props =>{
                return(
            <div className='comments__box'>
                <img className="comments__box--pic" src={userPic}></img>
                <div className='comments__box2'>
                    <h3 className="comments__box2--name">{props.name}</h3>
                    <h4 className='comments__box2--date'>{props.timestamp}</h4>
                    <h4 className='comments__box2--content'>{props.comment}</h4>
                </div>
            </div>
            )})}
            <h4 className="comments__cheating">NEXT VIDEO</h4>
        </section>
    )
}

export default Comments;