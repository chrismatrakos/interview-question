const express = require('express');
const product = require('./product.route');
const swagger = require('./swagger.route');

const router = express.Router();

router.use('/v1', product);
router.use('/', swagger);

router.get('/', (req, res) => res.send('Sample Node API Version1'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;