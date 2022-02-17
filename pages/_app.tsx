import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Nav } from "@components/organism";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav
        logo={
          <Link href="/">
            <a className="font-bold">Jupio</a>
          </Link>
        }
        items={[
          {
            label: "About",
            href: "/about",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
