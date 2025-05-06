const { env } = require('process');

const target = env["services__ggduitproberen2-server__https__0"] ?? 'https://localhost:7209';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
