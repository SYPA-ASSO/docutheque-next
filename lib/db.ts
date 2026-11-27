import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from "mysql2/promise";

// Connexion à la base MariaDB. Les identifiants viennent des variables d'environnement :
// DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD (jamais dans le code).
// Toutes les dates sont enregistrées en UTC (timezone "Z") et fournies par l'application, jamais par la base.

const g = globalThis as unknown as { __poolDocutheque?: Pool };

function pool(): Pool {
  if (!g.__poolDocutheque) {
    const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    if (!DB_HOST || !DB_NAME || !DB_USER || !DB_PASSWORD) throw new Error("base_non_configuree");
    g.__poolDocutheque = mysql.createPool({
      host: DB_HOST,
      port: Number(DB_PORT || 3306),
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      charset: "utf8mb4",
      timezone: "Z",
      connectionLimit: 5,
    });
  }
  return g.__poolDocutheque;
}

export async function lignes<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  const [rows] = await pool().query<RowDataPacket[]>(sql, params);
  return rows as unknown as T[];
}

export async function executer(sql: string, params: unknown[] = []): Promise<ResultSetHeader> {
  const [res] = await pool().query<ResultSetHeader>(sql, params);
  return res;
}
