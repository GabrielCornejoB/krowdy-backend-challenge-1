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

const test = () =>
  new Promise((resolve, reject) => {
    const cmd = spawn("ffmpeg", ["-version"]);
    cmd.stdout.on("data", (data) => {
      console.log(data);
    });
    cmd.stderr.on("error", (data) => {
      console.log(data);
    });
    cmd.on("close", (code) => {
      resolve("Resolve code -> " + code);
    });
  });

server.get("/api/v1/ffmpegtest", async (req, res) => {
  try {
    const responseCode = await test();
    return res.json({
      message: "Success",
      code: responseCode,
    });
  } catch (error) {
    return res.json({
      message: error,
      error: true,
    });
  }
});

const initServer = async () => {
  server.listen(process.env.SERVER_PORT, () => {
    console.log("Server listening in PORT", process.env.SERVER_PORT);
  });
};

export { initServer };
