import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { ToggleButton } from "../components/ToggleButton/ToggleButton";
import { useDarkMode } from "../hooks/useDarkMode";
import { GlobalStyle } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Head>
          <title>E-comm</title>
        </Head>
        <Component {...pageProps} />

        <ToggleButton theme={theme} toggleTheme={themeToggler} />
      </ThemeProvider>
    </>
  );
}
