/** @format */

// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic
exports.giveComments = async (req, res) => {
    try {
        // fetch data from request body
        const { post, user, body } = req.body;

        // create comment obj
        const comment = new Comment({
            post,
            user,
            body,
        });

        // save the new comment into the database
        const savedComment = await comment.save();

        // find the post by id and also add the new comment to its commets array
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { comments: savedComment._id }
        }, { new: true })
            .populate("comments") // populate the comments array with comment documents
            .exec();
        res.json({
            post: updatedPost,
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Error while saving comment",
        })
    }
};
