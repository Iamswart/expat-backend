import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { badRequestError } from "../error";
import {
  LoginInterface,
  RegisterInterface
} from "../interfaces/auth";
import User from "../models/user";
import { client } from "../utils/redis";

export default class AuthService {
  async register(input: RegisterInterface) {
    const { firstname, lastname, email, password, phone, dateOfBirth } = input;

    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      throw badRequestError(
        "Email address already exist, please login to continue"
      );
    }

    const phoneExist = await User.findOne({ phone: phone });
    if (phoneExist) {
      throw badRequestError("Phone Number already exist");
    }

    const user = await User.create({
      firstname,
      lastname,
      email,
      phone,
      password,
      dateOfBirth
    });


    const accessToken = user.generateAuthToken();
    const refreshToken = user.generateRefreshToken();
    await client.set(`refreshToken_${user.id}`, refreshToken,  "EX", 604800 );
    return {
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth
      },
      accessToken,
      refreshToken,
    };
  }

  async login(input: LoginInterface) {
    const { email, phone, password } = input;

    let loginCriteria = {};
    if (email) {
      loginCriteria = { email };
    } else if (phone) {
      loginCriteria = { phone };
    } else {
      throw badRequestError("Login method not provided");
    }

    const user = await User.findOne(loginCriteria);
    if (!user) {
      throw badRequestError("Email/Phone or Password Incorrect");
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      throw badRequestError("Email/Phone or Password Incorrect");
    }

    const accessToken = user.generateAuthToken();
    const refreshToken = user.generateRefreshToken();

    await client.set(`refreshToken_${user.id}`, refreshToken,  "EX", 604800 );

    user.lastLoginAt = new Date();
    await user.save();

    return {
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth
      },
      accessToken,
      refreshToken,
    };
  }


  async refreshTokenUser(refreshToken: string) {
    const decoded: any = jwt.verify(
      refreshToken,
      config.refreshTokenSecret as string
    );

    const token = await client.get(`refreshToken_${decoded.id}`);

    if (!token) {
      throw badRequestError(
        "Token already expired, please kindly log in again"
      );
    }

    if (token !== refreshToken) {
      throw badRequestError("Incorrect refresh token");
    }

    const accessToken = jwt.sign(
      { id: decoded.id },
      config.jwtSecret as string,
      {
        expiresIn: config.jwtExpiration,
      }
    );

    const newRefreshToken = jwt.sign(
      { id: decoded.id },
      config.refreshTokenSecret as string,

      {
        expiresIn: config.refreshTokenExpiration,
      }
    );

    await client.set(
      `refreshToken_${decoded.id}`,
      newRefreshToken,
      "EX",
      604800
    );

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }
}
