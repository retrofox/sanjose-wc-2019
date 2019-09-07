/**
 * External dependencies
 */
import React, { useReducer } from 'react';
import Head from 'next/head';

/**
 * Internal dependencies
 */
import Menu from './layout-menu';
import Footer from './layout-footer';
import globalStyles from './global-styles';
import { getToken, setToken } from '../lib/store';
import pickUpTokenFromURL from '../lib/pick-up-token-from-url';

// export const watchdogReducer = ( state, action ) => {
// 	switch ( action.type ) {
// 		case 'storeToken':
// 			return { ...state, token: action.token };
// 	}
// };


const Layout = ({ children, title = 'Watchdog' }) => {
	// const [ state, dispatch ] = useReducer( watchdogReducer, {
	// 	token: getToken(),
	// } );

	const pickedUpToken = pickUpTokenFromURL();
	const storeToken = getToken();

	if ( pickedUpToken && ! storeToken ) {
		setToken( pickedUpToken );
		// dispatch( { type: 'storeToken', token: pickedUpToken } );
	}

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8'/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			</Head>

			<header>
				<Menu />
			</header>

			<section className="main-container">
				{children}
			</section>

			<footer>
				<Footer/>
			</footer>
			<style global jsx>{globalStyles}</style>
		</div>
	)
}

export default Layout;
