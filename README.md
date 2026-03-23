# Mini Message Board

[Live Demo](https://mini-message-board-8y0f.onrender.com/)<br/><br/>
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B?logo=theodinproject&logoColor=fff)](#)

## Overview

This is a project from [The Odin Project](https://theodinproject.com): [Project: Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board). This simple Express project allows users to create a new message and send it to a mock database and view messages from the database.

## Learning Points

- Understanding the basics of using Express to create an Express server that receives HTTP requests and uses various app methods
- Understanding the concepts of routers, controllers and views in Express
- Understanding the MVC design pattern of a back-end Web Development framework

## Tech Stack

- [![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
- [![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- [![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
- [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)

## Getting Started

### Prerequisites

You will need to install the latest version of npm to get started on using this project

- npm

```sh
npm install npm@latest -g
```

### Installation

Getting started on running the webpack server to your localhost, localhost:8080

1. Cloning the repository

```sh
git clone git@github.com:JohnFerrancol/mini-message-board.git
```

2. Navigate to the mini-message-board folder and install npm packages

```sh
cd mini-message-board && npm install
```

3. Running the Express server

```sh
npm run start
```

4. Open in web browser via: http://localhost:3000

## Roadmap

- [x] Create the two routes in the Express application, / and /messages and create an array of messages as the placeholder database
- [x] Create Views to view the messages on the index pages and a form on the /messages/new route to allow new messages to be sent
- [x] Create a post logic to update the mock database
