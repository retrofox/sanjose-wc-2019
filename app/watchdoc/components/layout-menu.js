import Link from "next/link";

export default () => <nav>
	<style jsx>{
		`
		a {
			font-size: 12px;
		}
		`
	}</style>
    <Link href='/'>
        <a style={{ fontWeight: 'bold' } }>🐶 Home</a>
    </Link>
    |
    <Link href='/login'>
        <a>Login</a>
    </Link>
    |
    <Link href='/contact'>
        <a>Contacto</a>
    </Link>
</nav>
