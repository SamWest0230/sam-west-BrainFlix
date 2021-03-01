import React from 'react'
import './App.scss';
import Header from './components/Header';
import Recommended from './components/Recommended'
import VideoData from './Data/video-details.json'
import recommendedData from './Data/videos.json'
import Video from './components/Video'
import Form from './components/Form'
import Comments from './components/Comments'
import Actualvideo from './components/Actualvideo'

class App extends React.Component {
//setting two states one for on page load to take the first video in the data file
//second state is used to access all the recommended videos
state = {
  selectedVideo: VideoData[0],
  recommendedVideos: recommendedData,
}
//function being called on click of the recommended videos to change state of the main video player and description
videoSelector = (id) => { 
  let clickedid = id.target.parentElement.id;
  const newSlectedVideo = VideoData.find(video =>{
    return video.id === clickedid;
    
  });
  this.setState(
    {
      selectedVideo: newSlectedVideo,
    }
  )
}

  render(){
    //grabbing comments from the currently selected video
    const retriveComments = this.state.selectedVideo.comments;
    //generating a list of videos for the recommended section that does not include the current selected video
    const listOfVideos = this.state.recommendedVideos.filter(video =>{
      return video.id !== this.state.selectedVideo.id;
    })
  return (
    <div className="App">
     <Header  />
     
    <Actualvideo videos={this.state.selectedVideo}/>

    <div className='desktopApp'>
      <div>
    <Video videos={this.state.selectedVideo}  />
    <Form />
     
    <Comments listOfComments={retriveComments} />
     </div>
     <div>
      <h4 className='cheating'>NEXT VIDEO</h4>
    {listOfVideos.map(props =>{
    return(
    <Recommended videoselect={this.videoSelector} id={props.id} image={props.image} title={props.title} channel={props.channel} />
    ) })}
    </div>
    </div>
   
    </div>
  );
  }
  
}

    

export default App;





