import * as authAction from '~/Functional/Actions/authAction';
import * as userAction from '~/Functional/Actions/userAction';
import * as expectResponse from '~/Functional/Expects/expectResponse';

import UserRepository from '@/DB/Model/User/UserRepository';

export = {
  ...authAction,
  ...userAction,
  ...expectResponse,
  userRepository: new UserRepository(),
};
