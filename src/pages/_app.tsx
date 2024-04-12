import type { AppProps } from "next/app";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavProvider } from "@/hooks/useNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}
