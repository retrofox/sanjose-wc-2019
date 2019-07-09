const  config =  {
  APP_HOST: 'http://localhost',
  APP_PORT: '3000',

  API_CLIENT_ID: "66236",
  API_AUTHORIZE_URL: "https://public-api.wordpress.com/oauth2/authorize",
};

config.API_REDIRECT_URL = `${config.APP_HOST}:${config.APP_PORT}`;

export default config;
