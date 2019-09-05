/**
 * External dependencies
 */
import Link from "next/link";

/**
 * Internal dependencies
 */
import { version } from '../package';
import menuStyles from './layout-menu-styles';


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
			<Link href='/login'>
				<a>Login</a>
			</Link>
		</li>
	</ul>

	<div className="react-version">version: { version }</div>
</nav>
