const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', [
    check('friend').isLength({ min: 7 }).withMessage("The name need 7 character min"),
    check('mention').isLength({ min: 20, max: 280 }).withMessage("The mention need 20 character min and 280 max.")
], mentionsController.createMentions);

router.put('/:id',[
    check('friend').isLength({ min: 7 }).withMessage("The name need 7 character min"),
    check('mention').isLength({ min: 20, max: 280 }).withMessage("The mention need 20 character min and 280 max.")
], mentionsController.updateMentions);

router.delete('/:id', mentionsController.deleteMentions);


module.exports = router;
