const Post = require("../models/postModel");


// define the route handlers
exports.createPosts = async (req, res) => {
    try {

        const { title, body } = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        // send a json response with the success flag
        res.status(200).json({
            post: savedPost,
            message: "Post Created Successfully"

        })
    }
    catch (err) {
        res.status(500).json({
            error: "Error while creating post",
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const post = await Post.findOne()
        .populate("comments")
        .populate("likes")
        .exec();

        res.json({
            post,
            message: "Data Fetching Successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            error: "Error while geting post",
        })
    }
};