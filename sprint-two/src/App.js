import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import { api__url, api__key } from './ApiDetails'
import './App.scss';
import Homepage from './components/Homepage';
import Upload from './components/Upload'
import Header from './components/Header';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: [],
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

  componentDidUpdate = (prevProps, prevState) => {
    const newID = this.props.match.params.videoid
    const prevID = prevProps.match.params.videoid



    if (newID !== prevID) {
      axios
        .get(api__url + '/videos/' + newID + api__key)
        .then((responce) => {
          this.setState({
            selectedVideo: responce.data
          })
        })
    }
   
  }

  handelSubmit = (event) =>{
    const id = this.state.selectedVideo.id
    event.preventDefault();
    let comment = {
        name: 'sam west',
        comment: event.target.commentBox.value
    }
    axios
     .post(api__url + '/videos/' + id + '/comments' + api__key, comment)
     .then(() => {
        this.setState({
          selectedVideo: this.state.selectedVideo
        })
     })
     .catch(error => {
        console.log(error);         
    })
  }

  handleDelete = (id) =>{
    console.log('hey')
    console.log(id)
     axios
     .delete(api__url + '/videos/' + this.props.video.id + '/comments/' + id + api__key)
  }
  

render(){
  if (!this.state.selectedVideo.video)
    return <p>Loading...</p>
  const selectedComments = this.state.selectedVideo.comments;
  const listOfVideos = this.state.videos.filter(video => {
    return video.id !== this.state.selectedVideo.id;

  })

  return (
    <>
      <Header />
      <Switch>
        <Route path='/upload' component={Upload} />
        <Route path='/:videoid' render={(routerProps) => <Homepage video={this.state.selectedVideo} comments={selectedComments} post={this.handelSubmit} delete={this.handleDelete} recommended={listOfVideos} />} />
        <Route path='/' exact render={(routerProps) => <Homepage video={this.state.selectedVideo} comments={selectedComments} post={this.handelSubmit} delete={this.handleDelete} recommended={listOfVideos} />} />
      </Switch>
    </>


  )

}
}
export default App;



