import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {api__url, api__key} from './ApiDetails'
import './App.scss';
import Homepage from './components/Homepage';
import Upload from './components/Upload'

class App extends React.Component{

  state= {
    videos: [],
    selectedVideo: []
}

componentDidMount = () => {
  axios
  .get(api__url + '/videos' + api__key)
  .then((response) => {
      this.setState({
          videos: response.data
      })
      axios
      .get(api__url + '/videos/' + this.state.videos[0].id + api__key)
      .then((response2) => {
          this.setState({
              selectedVideo: response2.data
              
          })
         
      })
  })
  
};

handelSubmit = (event) =>{
  event.preventdefault();
  console.log('hey')
}

// componentDidUpdate = (prevProps) => {
//   const newID = this.props.match.params.id
//  console.log(newID);
// }


  render(){
    const listOfVideos = this.state.videos.filter(video =>{
     return video.id !== this.state.selectedVideo.id;
    })
  return(
    <BrowserRouter>
      <Switch>
      <Route path='/upload' component={Upload} />
        <Route path='/:videoid' render={(routerProps) => <Homepage video={this.state.selectedVideo} commenting={this.handelSubmit} recommended={listOfVideos} {...routerProps} /> } />
        <Route path='/' exact render={(routerProps) => <Homepage video={this.state.selectedVideo} commenting={this.handelSubmit}  recommended={listOfVideos} {...routerProps} /> } />
      </Switch>
    
    </BrowserRouter>
   
  )

  }
}
export default App;
  



// class App extends React.Component {
// //setting two states one for on page load to take the first video in the data file
// //second state is used to access all the recommended videos
// state = {
//   selectedVideo: VideoData[0],
//   recommendedVideos: recommendedData,
// }
// //function being called on click of the recommended videos to change state of the main video player and description
// videoSelector = (id) => { 
//   let clickedid = id.target.parentElement.id;
//   const newSlectedVideo = VideoData.find(video =>{
//     return video.id === clickedid;
    
//   });
//   this.setState(
//     {
//       selectedVideo: newSlectedVideo,
//     }
//   )
// }

//   render(){
//     //grabbing comments from the currently selected video
//     const retriveComments = this.state.selectedVideo.comments;
//     //generating a list of videos for the recommended section that does not include the current selected video
//     
//     })
//   return (
//     <div className="App">
//      <Header  />
     
//     <Actualvideo videos={this.state.selectedVideo}/>

//     <div className='desktopApp'>
//       <div>
//     <Video videos={this.state.selectedVideo}  />
//     <Form />
     
//     <Comments listOfComments={retriveComments} />
//      </div>
//      <div>
//       <h4 className='cheating'>NEXT VIDEO</h4>
//     {listOfVideos.map(props =>{
//     return(
//     <Recommended videoselect={this.videoSelector} id={props.id} image={props.image} title={props.title} channel={props.channel} />
//     ) })}
//     </div>
//     </div>
   
//     </div>
//   );
//   }
  
// }

    

// export default App;





