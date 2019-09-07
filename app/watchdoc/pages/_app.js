
/**
 * External dependencies
 */
import React from 'react'
import App from 'next/app'

class MyApp extends App {
	state = {
		accessToken: null,
	};

	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} accessToken={ this.state.token } />
	}
}

export default MyApp
