import * as Bun from "bun";
import connections from "../connections.config";

const BASE_PORT = 4983;
const target = process.argv[2]; // optional: connection name to launch only one

const names = target ? [target] : Object.keys(connections);

for (const name of names) {
  if (!connections[name]) {
    const available = Object.keys(connections).join(", ");
    console.error(`Unknown connection: "${name}". Available: ${available}`);
    process.exit(1);
  }
}

const processes = names.map((name, i) => {
  const port = BASE_PORT + i;
  console.log(`Starting studio for "${name}" → http://local.drizzle.studio:${port}`);
  return Bun.spawn(["bunx", "drizzle-kit", "studio", "--port", String(port)], {
    env: { ...process.env, DB_CONNECTION: name },
    stdout: "inherit",
    stderr: "inherit",
  });
});

await Promise.all(processes.map((p) => p.exited));
