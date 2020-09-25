import * as db from '../database';
import RoleSchema from '../schemas/role';

const RoleModel = db.mongoose.model('User', RoleSchema);

db.mongoose.connection.db.listCollections({ name: 'roles' })
  .next((err, coll) => {
    if (!coll) {
      RoleModel.createCollection();
    }
  });

export default RoleModel;
