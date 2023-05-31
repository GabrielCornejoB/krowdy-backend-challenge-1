import { createServer } from "restify";
import { createLogger } from "bunyan";
import morgan from "morgan";
import { spawn } from "node:child_process";

const server = createServer({
  name: "My server",
  log: createLogger({
    name: "audit",
    level: "error",
  }),
});
server.use(morgan("dev"));

const initServer = async () => {
  server.listen(process.env.SERVER_PORT, () => {
    console.log("Server listening in PORT", process.env.SERVER_PORT);
  });
};

export { initServer };
