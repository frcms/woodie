import * as db from '../database';
import SubteamSchema from '../schemas/subteam';

const SubteamModel = db.mongoose.model('User', SubteamSchema);

db.mongoose.connection.db.listCollections({ name: 'subteams' })
  .next((err, coll) => {
    if (!coll) {
      SubteamModel.createCollection();
    }
  });

export default SubteamModel;
