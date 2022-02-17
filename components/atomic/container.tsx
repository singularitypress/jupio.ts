import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Container = ({ children }: IProps) => {
  return <div className="container">{children}</div>;
};
