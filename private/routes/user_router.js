const express = require('express');
const router = express.Router();
const user_controller = require(`${__dirname}/../controllers/user_controller.js`);

router.post('/patch/:id', user_controller.patch);

module.exports = router;