import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD,
});

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB');
});

// eslint-disable-next-line import/prefer-default-export
export { mongoose };
