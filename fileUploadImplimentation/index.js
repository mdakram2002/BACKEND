const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware added
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// connect db and cloudinary
const db = require("./config/database");
db.connect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mounted
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate server
app.listen(PORT, () => {
  console.log(`listening on port at ${PORT}`);
});
