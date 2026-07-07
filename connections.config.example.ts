// Copy this file to connections.config.ts and fill in your connection details.
// connections.config.ts is gitignored so credentials won't be committed.
//
// dialect: "sqlite" | "postgresql" | "mysql"
// url: connection string for the database

type Dialect = "sqlite" | "postgresql" | "mysql";
type Connection = { dialect: Dialect; url: string };

const connections: Record<string, Connection> = {
  "local-sqlite": {
    dialect: "sqlite",
    url: "./local.db",
  },
  "local-postgres": {
    dialect: "postgresql",
    url: "postgresql://user:password@localhost:5432/mydb",
  },
  "local-mysql": {
    dialect: "mysql",
    url: "mysql://user:password@localhost:3306/mydb",
  },
};

export default connections;
