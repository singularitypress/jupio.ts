import React, { FC } from "react";

interface IProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  size?: string;
}

export const Header: FC<IProps> = ({
  variant,
  className = "",
  size,
  children,
}) => {
  const headers = {
    h1: (
      <h1 className={`${size ?? "text-6xl"} font-bold ${className}`}>
        {children}
      </h1>
    ),
    h2: (
      <h2 className={`${size ?? "text-5xl"} font-bold ${className}`}>
        {children}
      </h2>
    ),
    h3: (
      <h3 className={`${size ?? "text-4xl"} font-bold ${className}`}>
        {children}
      </h3>
    ),
    h4: (
      <h4 className={`${size ?? "text-3xl"} font-bold ${className}`}>
        {children}
      </h4>
    ),
    h5: (
      <h5 className={`${size ?? "text-2xl"} font-bold ${className}`}>
        {children}
      </h5>
    ),
    h6: (
      <h6 className={`${size ?? "text-xl"} font-bold ${className}`}>
        {children}
      </h6>
    ),
  };

  return <>{headers[variant]}</>;
};
