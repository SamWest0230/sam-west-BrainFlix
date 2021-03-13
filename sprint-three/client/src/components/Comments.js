import React from 'react';
import './components-styles/comments.scss'
import userPic from '.././assets/images/150.png'
import './components-styles/Form.scss'
import userPic2 from '.././assets/images/Mohan-muruge.jpg'



class Comments extends React.Component {

    render() {

        //function taking the timestamp prop and turning it into a human date
        let newDay = (time) => {
            let day = time;
            let today = new Date(day)
            let dd = today.getDate();
            let mm = today.getMonth() + 1;
            const yyyy = today.getFullYear();
            today = `${mm}/${dd}/${yyyy}`;

            return today;
        }
        //using the reverse method to have new comments posted to the top
        let comment = this.props.comment.reverse();
        return (
            <div>
                <section className="form">
                    <h2 className='form__commentCounter'>3 comments</h2>
                    <div className='form__container'>
                        <img className='form__container--pic' src={userPic2} alt="user Pic"></img>
                        <form onSubmit={this.props.posting} className='form__container--form' name="form">
                            <label className='form__container--label'><h4>JOIN THE CONVERSATION</h4></label>
                            <input className='form__container--form-text' name="commentBox" type='textarea' onChange={this.props.commenting} />
                            <button className='form__container--form-btn'>COMMENT</button>

                        </form>
                    </div>
                </section>
                
                <section className='comments'>
                    {comment.map(props => {
                        return (
                            <div className='comments__box' key={props.id}>
                                <img className="comments__box--pic" src={userPic} alt='user Pic'></img>
                                <div className='comments__box2'>
                                    <h3 className="comments__box2--name">{props.name}</h3>
                                    <h4 className='comments__box2--date'>{newDay(props.timestamp)}</h4>
                                    <h4 className='comments__box2--content'>{props.comment}</h4>
                                    <button className="comments__box2--delete" onClick={() => this.props.delete(props.id)}>DELETE</button>
                                </div>

                            </div>
                        )
                    })}


                    <h4 className="comments__cheating">NEXT VIDEO</h4>
                </section>
            </div>
        )
    }

}

export default Comments;


