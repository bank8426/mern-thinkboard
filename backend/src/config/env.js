import { config } from "dotenv";
console.log(process.env);
config({ path: `../.env.${process.env.NODE_ENV || "development"}.local` });
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

export const { PORT, NODE_ENV, DATABASE_URL, DATABASE_KEY } = process.env;
