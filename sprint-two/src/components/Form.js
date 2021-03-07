import './components-styles/Form.scss'
import userPic from '.././assets/images/Mohan-muruge.jpg'
import React from 'react';


function Form (props){
    return(
        <section className="form">
        <h2 className='form__commentCounter'>3 comments</h2>
        <div className='form__container'>
            <img className='form__container--pic' src={userPic} alt="user Pic"></img>
            <form onSubmit={props.post}  className='form__container--form' name="form">
            <label className='form__container--label'><h4>JOIN THE CONVERSATION</h4></label>
            <input className='form__container--form-text' name="commentBox" type='textarea'/>
            <button  className='form__container--form-btn'>COMMENT</button>
            
            </form>
        </div> 
        </section>
    )
  }
export default Form;



  