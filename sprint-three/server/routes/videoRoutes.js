const { Router } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

let parseVideo = () => {
    const videoData = fs.readFileSync("./Data/video-details.json");
    const parsedVideos = JSON.parse(videoData);
    return parsedVideos;
}

//this route grabs all videos in json file and sends them back
router.get("/", (req, res) => {
    res.json(parseVideo());
})
//this route allows users to retrive a specific video via url id
router.get("/:videoid", (req, res) => {
    const bigVideo = parseVideo();
    const specificVideo = bigVideo.find((video) => video.id === req.params.videoid);
    res.json(specificVideo);
})
//this route allows users to post a new video to the json files arrays and assigns it new values
router.post("/", (req, res) => {
    const newVid = {
        id: uniqid(),
        title: req.body.title,
        channel: req.body.channel,
        image: "http://localhost:8080/upload.jpg",
        description: req.body.description,
        views: '100,000',
        likes: 0,
        duration: "4:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1542262984046,
        comments: []
    };
    const Video = parseVideo();
    Video.push(newVid);
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(Video));
    res.json(newVid);
})
//this route allows the user to post a new comment to a specific video in the json file. it grabs the selected video id and pushs the new commeent into that videos comment aray and assigns certain values like a new id
router.post("/:videoid/comments", (req, res) => {
    const newComment = {
        "name": "Sam West",
        "comment": req.body.comment,
        "id": uniqid(),
        "likes": 0,
        "timestamp": 1545162149000
    }
    const videos = parseVideo();
    const specificVid = videos.find((video) => video.id === req.params.videoid);
    specificVid.comments.push(newComment)
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));
    res.json(newComment);
});
//this route allows users to delete comments.It finds the videoit aquires the selected video id then navigates to that video in the json file and finds the correct comment vis url comment id and splices it from the array
router.delete("/:videoid/comments/:commentid", (req, res) => {
    const videos = parseVideo();
    const specificVid = videos.find((video) => video.id === req.params.videoid);
    const specificComment = specificVid.comments.find((comment) => comment.id === req.params.commentid)
    const position = specificVid.comments.indexOf(specificComment)
    specificVid.comments.splice(position, 1)
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));
    res.json(specificComment + 'deleted');

});
//this route allows the user to put likes on any video they wish. it finds the video currently selected through id within the url then adds to that videos likes in the json file and writes it to persist through shutdowns
router.put("/:videoid/likes", (req, res) => {
    const videos = parseVideo();
    const specificVid = videos.find((video) => video.id === req.params.videoid);
    specificVid.likes++
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));
    res.json(specificVid + 'liked');

})

module.exports = router;