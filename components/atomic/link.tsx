import React, { FC } from "react";

interface IProps {
  href: string;
  external?: boolean;
  email?: boolean;
}

export const Link: FC<IProps> = ({ children, href, external, email }) => {
  const renderExternal = external && (
    <i className="fa-solid fa-arrow-up-right-from-square"></i>
  );
  return (
    <a
      target={external ? "_blank" : undefined}
      href={`${email ? "mailto:" : ""}${href}`}
      className="hover:border-dotted hover:border-b-theme-base hover:dark:border-b-theme-accent hover:border-b-2"
    >
      {children} {renderExternal}
    </a>
  );
};
