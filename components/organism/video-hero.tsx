import React, { useEffect, useRef } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  bg: string;
  darkBg: string;
  blur?: boolean;
}

export const VideoHero = ({ children, bg, darkBg, blur = true }: IProps) => {
  const blurOverlay = blur ? (
    <div className="w-screen h-screen backdrop-blur-md absolute top-0 left-0"></div>
  ) : (
    <></>
  );
  return (
    <div className="w-screen h-screen bg-cover relative overflow-hidden">
      <div className="absolute z-20 w-full h-full flex justify-center px-4 xl:px-0">
        <div className="container">{children}</div>
      </div>
      {blurOverlay}
      <video
        className="w-screen dark:hidden"
        src={bg}
        autoPlay={true}
        loop={true}
      />
      <video
        className="w-screen hidden dark:block"
        src={darkBg}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};
