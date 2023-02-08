# Template of ExpressJS server in TypeScript

## Steps to use

1. Click the big green button that says "Use this template".
2. Select "Create a new repository" & proceed with the steps to create it.
3. Clone it to your local machine and run `npm i` to install dependencies.
4. Start up the DEVELOPMENT server with ```npm run devstart -- --port 43434```
5. Start up the PRODUCTION server with ```npm run prodstart -- --port 43434```

## Setting up HTTPS with SSL
1. Have a cert and key to use
2. Put the path of said certs in `./bin/www.ts`; lines 21 & 22

## Docker
A quick reference to how you can build, push, and run this app as a docker container.  
Navigate to the root directory of the project and run the commands.  
Assumptions:
  - You have a registry setup and are already logged in
  - You have a Let's Encrypt authorized cert and privkey somewhere beyond `/etc/letsencrypt` on your host machine.

### Build-
```
docker build . -t {registry}/{user name}/{project name}:{version}
```

### Push-
```
docker push {registry}/{user name}/{project name}:{version}
```

### Run-
```
docker run \
-d \
-p 443:3000 \
-v /etc/letsencrypt:/app/etc/letsencrypt \
{registry}/{user name}/{project name}:{version}
```

## Some notes:
1. The first set of double hyphens (`--`) takes the argument passed in the second half of the command (`--port 43434`) and forwards it to the `node {filepath}` command defined in the npm script `devstart`.  
It's the `npm` way to forward on a CLI argument.

2. In `src/routes/helpers/validate.ts` there is a `HostAllowed()` method that validates the host header. If you change the port number from the default `3000`, then you'll need to edit this too.