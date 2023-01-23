module.exports = {
  apps: [
    {
      name: 'app',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
