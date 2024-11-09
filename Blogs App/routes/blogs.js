const express = require('express');
const router = express.Router();

// import controllers
const { createPosts, getAllPosts } = require('../controllers/createPosts');
const { giveLike, unLikePost } = require('../controllers/giveLike');
const { giveComments } = require('../controllers/giveComments');

// define APIs routes/ create mapping
router.post("/Post/create", createPosts);
router.post("/likes/like", giveLike);
router.post("/comments/create", giveComments);
router.get("/post", getAllPosts);
router.post("/likes/unLike", unLikePost);

module.exports = router;