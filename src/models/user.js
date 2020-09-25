import * as db from '../database';
import UserSchema from '../schemas/user';

const UserModel = db.mongoose.model('User', UserSchema);

db.mongoose.connection.db.listCollections({ name: 'users' })
  .next((err, coll) => {
    if (!coll) {
      UserModel.createCollection();
    }
  });

export default UserModel;
