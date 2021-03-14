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


router.get("/", (req, res) => {
    res.json(parseVideo());
})

router.get("/:videoid", (req, res) => {
    const bigVideo = parseVideo();
    const specificVideo = bigVideo.find((video) => video.id === req.params.videoid);
    res.json(specificVideo);
})

router.post("/", (req, res) =>  {
    const newVid ={
        id: uniqid(),
        title: req.body.title,
        channel: req.body.channel,
        image: "http://localhost:8080/upload.jpg",
        description: req.body.description,
        views: '100,000',
        likes: 0,
        duration: "4:20",
        video:"https://project-2-api.herokuapp.com/stream",
        timestamp: 1542262984046,
        comments:[]
    };
    const Video = parseVideo();
    Video.push(newVid);
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(Video));
    res.json(newVid);
})

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

router.delete("/:videoid/comments/:commentid", (req, res) => {
    const videos = parseVideo();
    const specificVid = videos.find((video) => video.id === req.params.videoid);
    const specificComment = specificVid.comments.find((comment) => comment.id === req.params.commentid)
    const position = specificVid.comments.indexOf(specificComment)
    specificVid.comments.splice(position, 1)
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));
    res.json(specificComment + 'deleted');

});

router.put("/:videoid/likes", (req, res) => {
const videos = parseVideo();
const specificVid = videos.find((video) => video.id === req.params.videoid);
specificVid.likes++
fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));
})

module.exports = router;