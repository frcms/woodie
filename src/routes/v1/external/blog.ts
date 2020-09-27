/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import express from 'express';

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
