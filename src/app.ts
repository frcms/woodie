/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import 'reflect-metadata'; // Required for TypeORM to work properly

import express from 'express';
import bodyParser from 'express';
import rootRouter from './routes/root';
import apiRouter from './routes/api';
import apiBlogRouter from './routes/v1/external/blog.route';
import apiAuthRouter from './routes/v1/external/auth.route';

import setup from './tests/setup';

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.use('/', rootRouter);
app.use('/api', apiRouter);
app.use('/api/v1/blog', apiBlogRouter);
app.use('/api/v1/auth', apiAuthRouter);

app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  setup();
  console.log(`

    @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@(    @@@@@@@@@@@    @@@@@@@@@@@*   @@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@.  @@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@  .@@@@@@@   @@@@@@@
   @@@@@@@@         @@@@@@@@   @@@@@@@@  @@@@@@@@    @@@@@@@@  @@@@@@&@@@@@  @@@@@.@@@@@@@  @@@@@@@@@@/
  &@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@    @@@@@@@@%             @@@@@@@ @@@@@ @@@@@*@@@@@@@   /@@@@@@@@@@@@@@@,
  @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@   @@@@@@@@              @@@@@@@ @@@@@@@@@@# @@@@@@@        @@@@@@@@@@@@@
 .@@@@@@@@         @@@@@@@@  (@@@@@@@   @@@@@@@@   @@@@@@@@  @@@@@@@  @@@@@@@@@@ @@@@@@@  @@@@@@@@    @@@@@@@
 @@@@@@@@         @@@@@@@@   @@@@@@@@    @@@@@@@@@@@@@@@@&   @@@@@@@  @@@@@@@@@  @@@@@@@  @@@@@@@@@@@@@@@@@@
 @@@@@@@@         @@@@@@@@   @@@@@@@@      @@@@@@@@@@@      @@@@@@@   @@@@@@@@  &@@@@@@      @@@@@@@@@@@@

  `);
  console.log(`FRCMS Woodie is now listening on port ${port}`);
});
