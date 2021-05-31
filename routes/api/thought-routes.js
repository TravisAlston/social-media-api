const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .router('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .router('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions/')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;
