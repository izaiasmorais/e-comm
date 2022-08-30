import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/theme/default";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Head>
          <title>E-comm</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
