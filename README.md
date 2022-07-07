# Federation Points

[![Netlify Status](https://api.netlify.com/api/v1/badges/ab099ef4-7f42-4580-b0ff-3a120b915f36/deploy-status)](https://app.netlify.com/sites/federation-points/deploys)

A web app that mimics the concept of awarding and deducting points in a QI-style fashion, but specifically built for use in the architecture team

## Prerequisites

The following must be installed.

1. [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm#installing-and-updating)
1. [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## Getting started

Before you start trying to run or the project, be sure to initialise the environment with the following commands.

```shell
# Make sure you're using the correct Node version
$ nvm use

# Install dependencies
$ npm i
```

## Running the project locally

When developing the project, you will want to be running it locally so you can test your changes. To launch the app using Hot Reloading, run the following command.

```shell
$ netlify dev
```

The app should now automatically open in the browser on the URL: http://localhost:8888/.

### Invoking functions

If you have any Lambda Functions (stored within the [`netlify/functions`](netlify/functions/) folder), then you can test their invocation in isolation by running the following command:

```shell
$ netlify functions:invoke <function-name>

# Example of running the login function
$ netlify functions:invoke login
```
