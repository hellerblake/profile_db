const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DB_PATH', path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db'))) ,
    },
    useNullAsDefault: true,
  },
});
