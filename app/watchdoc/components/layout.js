/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import Menu from './layout-menu';
import Footer from './layout-footer';
import globalStyles from './global-styles';

const connected = true;

export default ({ children, title = 'Watchdog' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<style jsx global>{ globalStyles }</style>
		</Head>

		<header>
			<Menu />
		</header>

		<section className="main-container">
			{connected && children}
		</section>

		<footer><Footer /></footer>
  </div>
)
