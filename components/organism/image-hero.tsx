import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  bg?: string;
  darkBg?: string;
  overlay?: boolean;
  blur?: boolean;
}

export const ImageHero = ({
  children,
  bg = "",
  darkBg = "",
  overlay = true,
  blur = true,
}: IProps) => {
  const opacity = overlay ? "bg-opacity-30 dark:bg-opacity-40" : "";
  const overlayClasses = overlay ? "bg-theme-accent dark:bg-theme-base" : "";
  const blurClasses = blur ? "backdrop-blur-md" : "";
  return (
    <div className="w-screen h-screen bg-cover relative">
      <div className="absolute z-20 w-full h-full flex justify-center px-4 xl:px-0">
        <div className="container">{children}</div>
      </div>
      <div
        className={`absolute flex flex-col justify-center h-full z-10 items-start w-full ${blurClasses} ${overlayClasses} ${opacity}`}
      ></div>
      <div className={`${bg} ${darkBg} w-full h-full absolute bg-cover`}></div>
    </div>
  );
};
