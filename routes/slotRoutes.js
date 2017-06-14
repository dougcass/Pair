var express = require('express');
var router = express.Router();
var slotController = require('../controllers/slotController.js');

/*
 * GET
 */
router.get('/', slotController.list);

/*
 * GET
 */
router.get('/:id', slotController.show);

/*
 * POST
 */
router.post('/', slotController.create);

/*
 * PUT
 */
router.put('/:id', slotController.update);

/*
 * DELETE
 */
router.delete('/:id', slotController.remove);

module.exports = router;
