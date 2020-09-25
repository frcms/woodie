const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send({
    response: {
      routes: router.stack,
      version: '0.0.1',
      code: 200,
    },
  });
});

module.exports = router;
