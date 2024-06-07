const { Like } = require('../models/Like');

exports.addLike = async (req, res) => {
    try {
        let like = await Like.findOne();
        if (!like) {
            like = await Like.create({ count: 1 });
        } else {
            like.count += 1;
            await like.save();
        }
        res.status(200).json({ likes: like.count });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getLikes = async (req, res) => {
    try {
        const like = await Like.findOne();
        res.status(200).json({ likes: like ? like.count : 0 });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};