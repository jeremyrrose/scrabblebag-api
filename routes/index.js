const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/new', controllers.createGame);
router.get('/bag/:gameId', controllers.bag);
router.get('/draw/:gameId/:num', controllers.draw);
router.get('/undo/:gameId', controllers.undo);
router.get('/adjust/:gameId', controllers.settings);
router.put('/trade/:gameId',controllers.trade);

module.exports = router;