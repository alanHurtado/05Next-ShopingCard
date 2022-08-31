import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider, CartProvider, UiProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <UiProvider>
          <AuthProvider>
            <CartProvider>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </CartProvider>
          </AuthProvider>
        </UiProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
