import type { AppProps } from "next/app";
import { Footer, Nav } from "@components/organism";

import "../styles/globals.scss";
import { useEffect, useState } from "react";

export default ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("theme" in localStorage) {
        setTheme(`${localStorage.getItem("theme")}`);
      } else {
        const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        localStorage.setItem("theme", defaultTheme);
        setTheme(defaultTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme) {
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;
      }
    }
  }, [theme]);

  return (
    <>
      <Nav
        logo="Jupio"
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
        theme={theme}
        setTheme={setTheme}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
