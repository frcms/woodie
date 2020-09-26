import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    response: {
      message: 'Hello, World!',
      version: '0.0.1',
      code: 200,
    },
  });
});

export default router;
