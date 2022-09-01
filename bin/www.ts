#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { app } from "../app";
import * as http from 'http';
import * as util from 'util'
import {options} from "../src/options/options";
import fs from "fs";
import https from "https";

/**
 * Get port from environment and store in Express.
 */
const port = options.port;
console.log(options)
app.set('port', port);

const pathToCert = "";
const pathToKey = "";

/**
 * Create HTTP server.
 */
let server: any = undefined;
try{
  const httpsOptions =
      {
        cert: fs.readFileSync(pathToCert),
        key: fs.readFileSync(pathToKey)
      }
  server = https.createServer(httpsOptions, app);
}catch(err) {
  if (err instanceof Error){
    console.log(err.name);
  }
  server = http.createServer(app);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', () => {
  console.log("Error")
});
server.on('listening', () => {
  console.log(`Listening on ${util.inspect(server.address())}:${port}`)
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
