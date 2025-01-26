/** @format */

const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
  try {
    // fetch the file form request
    const file = req.files.file;
    console.log("FILE IS COMMING: ", file);

    // path means current directory
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Here is our Path: ", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "local file upload successfull",
    });
  } catch (e) {
    console.log(e), console.log("File upload error: ");
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  console.log("Temp file path: " + file.tempFilePath);
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Handler of the imageUpload
exports.imageUpload = async (req, res) => {
  try {
    // data fetch from request body
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    // validation
    const supportedTypes = ["jpg", "png", "gif", "jpeg"];
    const fileTypes = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileTypes, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }

    // if file format is supported then
    console.log("Uploading to AkramDeveloper: ");
    const resp = await uploadFileToCloudinary(file, "AkramDeveloper");
    console.log(resp);

    // save entry into db
    const filedata = await File.create({
      name: resp.display_name,
      tags: resp.tags,
      email: "mdakramdev@gmail.com",
      imageUrl: resp.secure_url,
    });

    res.json({
      success: true,
      imageUrl: resp.secure_url,
      message: "Image file Uploaded successfully",
    });
  } catch (e) {
    console.error(e);
    res.json({
      success: false,
      message: "Something went wrong uploading",
    });
  }
};
exports.videoUpload = async (req, res) => {
  try {
    // fetch the data from the req.body
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;
    console.log(file);

    // validation performed
    const supportedTypes = ["mp4", "movie", "video"];
    const fileTypes = file.name.split(".")[1].toLowerCase();
    console.log("File types: " + fileTypes);

    // TODO: add a upper limit of 5MB for video files
    if (!isFileTypeSupported(fileTypes, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File Format Supported",
      });
    }
    // file Format supported hai
    console.log("Uploaded file on Akram Developer");
    const resp = await uploadFileToCloudinary(file, "AkramDeveloper");
    console.log(resp);

    // save entry into database
    const fileData = await File.create({
      name: resp.display_name,
      tags: resp.tags,
      email: "mdakramdev@gmail.com",
      imageUrl: resp.secure_url,
    });

    res.json({
      success: true,
      imageUrl: resp.secure_url,
      message: "Video file Uploaded successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      message: "Something went wrong uploading",
    });
  }
};
// imageSizeReducer
exports.imageSizeReducer = async (req, res) => {
  try {
    // fetch the data from the req.body
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    // validation performed
    const supportedTypes = ["jpg", "png", "gif", "jpeg"];
    const fileTypes = file.name.split(".")[1].toLowerCase();
    console.log("File types: " + fileTypes);

    // TODO: add a upper limit of 5MB for video files
    if (!isFileTypeSupported(fileTypes, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File Format Supported",
      });
    }
    // file Format supported hai
    console.log("Uploaded file on Akram Developer");
    const resp = await uploadFileToCloudinary(file, "AkramDeveloper", 30);
    console.log(resp);

    // save entry into database
    const fileData = await File.create({
      name: resp.display_name,
      tags: resp.tags,
      email: "mdakramdev@gmail.com",
      imageUrl: resp.secure_url,
    });

    res.json({
      success: true,
      imageUrl: resp.secure_url,
      message: "Image Size Reducer file Uploaded successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      message: "Something went wrong uploading",
    });
  }
};
