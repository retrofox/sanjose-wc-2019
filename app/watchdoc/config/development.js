const  config =  {
	APP_HOST: 'http://localhost',
	APP_PORT: '3000',

	API_CLIENT_ID: '66838',
	APP_CLIENT_SECRET: 'oz8vST8zK5TLt9mBkbfcO8oVDI6qr9xIwJGEFrna9W0QzmrsJiLOwE3sWJbmezQf',
	API_AUTHORIZE_URL: 'https://public-api.wordpress.com/oauth2/authorize',
	API_TOKEN_URL: 'https://public-api.wordpress.com/oauth2/token-info',
	API_CONNECTION_ARGS: { scope: 'global', response_type: 'token' },

	API_HOST: 'https://public-api.wordpress.com',
};

config.API_REDIRECT_URL = `${config.APP_HOST}:${config.APP_PORT}`;

export default config;
