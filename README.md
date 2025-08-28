⚠️ In progress........ ⚠️

<h3 align="center">MERN Thinkboard</h3>

## ⚠️ Note

This project was implemented based on a tutorial video on YouTube from freeCodeCamp [MERN Stack Tutorial for Beginners with Deployment – 2025](https://www.youtube.com/watch?v=F9gB5b4jgOI).

## Table of Contents

1. [Introduction](#introduction)
2. [Demo](#demo)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Quick Start](#quick-start)
6. [What I learned](#learn)
7. [Implementation Notes](#note)
8. [Missing Features](#miss)

## <a name="introduction">Introduction</a>

TODO

## <a name="demo">Demo</a>

TODO

## <a name="tech-stack">Tech Stack</a>

- MongoDB - NoSQL database
- Express - backend framework
- React v19 - frontend library
- Node.js - JS runtime

## <a name="features">Features</a>

TODO

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Git
- Node.js
- npm

### Cloning the Repository

```bash
git clone https://github.com/bank8426/mern-thinkboard.git
cd mern-thinkboard
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

1. Create a new file named `.env.development.local` and copy the content inside `.env.example`
2. Replace the placeholder values with your actual credentials

```env
TODO
```

**Running the Project**

```bash
npm run dev
```

Your server will run on [http://localhost:3000](http://localhost:3000/)

## <a name="learn">What I learned</a>

TODO

- Node.js in backend
- package.json
- when init the project it will default project `type` to CommonJS which when you import library in your code you need to use

```js
const express = require("express)
```

but if you want to you `import` keyword you need to chage project type to "Module" style which can be done by add `"type" : "module"` in your `package.json`

```js
//in package.json
{
  ... // other config
  "type": "module",
  ... // other config
}



```

## <a name="note">Implementation Notes</a>

TODO

## <a name="miss">Missing Features</a>

TODO
