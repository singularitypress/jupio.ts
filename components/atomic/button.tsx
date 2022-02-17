import Link from "next/link";
import React, { MouseEvent, useState } from "react";

interface IProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  className?: string;
  href?: string;
  children: JSX.Element | JSX.Element[] | string;
  element: "button" | "link";
  type?: "primary" | "secondary";
}

export const Button = ({
  onClick,
  className = "",
  href = "",
  children,
  element,
}: IProps) => {
  const transition = "transition ease-in duration-200";

  const elements = {
    link: (
      <Link href={href}>
        <a
          className={`${className} ${transition} w-fit px-6 py-3 rounded-xl font-bold bg-sky-500 text-theme-accent hover:bg-indigo-500`}
        >
          {children}
        </a>
      </Link>
    ),
    button: (
      <button
        className={`${className} ${transition} px-6 py-3 rounded-xl font-bold bg-sky-500 text-theme-accent hover:bg-indigo-500`}
        onClick={onClick}
      >
        {children}
      </button>
    ),
  };

  return <>{elements[element]}</>;
};