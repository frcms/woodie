import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    code: 200,
    payload: {
      message: 'Hello, World!',
    },
    error: null,
  });
});

export default router;
