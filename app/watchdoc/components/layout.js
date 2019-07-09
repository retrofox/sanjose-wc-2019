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
    </Head>

    <header>
        <Menu />
    </header>

    {connected && children}

    <footer><Footer /></footer>
  </div>
)
