import { defineConfig } from "drizzle-kit";
import connections from "./connections.config";

const name = process.env.DB_CONNECTION ?? Object.keys(connections)[0];
const conn = connections[name];

if (!conn) {
  const available = Object.keys(connections).join(", ");
  throw new Error(`Unknown connection: "${name}". Available: ${available}`);
}

export default defineConfig({
  dialect: conn.dialect,
  dbCredentials: { url: conn.url },
});
