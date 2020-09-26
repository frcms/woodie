import 'reflect-metadata'; // Required for TypeORM to work properly

import express from 'express';
import rootRouter from './routes/root';
import apiRouter from './routes/api';
import apiBlogRouter from './routes/v1/external/blog';

const app = express();
const port = 3000 || process.env.PORT;

app.use('/', rootRouter);
app.use('/api', apiRouter);
app.use('/api/v1/blog', apiBlogRouter);

app.listen(port, () => {
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
