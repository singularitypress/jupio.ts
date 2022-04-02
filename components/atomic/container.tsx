import React, { FC } from "react";

interface IProps {
  className?: string;
}

export const Container: FC<IProps> = ({ children, className = "" }) => {
  return <div className={`container w-full ${className}`}>{children}</div>;
};
