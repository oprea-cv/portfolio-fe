import { ThemeProvider } from "@/components/shared/theme-provider";
import { fontSans } from "@/lib/fonts";
import { store } from "@/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={fontSans.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
}
