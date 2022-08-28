import User from '@/Domain/Model/User/User';
import UserCriteria from '@/Domain/Model/User/UserCriteria';
import Users from '@/Domain/Model/User/Users';

interface IUserRepository {
  createUser(user: User): Promise<void>;

  updateUser(user: User, fields: Array<string>): Promise<void>;

  findOneUserBy(userCriteria: UserCriteria): Promise<User>;

  findUsersBy(userCriteria: UserCriteria): Promise<Users>;

  countUsers(userCriteria: UserCriteria): Promise<number>;
}

export default IUserRepository;
