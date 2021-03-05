import React from 'react'
import Header from './Header';
import Recommended from './Recommended'
import Video from './Video'
import Form from './Form'
import Comments from './Comments'
import Actualvideo from './Actualvideo'



function Homepage (props) {
        return(
            <div className='homepage'>
    
                   <Header />
                   <Actualvideo video={props.video} />
                   <Video info={props.video} />
                   <Form submit={props.commenting}/>
                   <Comments />
                   {props.recommended.map(video =>{
                       return(
                   <Recommended video={video} />
                    )})}   
            </div>





        )
    




}
  export default Homepage;