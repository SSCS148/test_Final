const express = require('express');
const router = express.Router();
const likeController = require('../controllers/Like');

router.post('/', likeController.addLike);
router.get('/', likeController.getLikes);

module.exports = router;