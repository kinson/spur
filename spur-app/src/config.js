const development = {
  host: 'http://localhost:3000',
  wsHost: 'ws://localhost:3000'
};

const production = {
  host: 'https://live.samwhunter.com',
  wsHost: 'wss://live.samwhunter.com'
};

const config = {
  development,
  production
};

module.exports = config[process.env.NODE_ENV];
