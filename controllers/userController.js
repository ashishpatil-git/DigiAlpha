import userServices from "../services/userServices.js";
import status from "../constants/statusConstants.js";

class UserController {
  constructor() {
    this.service = new userServices();
  }
  registerUser = async (req, res) => {
    try {
      const newUser = await this.service.create(req.body);
      if (newUser.error) {
        return res.status(newUser.status).send(newUser.error);
      }
      res.status(newUser.status).send(newUser);
    } catch (error) {
      res.status(status.SERVER_ERROR).send(error.message);
    }
  };
  getUserById = async (req, res) => {
    try {
      const user = await this.service.getById(req.params.id);
      if (user.error) {
        return res.status(user.status).send(user.error);
      }
      res.status(user.status).send(user);
    } catch (error) {
      res.status(status.SERVER_ERROR).send(error.message);
    }
  };
  updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await this.service.update(userId,req.body);
      if (user.error) {
        return res.status(user.status).send(user.error);
      }
      res.status(user.status).send(user);
    } catch (error) {
      res.status(status.SERVER_ERROR).send(error.message);
    }
  };
  disableUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await this.service.update(userId,{ isActive: false });
      if (user.error) {
        return res.status(user.status).send(user.error);
      }
      res.status(user.status).send(user);
    } catch (error) {
      res.status(status.SERVER_ERROR).send(error.message);
    }
  };
  getAllUsers = async (req, res) => {
    try {
      const filters = req.query;
      const users = await this.service.getAll(filters);
      if (users.error) {
        return res.status(users.status).send(users.error);
      }
      res.status(users.status).send(users);
    } catch (error) {
      res.status(status.SERVER_ERROR).send(error.message);
    }
  };
}

export default UserController;