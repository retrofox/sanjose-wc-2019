import Link from "next/link";
import { OauthSender } from 'react-oauth-flow';

import config from '../config/development';

const {
    API_CLIENT_ID,
    API_AUTHORIZE_URL,
    API_REDIRECT_URL,
} = config;

export default () => <nav>
	<style jsx>{
		`
		a {
			font-size: 12px;
		}
		`
	}</style>
    <Link href='/'>
        <a style={{ fontWeight: 'bold' } }>🐶 Home</a>
    </Link>
    |
    <OauthSender
        authorizeUrl= {API_AUTHORIZE_URL }
        clientId={API_CLIENT_ID}
        redirectUri={ API_REDIRECT_URL}
        state={{ from: '/settings' }}
        render={({ url }) => <a href={url}>Conectar</a>}
        args={{ scope: 'global' }}
    />
    |
    <Link href='/contact'>
        <a>Contacto</a>
    </Link>
</nav>
