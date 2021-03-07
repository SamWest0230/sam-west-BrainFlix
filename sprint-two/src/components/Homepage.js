import React from 'react'
import Recommended from './Recommended'
import Video from './Video'
import Form from './Form'
import Comments from './Comments'
import Actualvideo from './Actualvideo'




function Homepage (props) {
        return(
            <div className='homepage'>

                   <Actualvideo video={props.video} />
                   
                   <Video info={props.video} />
                   
                   <Form video={props.video} post={props.post} />
                   
                   
                   <Comments comment={props.comments} delete={props.delete}/>
                  
                  
                   {props.recommended.map(video =>{
                       return(
                   <Recommended video={video} />
                    )})}   
            </div>





        )
    

            // handleSubmit={props.commenting}


}
  export default Homepage;