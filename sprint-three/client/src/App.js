import React from 'react'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.scss';
import Homepage from './components/Homepage';
import Upload from './components/Upload'
import Header from './components/Header';
const api__url = 'http://localhost:8080';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: [],
    commentBox: '',
    title: '',
    description: '',
  }
  //this function is called in lifecycle methods. it gets the original data needed to render the page on load
  getVideos = () => {

    axios
      .get(api__url + '/videos')
      .then((response) => {
        this.setState({
          selectedVideo: response.data[0],
          videos: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  // function tracking the input on the form to dynamically update the state of the comments
  handleChange = (event) => {
    this.setState({
      commentBox: event.target.value
    })
  }

  //function posting the value of the forms text area to the api under the correct video (via id) then re fetching the data and updating state to re render the page
  handelSubmit = (event) => {
    event.preventDefault();
    const id = this.state.selectedVideo.id
    let comment = {
      comment: this.state.commentBox
    }
    axios
      .post(api__url + '/videos/' + id + '/comments', comment)
      .then(() => {
        axios
          .get(api__url + '/videos/' + this.state.selectedVideo.id)
          .then((responce) => {
            this.setState({
              selectedVideo: responce.data
            })
          })
        event.target.reset();
      })
      .catch(error => {
        console.log(error);
      })
  }



  // onClick function updating the api removing comments and re fetching data then re rendering the page
  handleDelete = (id) => {
    axios
      .delete(api__url + '/videos/' + this.state.selectedVideo.id + '/comments/' + id)
      .then(() => {
        axios
          .get(api__url + '/videos/' + this.state.selectedVideo.id)
          .then((responce) => {
            this.setState({
              selectedVideo: responce.data
            })
          })
      })
      .catch(error => {
        console.log(error);
      })
  }
  // function that monitors the upload page input fields to dynamically update the state and use the values in the axios post request
  handleUploadChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }
  //funnction used for uploading videos to the api server via axios
  handleUpload = () => {
    window.alert("Video Was Uploaded!");
    let vid = {
      title: this.state.title,
      channel: `Sam West`,
      description: this.state.description
    }
    axios
      .post(api__url + '/videos/', vid)
      .then(() => {
        this.getVideos();
      })
      .catch(error => {
        console.log(error);
      })
  }

  //function using a onClick to allow users to add likes to the videos via an axios put request 
  handelLikes = () => {
    axios
      .put(api__url + '/videos/' + this.state.selectedVideo.id + '/likes')
      .then(() => {
        axios
          .get(api__url + '/videos/' + this.state.selectedVideo.id)
          .then((responce) => {
            this.setState({
              selectedVideo: responce.data
            })
          })
      })
      .catch(error => {
        console.log(error);
      })
  }




  //a lifecycle method being used to trigger the original axios request to update state and render the data across the page. The function being called is defined above under state
  componentDidMount = () => {
    this.getVideos();
  }


  //this lifecycle method is being used to compare urls via router props to see which video is currently active then fetching the data for that video (via id) and updating state 
  //the second if condition is allowing the logo to be used as a home link to always render the original video and its data
  componentDidUpdate = (prevProps) => {
    const newID = this.props.match.params.videoid
    const prevID = prevProps.match.params.videoid
    const home = this.props.match.url
    if (newID !== prevID) {
      axios
        .get(api__url + '/videos/' + newID)
        .then((responce) => {
          this.setState({
            selectedVideo: responce.data
          })
        })
    }
    //the reason for writting this (home === '/' || home === '/upload') instead of (!newID) is because the upload page bugs out and fails the if statement below, causing an endless Loading... screen. this solution alows it to see a video in state and pass the check
    if (home === '/' || home === '/upload') {
      axios
        .get(api__url + '/videos/' + this.state.videos[0].id)
        .then((responce) => {
          this.setState({
            selectedVideo: responce.data
          })
        })
    }
  }



  render() {
    if (!this.state.selectedVideo.video) {
      return <p>Loading...</p>
    }
    const selectedComments = this.state.selectedVideo.comments
    const listOfVideos = this.state.videos.filter(video => {
      return video.id !== this.state.selectedVideo.id;

    })

    return (
      //BrowserRouter is here its on the index page. Written this way to fix a weird bug I had
      <>
        <Header />
        <Switch>
          <Route path='/upload' render={(routerProps) => <Upload upload={this.handleUploadChange} upload2={this.handleUploadChange2} submit={this.handleUpload} />} />
          <Route path='/:videoid' render={(routerProps) => <Homepage video={this.state.selectedVideo} comments={selectedComments} commenting={this.handleChange} posting={this.handelSubmit} delete={this.handleDelete} recommended={listOfVideos} like={this.handelLikes} />} />
          <Route exact path='/' render={(routerProps) => <Homepage video={this.state.selectedVideo} comments={selectedComments} commenting={this.handleChange} posting={this.handelSubmit} delete={this.handleDelete} recommended={listOfVideos} like={this.handelLikes} />} />
        </Switch>
      </>


    )

  }
}
export default App;
