#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { app } from "../app";
import * as http from 'http';
import { options } from "../src/options/options";
import fs from "fs";
import https from "https";
import * as net from 'node:net';

/**
 * Get port from environment and store in Express.
 */
const port = options.port ? options.port : '3000'

app.set('port', port);

/**
 * Paths to the SSL cert and privkey. 
 */
const pathToCert = "/app/etc/letsencrypt/..."; // TODO: Change this to match your path
const pathToKey = "/app/etc/letsencrypt/..."; // TODO: Change this to match your path

/**
 * Create HTTP or HTTPS server.
 */
let server: net.Server;
let protocol: string;

try {
  const httpsOptions =
  {
    cert: fs.readFileSync(pathToCert),
    key: fs.readFileSync(pathToKey)
  }
  server = https.createServer(httpsOptions, app);
  protocol = 'https'

} catch (err) {
  if (err instanceof Error) {}

  server = http.createServer(app);
  protocol = 'http'
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', (error) => {
  console.log(`Error: ${error}`)
});

server.listen(port, () => {
  console.log(`View app at ${protocol}://localhost:${port}`)
});
