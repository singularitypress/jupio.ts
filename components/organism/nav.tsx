import Link from "next/link";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Container } from "@components/atomic";

interface IProps {
  logo: ReactNode;
  items: {
    label: string;
    href: string;
    type?: "button" | "link";
  }[];
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const Nav = ({ logo, items, theme, setTheme }: IProps) => {
  const [open, setOpen] = useState(false);

  const transition = "transition ease-in duration-200";

  const closeIcon = <i className="fa-solid fa-xmark text-2xl"></i>;
  const openIcon = <i className="fa-solid fa-bars"></i>;

  return (
    <>
      <button
        className="flex justify-center items-center fixed right-4 top-4 z-50 w-12 h-12 rounded-full bg-theme-base dark:bg-theme-accent text-theme-accent dark:text-theme-base md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? closeIcon : openIcon}
      </button>
      <nav
        className={`z-40 transition-all duration-500 md:transition-none ${
          open ? "-translate-y-0" : "-translate-y-full"
        } md:translate-y-0 h-screen md:h-auto fixed flex justify-center py-5 px-4 xl:px-0 top-0 left-0 w-screen bg-theme-accent dark:bg-theme-base`}
      >
        <Container>
          <div className="flex flex-col md:flex-row h-full justify-center md:place-content-between">
            <Link href="/">
              <a className="font-bold" onClick={() => setOpen(false)}>
                {logo}
              </a>
            </Link>
            <ul className="flex flex-col md:flex-row place-content-between mt-8 md:mt-0">
              {items.map(({ label, href, type = "link" }) => (
                <li key={href} className="mb-8 md:mb-0">
                  {type === "link" ? (
                    <Link href={href}>
                      <a
                        className={`${transition} hover:border-b-2 border-b-transparent hover:border-b-theme-base dark:hover:border-b-theme-accent md:ml-8 font-bold`}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </a>
                    </Link>
                  ) : (
                    <Link href={href}>
                      <a
                        className={`${transition} md:ml-8 rounded-fill px-4 py-2 rounded-full font-bold border-2 bg-theme-base border-theme-base text-theme-accent hover:bg-transparent hover:text-theme-base dark:bg-theme-accent dark:border-theme-accent dark:text-theme-base dark:hover:bg-theme-base dark:hover:text-theme-accent`}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  className="md:ml-8 cursor-pointer"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                >
                  {theme === "dark" ? (
                    <i className="fa-solid fa-moon text-lg"></i>
                  ) : (
                    <i className="fa-solid fa-sun text-lg"></i>
                  )}
                  {/* <span className="sr-only">{theme} mode, click to switch</span> */}
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};
