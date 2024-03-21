import User from "../models/user";

export default class UserService {

  async getAllUser() {
    const users = await User.find(
      {},
      "firstname lastname email phone dateOfBirth lastLoginAt"
    ).exec();

    return users;
  }


}
