/**
 * External dependencies
 */
import Link from "next/link";
import { OauthSender } from 'react-oauth-flow';

import config from '../config/development';

const {
    API_CLIENT_ID,
    API_AUTHORIZE_URL,
    API_REDIRECT_URL,
} = config;

/**
 * Internal dependencies
 */
import { version } from '../package';
import menuStyles from './layout-menu-styles';


export default () => <nav>
	<style jsx>{ menuStyles }</style>
	<ul>
		<li>
			<Link href='/'>
				<a>🐶 Home</a>
			</Link>
		</li>

		<li>
			<Link href='/about'>
				<a>Acerca</a>
			</Link>
		</li>

		<li>
			<Link href='/contact'>
				<a>Contacto</a>
			</Link>
		</li>

		<li>
			<OauthSender
				authorizeUrl= {API_AUTHORIZE_URL }
				clientId={API_CLIENT_ID}
				redirectUri={ API_REDIRECT_URL}
				state={{ from: '/settings' }}
				render={({ url }) => <a href={url}>Login</a>}
				args={{ scope: 'global' }}
			/>
		</li>
	</ul>

	<div className="react-version">version: { version }</div>
</nav>
