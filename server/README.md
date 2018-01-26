# rrp-blog-user-service

> Microservice implementation of a REST API

App's users management, authentication/authorization solution.

This is just a API demo written in Node/Express for a blog.

The goal of this app is to be dockerized and to works in a Kubernetes cluster

## Technologies used:
* es6
* Typescript
* NodeJS
* ExpressJS
* JSON Web Tokens
* Mongodb
* Docker
* Kubernetes
* TravisCI

### Get Started:
`git clone https://github.com/rproenza86/rrp-blog-user-service.git`

`cd rrp-blog-user-service `

### Yarn

`yarn`

`yarn build`

`yarn start`

### NPM

`npm install`

`npm run dev`

### TODO:
* Unit test
* Password encryptation
* Json token implementation
* Joi validation
* Types assignation
* Code refactorization, convert controller into classes and apply es6 built-in functions
* Review tsconfig file to add missing options
* Add to travis the server test stage
