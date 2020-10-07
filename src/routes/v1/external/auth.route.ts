/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import express from 'express';
import * as bcrypt from 'bcrypt';

import UserController from '../../../controllers/user.controller';

const uc = new UserController();

const router = express.Router();

interface UserObject {
  username: string;
  email: string;
  password: string;
}

router.post('/login', (req, res) => {
  res.status(200).send({
    code: 200,
    payload: {
      message: 'Hello, World!',
    },
    error: null,
  });
});

router.post('/register', async (req, res) => {
  console.log(req.body);
  const user = req.body as UserObject;
  const hash = bcrypt.hash(user.password, 10, (_err) => {
    if (_err) console.error(_err);
  });
  await uc.createUser(user.username, user.email, await hash);

  res.status(200).send({
    code: 200,
    payload: {
      message: 'Hello, World!',
    },
    error: null,
  });
});

// @todo OAuth Register and Login

export default router;
