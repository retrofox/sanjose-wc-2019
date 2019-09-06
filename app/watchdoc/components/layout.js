/**
 * External dependencies
 */
import React, { useState } from 'react';

import Head from 'next/head';

/**
 * Internal dependencies
 */
import Menu from './layout-menu';
import Footer from './layout-footer';
import globalStyles from './global-styles';

export default ({ children, title = 'Watchdog' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>

		<header>
			<Menu />
		</header>

		<section className="main-container">
			{children}
		</section>

		<footer>
			<Footer />
		</footer>
		<style global jsx>{ globalStyles }</style>
  </div>
)
