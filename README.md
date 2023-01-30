# Template of ExpressJS server in TypeScript

## Steps to use

1. Click the big green button that says "Use this template"
2. Select "Create a new repository" & proceed with the steps to create it.
3. Clone it to your local machine
4. Start up the DEVELOPMENT server with ```npm run devstart -- --port 43434```
5. Start up the PRODUCTION server with ```npm run prodstart -- --port 43434```

## Setting up HTTPS with SSL
1. Have a cert and key to use
2. Put the path of said certs in `./bin/www.ts`; lines 21 & 22

## Some notes:
The first set of double hyphens (`--`) takes the argument passed in the second half of the command (`--port 43434`) and forwards it to the `node {filepath}` command defined in the npm script `devstart`.  
It's the `npm` way to forward on a CLI argument.