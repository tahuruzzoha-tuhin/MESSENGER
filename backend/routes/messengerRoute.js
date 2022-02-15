const { getFriends } = require('../controller/messengerController');


const router = require('express').Router();


router.get('/get-friends', getFriends);


module.exports = router;