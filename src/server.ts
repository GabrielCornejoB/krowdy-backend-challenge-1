import { createServer } from "restify";
import { createLogger } from "bunyan";
import morgan from "morgan";
import { mp4towebm, test, webmtomp4, muteVideo } from "./functions";

const server = createServer({
  name: "My server",
  log: createLogger({
    name: "audit",
    level: "error",
  }),
});
server.use(morgan("dev"));

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

server.get("/api/v1/transform/webmtomp4", async (req, res) => {
  try {
    const responseCode = await webmtomp4("src\\videos\\original_webm.webm");
    return res.json({
      message: "Video transformed from webm to mp4 succesfully",
      code: responseCode,
    });
  } catch (error) {
    return res.json({
      message: error,
      error: true,
    });
  }
});

server.get("/api/v1/transform/mp4towebm", async (req, res) => {
  try {
    const responseCode = await mp4towebm("src\\videos\\original_mp4.mp4");
    return res.json({
      message: "Video transformed from mp4 to webm succesfully",
      code: responseCode,
    });
  } catch (error) {
    return res.json({
      message: error,
      error: true,
    });
  }
});

server.get("/api/v1/mutevideos", async (req, res) => {
  try {
    await muteVideo(
      "src\\videos\\original_mp4.mp4",
      "src\\videos\\muted_mp4.mp4"
    );
    await muteVideo(
      "src\\videos\\original_webm.webm",
      "src\\videos\\muted_webm.webm"
    );
    return res.json({
      message: "Videos muted succesfully",
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
