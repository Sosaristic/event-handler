import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../components/theme/theme";
import {SideBarProvider} from "../context/menuContext"
import Layout from "../components/Layout/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SideBarProvider>
        <Layout>
      <Component {...pageProps} />
      </Layout>
      </SideBarProvider>
    </ThemeProvider>
  );
}
