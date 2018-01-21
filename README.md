This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
**For a live demo click [here](https://ksiabani.github.io/bidder).**


## What's inside?

* React 16 with ES6
* Routing with React Router 4
* Building and bundling with Webpack
* CSS preprocessing with Sass
* Unit tests with Jest and Enzyme
* End-to-end tests with Puppeteer


## How to setup

* Clone this repo
* Run `npm install` or `yarn install` (Node.js >= 8.0.0)
* Run `npm start` or `yarn start`
* Browse to `localhost:3000`


## Task automation

- Run `npm start` to run development server on `http://localhost:3000/`
- Run `npm run build` builds the app for production to the `build` folder.
- Run `npm test` to run tests. See the section on running tests below.


## Tests

This project uses Jest with Enzyme to run unit tests and Puppeteer to run e2e tests. Run `npm test` to run tests. This will run e2e tests with a headless browser. To view e2e tests in the browser (Chromium) run `npm test` with `DEBUG` variable set to `true` like this:

 `REACT_APP_DEBUG=true npm test`


## License

MIT
