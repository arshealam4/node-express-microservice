# Node Express Microservice

## Description
* We have three micro services to communicate with api gateway, they also can communicate each othre internelly.

## Technology
- [x] Node
- [x] ExpressJS
- [x] Best Practice Structure
- [x] Async Await

## Requirements
* To run this project, nodejs and git (version control) should be installed.
* Node ^8

### node
* [Node](http://nodejs.org/) is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.
  $ node --version
  $ npm --version

## Quick Start
* git clone https://github.com/arshealam4/node-express-microservice.git
* cd node-express-microservice/api-gateway
* npm install
* npm start

## Microservice Description

![diagram](ER-diagram.png)

### api-gateway
* we can connect with all below services with api-gateway
* we can route with each services based on requested url.

### user-service
* we can add, get all users and user by id.
* we also can connect with log-service from here and add user activity.
* go to inside user and start server(npm start)

### chat-service
* we can add, get all chats and chat by id.
* go to inside char and start server(npm start)

### log-service
* we can add, get all logs and log by id.
* go to inside log and start server(npm start)

