import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  handleUploadChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }
 
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




  //a lifecycle method being used to trigger the original axios request to update state and render the data across the page
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
