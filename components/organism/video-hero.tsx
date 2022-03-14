import React, { useRef } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  bg: string;
  darkBg: string;
  blur?: boolean;
  overlay?: boolean;
}

export const VideoHero = ({
  children,
  bg,
  darkBg,
  blur = true,
  overlay = true,
}: IProps) => {
  const lightVideo = useRef<HTMLVideoElement>(null);
  const darkVideo = useRef<HTMLVideoElement>(null);

  const opacity = overlay ? "bg-opacity-20 dark:bg-opacity-30" : "";
  const overlayClasses = overlay ? "bg-theme-accent dark:bg-theme-base" : "";
  const blurClasses = blur ? "backdrop-blur-md" : "";

  return (
    <div className="w-screen h-screen bg-cover relative overflow-hidden">
      <div className="absolute z-20 w-full h-full flex justify-center px-4 xl:px-0">
        <div className="container">{children}</div>
      </div>
      <div
        className={`absolute flex flex-col justify-center h-full z-10 items-start w-full ${blurClasses} ${overlayClasses} ${opacity}`}
      ></div>
      <video
        ref={lightVideo}
        className="max-hd:h-screen max-hd:max-w-none min-hd:w-screen dark:hidden"
        src={bg}
        autoPlay
        loop
        muted
      />
      <video
        ref={darkVideo}
        className="max-hd:h-screen max-hd:max-w-none min-hd:w-screen hidden dark:block"
        src={darkBg}
        autoPlay
        loop
        muted
      />
    </div>
  );
};
