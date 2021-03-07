import React from 'react'
import Recommended from './Recommended'
import Video from './Video'
import Form from './Form'
import Comments from './Comments'
import Actualvideo from './Actualvideo'
import './components-styles/Homepage.scss'





function Homepage (props) {
        return(
            <div className='homepage'>

                   <Actualvideo video={props.video} />
                   <div className='homepage__desktop'>
                    <div>
                   <Video info={props.video} />
                   
                   {/* <Form video={props.video}  /> */}
                   
                   
                   <Comments video={props.video} comment={props.comments} commenting={props.commenting} posting={props.posting} delete={props.delete}/>
                  
                  </div>
                  <div className='homepage__recommended'>
                      <h4 className="homepage__cheating">NEXT VIDEO</h4>
                   {props.recommended.map(video =>{
                       return(
                   <Recommended video={video} />
                    )})}  
                    </div> 
                    </div>
            </div>





        )
    

            // handleSubmit={props.commenting}


}
  export default Homepage;