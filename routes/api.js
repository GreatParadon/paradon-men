const express = require('express');

// const apiMiddleware = require('../middleware/api.auth');

const router = express.Router();

router.get('/:path', (req, res) => {
    return res.json({message: req.params.path})
});

module.exports = router;
