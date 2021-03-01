import './components-styles/Form.scss'
import userPic from '.././assets/images/Mohan-muruge.jpg'

function Form () {
    return(
        <section className="form">
        <h2 className='form__commentCounter'>3 comments</h2>
        <div className='form__container'>
            <img className='form__container--pic' src={userPic}></img>
            <form className='form__container--form'>
            <label className='form__container--label'><h4>JOIN THE CONVERSATION</h4></label>
            <input className='form__container--form-text' type='textarea'/>
            <input className='form__container--form-btn' type='submit' value='COMMENT'/>
            </form>
        </div> 
        </section>
    )
}
export default Form;