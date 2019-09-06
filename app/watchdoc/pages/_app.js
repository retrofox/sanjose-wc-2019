
/**
 * External dependencies
 */
import React from 'react'
import App from 'next/app'
import qs from 'query-string';


/**
 * Internal dependencies
 */
import store from '../lib/store';

class MyApp extends App {
	state = {
		accessToken: null,
	};

	componentDidMount() {
		const { router } = this.props;

		// Pickup access token from query string hash.
		const rawQS = router && router.asPath
			? router.asPath.substr( 1 )
			: null;

		const data = rawQS ? qs.parse( rawQS ) : null;
		const accessToken = data ? data.access_token : null;

		// Store the access token into local.
		if ( accessToken ) {
			store
				.setItem('access_token', accessToken)
				.then( accessToken => this.setState( { accessToken } ) );
		}

		if ( ! accessToken ) {
			store
				.getItem('access_token' )
				.then( accessToken => this.setState( { accessToken } ) )
				.catch( console.warn );
		}
	}

	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} accessToken={ this.state.accessToken } />
	}
}

export default MyApp
