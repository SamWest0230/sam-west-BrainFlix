const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videoRoutes.js")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("./Data/static"))
app.use("/videos", videoRoutes) 



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});