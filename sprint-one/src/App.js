import React from 'react'
import './App.scss';
import Header from './components/Header';
import Recommended from './components/Recommended'
import VideoData from './Data/video-details.json'
import recommendedData from './Data/videos.json'
import Video from './components/Video'
import Comments from './components/Comments'

class App extends React.Component {

state = {
  selectedVideo: VideoData[0],
  recommendedVideos: recommendedData,
}

videoSelector = (id) => { 
  const newSlectedVideo = VideoData.find(video =>{
    return video.id === id;
  });
  this.setState(
    {...this.state, selectedVideo: newSlectedVideo}
  )
}


retriveComments = this.state.selectedVideo.comments
date = () => {
this.retriveComments.timestamp = new Date(this.retriveComments.timestamp).toDateString();
console.log(this.retriveComments.timestamp)
 }
 


  render(){
    const listOfVideos = this.state.recommendedVideos.filter(video =>{
      return video.id !== this.state.selectedVideo.id;
    })
    this.date();
  return (
    <div className="App">
     <Header  />
     
     <Video videos={this.state.selectedVideo} />
     
     
     {this.retriveComments.map(props => {
       return(
      <Comments name={props.name} timestamp={props.timestamp} comment={props.comment} />
     )})}
     
     
     {listOfVideos.map(props => {
       return(
        <Recommended key={props.id} image={props.image} title={props.title} channel={props.channel}/>
       )
     })}
    

    </div>
  );
  }
  
}

    

export default App;
