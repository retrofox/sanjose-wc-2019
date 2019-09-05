import Link from "next/link";

export default () => <nav>
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
