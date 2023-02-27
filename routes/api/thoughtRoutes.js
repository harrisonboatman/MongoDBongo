const router = require('express').Router();
const {getThoughts, createThought, getSingleThought, updateThought, deleteThought, addReaction, deleteReaction} = require ('../../controllers/thoughtsController')


router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(deleteReaction);