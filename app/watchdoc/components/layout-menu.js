import Link from "next/link";

export default () => <nav>
	<style jsx>{`
		nav {
			width: 100%;
			background-color: #f0f0f0;
			padding: 5px 0;
		}
 
		nav ul,
		nav ul li {
			list-style: none;
		}
		
		nav ul li {
			display: inline-block;
			margin: 0 5px;
		}
		
		nav ul li a {
			text-decoration: none;
			display: block;
			border: 1px solid #ddd;
			padding: 1px 10px;
			border-radius: 5px;
			height: 28px;
			line-height: 28px;
			background-color: #fafafa;
		}
		
		nav ul li a:hover {
			background-color: #444;
			color: white;
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
</nav>
