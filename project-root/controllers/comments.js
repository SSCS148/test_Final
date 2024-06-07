
const { Comment } = require('../models/Comment');

exports.createComment = async (req, res) => {
    const { comment } = req.body;

    try {
        const newComment = await Comment.create({ comment });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};