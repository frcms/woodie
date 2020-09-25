import * as mongoose from 'mongoose';
// eslint-disable-next-line import/no-cycle
import UserSchema from './user';

export default mongoose.Schema({
  name: String,
  teamLead: { type: UserSchema, ref: 'User' },
  teamMembers: [{ type: UserSchema, ref: 'User' }],
  tasks: Array,
  teamInfo: {},
});
