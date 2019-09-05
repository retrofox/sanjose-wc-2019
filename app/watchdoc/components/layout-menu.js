/**
 * External dependencies
 */
import Link from "next/link";

/**
 * Internal dependencies
 */
import { version } from '../package';
import menuStyles from './layout-menu-styles';
import ConnectLink from './connect-link';

export default () => <nav>
	<style jsx>{ menuStyles }</style>
	<ul>
		<li>
			<Link href='/'>
				<a>🐶 Home</a>
			</Link>
		</li>

		<li>
			<Link href='/about'>
				<a>Acerca</a>
			</Link>
		</li>

		<li>
			<Link href='/contact'>
				<a>Contacto</a>
			</Link>
		</li>

		<li>
			<a href="#"><ConnectLink /></a>
		</li>
	</ul>

	<div className="react-version">version: { version }</div>
</nav>
