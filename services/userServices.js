import User from "../models/users.js";
import status from "../constants/statusConstants.js";

class userServices {
  async create(requestBody) {
    try {
      const newUser = new User(requestBody);
      await newUser.save();
      return { newUser, status: status.CREATED };
    } catch (error) {
      return { error, status: status.SERVER_ERROR };
    }
  }

  async update(userId, requestBody) {
    try {
      const user = await User.findByIdAndUpdate(userId, requestBody, {
        new: true,
      });
      return { user, status: status.SUCCESS };
    } catch (error) {
      return { error, status: status.SERVER_ERROR };
    }
  }

  async getById(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        return { error: "User not found", status: status.NOTFOUND };
      }
      return { user, status: status.SUCCESS };
    } catch (error) {
      return { error, status: status.SERVER_ERROR };
    }
  }

  async getAll(filters) {
    try {
      let limit = filters?.limit || 100;
      let page = filters?.page || 1;
      let skip = ((limit*page) - filters.limit) || 0;      
      delete filters?.limit;
      delete filters?.page;
      const users = await User.find({...filters}).skip(skip).limit(limit).sort({createdAt : 1});
      return { users, status: status.SUCCESS };
    } catch (error) {
      console.log(error);      
      return { error, status: status.SERVER_ERROR };
    }
  }
}

export default userServices;