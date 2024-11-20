const express = require('express');
const router = express.Router();
const ikasleController = require('../controllers/ikasle.controller');

router.get('/', ikasleController.getIkasleak);
router.post('/', ikasleController.createIkasle);
router.get('/:id', ikasleController.getIkasleById);
// Gehitu beste routes-ak...
router.delete('/:id', ikasleController.deleteIkasleById);
router.put('/:email', ikasleController.updateIkasle);

module.exports = router;