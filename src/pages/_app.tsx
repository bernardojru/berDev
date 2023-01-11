import type { AppProps } from "next/app";
import { ThemesContextProvider } from "../contexts/ThemesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesContextProvider>
      <Component {...pageProps} />
    </ThemesContextProvider>
  );
}
