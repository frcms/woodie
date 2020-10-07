import SubteamController from '../controllers/subteam.controller';
import TeamController from '../controllers/team.controller';
import UserController from '../controllers/user.controller';
import Subteam from '../entities/subteam.entity';
import Team from '../entities/team.entity';
import User from '../entities/user.entity';

async function user(): Promise<User> {
  const uc = new UserController();
  const userObj = await uc.createUser('admin', 'admin@localhost', 'TestPassword123!');

  return userObj;
}

async function subteam(owner: number): Promise<Subteam> {
  const st = new SubteamController();
  const subteamObj = await st.createSubteam('testSubteam', owner);

  return subteamObj;
}

async function team(): Promise<Team> {
  const tc = new TeamController();
  const teamObj = await tc.createTeam('Not Trident Robotics', 'FRC', 4269);

  return teamObj;
}

export default async function setup(): Promise<[Team, User, Subteam]> {
  const u = await user();
  const st = await subteam(1);
  const t = await team();
  return [t, u, st];
}
