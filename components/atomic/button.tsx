import Link from "next/link";
import React, { FC, MouseEvent } from "react";

interface IProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  className?: string;
  href?: string;
  element: "button" | "link";
  type?: "primary" | "secondary";
}

export const Button: FC<IProps> = ({
  onClick,
  className = "",
  href = "",
  children,
  element,
}) => {
  const transition = "transition ease-in duration-200";

  const elements = {
    link: (
      <Link href={href}>
        <a
          className={`${className} ${transition} w-fit px-6 py-3 rounded-full font-bold bg-sky-500 text-theme-accent hover:bg-indigo-500`}
        >
          {children}
        </a>
      </Link>
    ),
    button: (
      <button
        className={`${className} ${transition} px-6 py-3 rounded-full font-bold bg-sky-500 text-theme-accent hover:bg-indigo-500`}
        onClick={onClick}
      >
        {children}
      </button>
    ),
  };

  return <>{elements[element]}</>;
};
