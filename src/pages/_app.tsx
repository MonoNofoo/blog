import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'sanitize.css';
import '@/styles/lib/prism.css';
import '@/styles/base.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
