import React, { NextPage } from "next";
import { Button, Header } from "@components/atomic";
import { ImageHero, VideoHero } from "@components/organism";

const Home: NextPage = () => {
  const headingText = "Jupio Labs";
  const bodyText = "Building the future";

  const img = {
    light: "bg-[url('https://i.imgur.com/csNmS00.png')]",
    dark: "dark:bg-[url('https://i.imgur.com/OAuHSVR.png')]",
  };

  const vid = {
    light: "https://i.imgur.com/atGceeC.mp4",
    dark: "https://i.imgur.com/MM6JC3U.mp4",
  };

  return (
    <VideoHero bg={vid.light} darkBg={vid.dark}>
      <div className="z-30 absolute h-full flex flex-col top-36 -mt-4 lg:justify-center lg:top-auto lg:mt-auto">
        <Header variant="h1" className="mb-4">
          {headingText}
        </Header>
        <p className="mb-8">{bodyText}</p>
        <Button element="link" href="/work">
          Our Work
        </Button>
      </div>
      <div className="absolute w-full h-full top-0 left-0 flex">
        <div className="w-full h-1/2 lg:w-1/3 lg:h-full bg-theme-accent dark:bg-theme-base z-20"></div>
        <svg
          className="hidden lg:block h-full w-48 transform -translate-x-1/2 fill-theme-accent dark:fill-theme-base drop-shadow-xl"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </VideoHero>
  );
};

export default Home;
