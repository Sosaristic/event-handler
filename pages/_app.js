import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../components/theme/theme";
import {SideBarProvider} from "../context/menuContext"
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SideBarProvider>
      <Component {...pageProps} />
      </SideBarProvider>
    </ThemeProvider>
  );
}
