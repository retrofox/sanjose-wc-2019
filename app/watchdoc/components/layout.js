import Link from 'next/link'
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
        <Link href='/'>
          <a>🐶 Watchdog</a>
        </Link>{' '}
        |
        <Link href='/logout'>
          <a>Login</a>
        </Link>{' '}
        |
        <Link href='/contact'>
          <a>Contacto</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>San José WordCamp @2019</footer>
  </div>
)
