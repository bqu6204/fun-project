import "@/styles/globals.css";
import "@/styles/dist/global-buttons.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";

interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: IAppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
