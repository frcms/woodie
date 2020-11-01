/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import express from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import UserController from '../../../controllers/user.controller';

dotenv.config({ path: '../../../../.env' });

const uc = new UserController();

const router = express.Router();

interface UserObject {
  username: string;
  email: string;
  password: string;
}

interface LoginObject {
  username: string;
  password: string;
}

router.post('/login', async (req, res) => {
  const user = req.body as LoginObject;
  const valid = await uc.checkUser(user.username, user.password);

  if (!valid) {
    return res.status(401).send({
      code: 401,
      payload: {
        message: 'Incorrect Password.',
      },
      error: 'Incorrect Password.',
    });
  }

  const secretKey = <string>process.env.SECRET_KEY;
  const token = jwt.sign({ username: user.username }, secretKey);
  res.status(200).send({
    code: 200,
    payload: {
      message: 'Authorized.',
      token,
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
      message: 'success',
    },
    error: null,
  });
});

router.get('/register?oauth=true&provider=:provider', async (req, res) => {

});

// @todo OAuth Register and Login

export default router;
