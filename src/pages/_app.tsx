import type { AppProps } from 'next/app';
import 'sanitize.css';
import '@/styles/base.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
