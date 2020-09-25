import * as mongoose from 'mongoose';
// eslint-disable-next-line import/no-cycle
import SubteamSchema from './subteam';
import PermissionSchema from './role';

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userInfo: {
    name: {
      first: String,
      last: String,
    },
    subteam: SubteamSchema,
    age: Number,
    permissions: [PermissionSchema],
    other: JSON,
  },
});

module.exports = UserSchema;
