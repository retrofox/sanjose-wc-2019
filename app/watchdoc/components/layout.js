/**
 * External dependencies
 */
import React, { useEffect } from 'react';
import Head from 'next/head';

/**
 * Internal dependencies
 */
import Menu from './layout-menu';
import Footer from './layout-footer';
import globalStyles from './global-styles';
import { setToken } from '../lib/store';
import pickUpTokenFromURL from '../lib/pick-up-token-from-url';


// const watchdogReducer = ( state, action ) => {
// 	switch ( action.type ) {
// 		case 'storeToken':
// 			return { ...state, token: action.token };
// 	}
// };


const Layout = ({ children, title = 'Watchdog' }) => {
	const pickedUpToken = pickUpTokenFromURL();
	if ( pickedUpToken ) {
		setToken( pickedUpToken );
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
