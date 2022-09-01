#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { app } from "../app";
import * as http from 'http';
import * as util from 'util'
import {options} from "../src/options/options";

/**
 * Get port from environment and store in Express.
 */
const port = options.port;
console.log(options)
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', () => {
  console.log("Error")
});
server.on('listening', () => {
  console.log(`Listening on ${util.inspect(server.address())}:${port}`)
});

server.listen(port);
