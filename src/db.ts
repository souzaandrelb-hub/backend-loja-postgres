import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "loja",
  user: "postgres",
  password: "sua_senha"
});