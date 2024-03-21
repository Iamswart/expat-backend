import dotenv from "dotenv";

dotenv.config({});

export const VERSION = {
    v1: "/api/v1",
};

export default {
  mongo_uri: process.env.MONGO_URI,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: Number(process.env.JWT_EXPIRATION),
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  refreshTokenExpiration: Number(process.env.REFRESH_TOKEN_EXPIRATION),
  redisHostUrl: process.env.REDIS_URL,
  apiKey: process.env.API_KEY,
  frontendUrl: process.env.FRONTEND_URL,
};
