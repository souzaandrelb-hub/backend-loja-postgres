import { pool } from "./db";

async function testar() {
  const resultado = await pool.query("SELECT NOW()");
  console.log(resultado.rows);
}

testar();