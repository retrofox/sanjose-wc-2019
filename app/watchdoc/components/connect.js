/**
 * External dependencies
 */
import { useRouter } from 'next/router'

/**
 * Internal dependencies
 */
import { RequestOAuth } from './connect-link';

export default () => {
	const router = useRouter();
	const oAuthCode = router && router.query && router.query.code;

	// Pickup access token from query string hash.
	let accessToken = router && router.asPath
		? router && router.asPath.match( /^\/#access_token=(.*)/ )
		: null;
	accessToken = accessToken && accessToken.length > 1 ? accessToken[1] : null;

	if ( ! accessToken ) {
		return (
			<div className="connect-container">
				<h2>OAuth process</h2>
				<p>Se ha obtenido el código { oAuthCode }!</p>
				<p>
					<RequestOAuth>Negociemos</RequestOAuth> el código por un Token!
				</p>
			</div>
		);
	}

	return <div>connected</div>;
}
