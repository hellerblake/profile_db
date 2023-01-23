module.exports = ({ env }) => {
const port = env('PORT', '1337');
 return {
    host: env('HOST', '0.0.0.0'),
    port,
    url: env('URL', `http://localhost${port !== '80' ? ':'+port : ''}`),
    app: {
      keys: env.array('APP_KEYS'),
    },
  }
};
