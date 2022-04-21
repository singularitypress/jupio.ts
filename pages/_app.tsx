import type { AppProps } from "next/app";
import { Nav } from "@components/organism";
import Link from "next/link";

import "../styles/globals.scss";

export default ({ Component, pageProps }: AppProps) => {
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
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Our Work",
            href: "/our-work",
          },
          {
            label: "Contact Us",
            href: "mailto:hello@jaypandya.co",
            type: "button",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
};
