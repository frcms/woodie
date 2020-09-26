import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    response: {
      routes: router.stack,
      version: '0.0.1',
      code: 200,
    },
  });
});

export default router;
