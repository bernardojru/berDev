import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Container, Layout, Const } from "../styles/app";
import { SidebarOpenContextProvider } from "../contexts/SidebarOpenContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarOpenContextProvider>
      <Container>
        <Header />
        <Layout>
          <Const>
            <Component {...pageProps} />
          </Const>
        </Layout>
      </Container>
    </SidebarOpenContextProvider>
  );
}
