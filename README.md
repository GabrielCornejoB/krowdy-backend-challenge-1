# **Krowdy Backend challenge #1**

This repo contains my solution for the first challenge of the back-end module of the Web Development Bootcamp by [Krowdy Academy](https://www.krowdy.com/).

The challenge consisted in creating a back-end boilerplate with [Restify framework](http://restify.com) and then create a series of endpoints using [FFmpeg](https://ffmpeg.org) and the **spawn( )** node.js function.

## **Solution**

For this exercise we needed to use the first 3 factors of the **"Twelve-Factor App"** (you can read more about this, [here](https://12factor.net)). This first 3 factors are:

1. Codebase
2. Dependencies
3. Config

For the **codebase** I used git (this repository where you are reading this). For **dependencies**, in this project there's a package.json file which keeps track of all of the dependencies that this project needs. And for the **config**, this project has a configuration for TypeScript, and also has an environment variable for managing the port. This environment variable file is not in this repo.

In this project there are 4 main files:

- **index.ts:** Main file that gets executed, requires the file that starts the server and manages the environment variable.
- **src/index.ts:** Calls the start of the server.
- **src/server.ts:** Declaration of the creation of the server and definition of the end-points.
- **src/functions.ts:** Module that contains all od the functions that the end-points execute.

In the **src/server.ts** you can change the values for the paths of the videos to transform.

> **NOTE:** This exercise was done in Windows, the commands for Linux or Mac may change.

## **References**

For the development of this challenge I read the following documentation:

- [FFmpeg documentation](https://ffmpeg.org/ffmpeg.html)
- [Node.js child process documentation](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
