exports.config = {
  user: 'pankajahuja1',
  key: 'aCxhDStUopf8tsyz4d55',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  capabilities: [{
    name: 'single_appium_test',
    build: 'webdriver-browserstack',
    device: 'iPhone 7',
    app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
    'browserstack.debug': true
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};
console.log(exports.config)
