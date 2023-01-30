#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { app } from "../app";
import * as http from 'http';
import * as util from 'util'
import { options } from "../src/options/options";
import fs from "fs";
import https, { Server } from "https";
import * as net from 'node:net';

/**
 * Get port from environment and store in Express.
 */
const port = options.port ? options.port : '3000'
console.log(`Options used: ${JSON.stringify(options)}`)
app.set('port', port);

const pathToCert = "";
const pathToKey = "";

/**
 * Create HTTP or HTTPS server.
 */
let server: net.Server;

try {
  const httpsOptions =
  {
    cert: fs.readFileSync(pathToCert),
    key: fs.readFileSync(pathToKey)
  }
  server = https.createServer(httpsOptions, app);
} catch (err) {
  if (err instanceof Error) {
    console.log(`There was a problem starting an https server, starting http server instead`);
  }
  server = http.createServer(app);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', (error) => {
  console.log(`Error: ${error}`)
});

server.listen(port, () => {
  console.log(`View app at http://localhost:${port}`)
});
