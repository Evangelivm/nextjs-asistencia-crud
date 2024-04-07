import mysql from "serverless-mysql";
import dotenv from "dotenv";

dotenv.config();

export const conn = mysql({
  config: {
    host: process.env.HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
});
