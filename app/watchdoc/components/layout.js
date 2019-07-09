import Head from 'next/head'

export default ({ children, title = 'Watchdog' }) => (
	<div>
		<Head>
			  <title>{title}</title>
			  <meta charSet='utf-8' />
			  <meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
	<header>
	  	<nav>
			<ul>
				<li>
					<a href='/'>🐶 Watchdog</a>
				</li>

				<li>
					<a href='/logout'>Login</a>
				</li>

				<li>
					<a href='/contact'>Contacto</a>
				</li>
			</ul>
	  	</nav>
	</header>

	{children}

	<footer>San José WordCamp @2019</footer>
  </div>
)
