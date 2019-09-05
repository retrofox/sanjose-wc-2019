import Head from 'next/head';
import Menu from './layout-menu';
import Footer from './layout-footer';

const connected = true;

export default ({ children, title = 'Watchdog' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}

				body {
					background-color: #111;
					color: white;
					font-family: monospace;
					padding: 0;
					margin: 0;
				}
				
				a {
					color: #8f8;
				}
				
				a:hover {
					color: $dfd;
				}
				
				section.main-container {
					position: relative;
					z-index: 0;
					width: 100%;
					max-width: 600px;
					margin: 0 auto;
					height: 100vh;
					padding-top: 60px;
					padding-bottom: 40px;
				}
			`}</style>
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
