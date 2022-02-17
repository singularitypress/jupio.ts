import Link from "next/link";
import React from "react";
import { Container } from "@components/atomic";

interface IProps {
  logo: JSX.Element;
  items: {
    label: string;
    href: string;
  }[];
}

export const Nav = ({ logo, items }: IProps) => {
  const transition = "transition ease-in duration-200";

  return (
    <nav className="z-50 fixed flex justify-center py-5 px-4 xl:px-0 drop-shadow-lg backdrop-blur-md top-0 left-0 w-screen border-b bg-theme-accent/25 border-gray-300 dark:bg-theme-dp04/25 dark:border-theme-dp08">
      <Container>
        <div className="flex flex-row place-content-between">
          {logo}
          <ul>
            {items.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>
                  <a
                    className={`${transition} rounded-fill px-4 py-2 rounded-full font-bold border-2 bg-theme-base border-theme-base text-theme-accent hover:bg-transparent hover:text-theme-base dark:bg-theme-accent dark:border-theme-accent dark:text-theme-dp04 dark:hover:text-theme-accent`}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};
