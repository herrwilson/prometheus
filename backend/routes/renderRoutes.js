const express = require('express');
const { generatePoints, fetchPoints, saveRender, discardRender } = require('../controllers/renderController');

const router = express.Router();

router.get('/generate', generatePoints);
router.get('/points', fetchPoints);
router.post('/save', saveRender);
router.post('/discard', discardRender);

module.exports = router;
