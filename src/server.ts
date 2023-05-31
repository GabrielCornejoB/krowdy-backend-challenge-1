import { createServer } from "restify";

const server = createServer();

const initServer = async () => {
  server.listen(process.env.SERVER_PORT, () => {
    console.log("Server listening in PORT", server.url);
  });
};

export { initServer };
