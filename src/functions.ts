import { spawn } from "child_process";

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

const webmtomp4 = (videoPath: string) =>
  new Promise((resolve, reject) => {
    const cmd = spawn("ffmpeg", [
      "-i",
      videoPath,
      "src\\videos\\transformed_webm.mp4",
    ]);
    console.log("Transforming video...");
    cmd.stdout.on("data", (data) => {
      console.log(data);
    });
    cmd.stderr.on("error", (data) => {
      console.log(data);
    });
    cmd.on("close", (code) => {
      if (code === 0) {
        resolve("Resolve code -> " + code);
      }
    });
  });

const mp4towebm = (videoPath: string) =>
  new Promise((resolve, reject) => {
    const cmd = spawn("ffmpeg", [
      "-i",
      videoPath,
      "src\\videos\\transformed_mp4.webm",
    ]);
    console.log("Transforming video...");
    cmd.stdout.on("data", (data) => {
      console.log(data);
    });
    cmd.stderr.on("error", (data) => {
      console.log(data);
    });
    cmd.on("close", (code) => {
      if (code === 0) {
        resolve("Resolve code -> " + code);
      }
    });
  });

const muteVideo = (videoPath: string, newFilePath: string) =>
  new Promise((resolve, reject) => {
    const cmd = spawn("ffmpeg", [
      "-i",
      videoPath,
      "-c",
      "copy",
      "-an",
      newFilePath,
    ]);
    console.log("Transforming video...");
    cmd.stdout.on("data", (data) => {
      console.log(data);
    });
    cmd.stderr.on("error", (data) => {
      console.log(data);
    });
    cmd.on("close", (code) => {
      if (code === 0) {
        resolve("Resolve code -> " + code);
      }
    });
  });

export { test, webmtomp4, mp4towebm, muteVideo };
