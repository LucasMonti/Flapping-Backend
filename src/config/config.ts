import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT || "3002",
  PRIVATE_KEY: process.env.PRIVATE_KEY,
};
