import express from 'express';
import BlogController from '../../../controllers/blog.controller';

// @todo Return all of the rows in from the blog.

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
