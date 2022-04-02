import React, { FC } from "react";

interface IProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Header: FC<IProps> = ({ variant, className = "", children }) => {
  const headers = {
    h1: <h1 className={`text-6xl font-bold ${className}`}>{children}</h1>,
    h2: <h2 className={`text-5xl font-bold ${className}`}>{children}</h2>,
    h3: <h3 className={`text-4xl font-bold ${className}`}>{children}</h3>,
    h4: <h4 className={`text-3xl font-bold ${className}`}>{children}</h4>,
    h5: <h5 className={`text-2xl font-bold ${className}`}>{children}</h5>,
    h6: <h6 className={`text-xl font-bold ${className}`}>{children}</h6>,
  };

  return <>{headers[variant]}</>;
};
