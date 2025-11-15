import type { AppProps } from 'next/app';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-1234567890" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 