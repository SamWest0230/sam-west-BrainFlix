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
        description: req.body.description
    };
    console.log(newVid)
    const Video = parseVideo();
    Video.push(newVid);
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(Video));
    res.json(newVid);
})






module.exports = router;