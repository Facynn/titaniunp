import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import CookieAlert from './Partials/CookieAlert';

export function MainLayout({ children }) {
  return (
    <Fragment>
        <Head>
          <link rel="shortcut icon" href="./logo.ico" type="image/x-icon" />
          <script src="//code.tidio.co/hj7l16klaqkfmseublbnxkxaf6egmhz0.js" async></script>
        </Head>

      <Navbar />

      <main>{children}</main>

      <Footer/>
      <CookieAlert/>
    </Fragment>
  )
}
