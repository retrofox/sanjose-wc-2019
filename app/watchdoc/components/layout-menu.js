/**
 * External dependencies
 */
import Link from "next/link";

/**
 * Internal dependencies
 */
import { version } from '../package';

export default () => <nav>
	<style jsx>{`
		nav {
			width: 100%;
			background-color: #222;
			border-bottom: 1px solid #040;
			position: absolute;
			z-index: 10;
			top: 0;
			left: 0;
			height: 60px;
			padding-top: 14px;
		}
 
		nav ul,
		nav ul li {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		nav ul {
			margin-left: 10px;
		}
		
		nav ul li {
			display: inline-block;
			margin: 0 4px;
		}
		
		nav ul li a {
			text-decoration: none;
			display: block;
			border: 1px solid #2a2a2a;
			padding: 1px 10px;
			border-radius: 5px;
			height: 32px;
			line-height: 32px;
			background-color: #111;
			color: #0a0;
		}
		
		nav ul li a:hover {
			background-color: #444;
			color: white;
		}
		
		.react-version {
			height: 60px;
			line-height: 60px;
			position: absolute;
			right: 10px;
			top: 0;
		}
	`}</style>
	<ul>
		<li>
			<Link href='/'>
				<a>🐶 Home</a>
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
