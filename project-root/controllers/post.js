const { Post } = require('../models/Post');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.createPost = [
    upload.single('photo'),
    async (req, res) => {
        const { message } = req.body;
        const photo = req.file ? req.file.path : null;

        try {
            const post = await Post.create({ message, photo });
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
];

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};