import logger from "../logger";
import UserService from "../services/user";

export default class UserController {
  private userService = new UserService();

  async getAllUser() {
    try {
      return await this.userService.getAllUser();
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}
