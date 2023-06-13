import Head from 'next/head'
import '/styles/globals.css'
import '/styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script';
import { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidemenu from './components/Sidemenu'
import Layout from './components/Layout';
export default function App({ Component, pageProps }) {
     useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return(
<>
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

  </Head>
  <Sidemenu>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Sidemenu>
  <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossOrigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossOrigin="anonymous"></script>

</>
  )
}
