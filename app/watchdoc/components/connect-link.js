/**
 * External dependencies
 */
import {OauthSender} from "react-oauth-flow";

/**
 * Internal dependencies
 */
import config from "../config/development";

/**
 * Config
 */
const {
	API_CLIENT_ID,
	API_AUTHORIZE_URL,
	API_REDIRECT_URL,
} = config;

export default () =>
	<OauthSender
		authorizeUrl= {API_AUTHORIZE_URL }
		clientId={API_CLIENT_ID}
		redirectUri={ API_REDIRECT_URL}
		state={{ from: '/settings' }}
		render={({ url }) => <a href={url}>Login</a>}
		args={{ scope: 'global' }}
	/>
