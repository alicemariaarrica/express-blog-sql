const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/postsControllers');


router.post('/', postsControllers.store);


router.put('/:id', postsControllers.update);


router.delete('/:id', postsControllers.destroy);

module.exports = router;
