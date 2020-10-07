import RoleController from '../controllers/role.controller';
import SubteamController from '../controllers/subteam.controller';
import TeamController from '../controllers/team.controller';
import UserController from '../controllers/user.controller';
import Role from '../entities/role.entity';
import Subteam from '../entities/subteam.entity';
import Team from '../entities/team.entity';
import { User } from '../entities/user.entity';

async function user(): Promise<User> {
  const uc = new UserController();

  const userObj = await uc.createUser('admin', 'admin@localhost', 'TestPassword123!');

  return userObj;
}

async function subteam(owner: User): Promise<Subteam> {
  const st = new SubteamController();
  const subteamObj = await st.createSubteam('testSubteam', owner);

  return subteamObj;
}

async function team(admin: User, adminRole: Role, st: Subteam): Promise<Team> {
  const tc = new TeamController();
  const teamObj = await tc.createTeam('Not Trident Robotics', 'FRC', '4269', admin, adminRole, st);

  return teamObj;
}

async function role(): Promise<Role> {
  const rc = new RoleController();
  const roleObj = await rc.createRole('Administrator', { '*': {} });

  return roleObj;
}

export default async function setup(): Promise<Team> {
  const u = await user();
  const st = await subteam(u);
  const r = await role();
  const t = await team(u, r, st);
  return t;
}
