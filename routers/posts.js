const express = require("express")
const router = express.Router()
const posts = require ('../note/posts.js');
const postController = require('../controllers/postcontrollers.js')

//CRUD 

//! Index
router.get('/', postController.index)

//! Show 

router.get('/:id', postController.show)

//! Store 

router.post('/', postController.store)

//! Update 

router.put('/:id', postController.put)

//! Modify

router.patch('/:id', postController.patch)

//! Destroy

router.delete('/:id', postController.destroy)

module.exports = router