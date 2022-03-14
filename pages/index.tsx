import React, { NextPage } from "next";
import { Button, Header } from "@components/atomic";
import { ImageHero, VideoHero } from "@components/organism";

const Home: NextPage = () => {
  const headingText = "Jupio Labs";
  const bodyText =
    "Unlocking the potential of our clients, open source, and our staff.";

  const img = {
    light: "bg-[url('https://i.imgur.com/csNmS00.png')]",
    dark: "dark:bg-[url('https://i.imgur.com/OAuHSVR.png')]",
  };

  const vid = {
    light: "https://i.imgur.com/E05jikg.mp4",
    dark: "https://i.imgur.com/Oa5nSox.mp4",
  };

  return (
    <VideoHero bg={vid.light} darkBg={vid.dark} blur>
      <div className="z-30 h-full flex flex-col justify-center top-auto mt-auto items-center">
        <Header variant="h1" className="text-8xl">
          {headingText}
        </Header>
        <p className="mb-8 mt-8 text-2xl">{bodyText}</p>
        <Button element="link" href="/work">
          Our Work
        </Button>
      </div>
    </VideoHero>
  );
};

export default Home;
