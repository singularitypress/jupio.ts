import React, { NextPage } from "next";
import { Container, Header } from "@components/atomic";
import Head from "next/head";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".home__heading")?.classList.remove("opacity-0");
      document
        .querySelector(".home__heading")
        ?.classList.remove("-translate-y-10");
    }, 500);

    setTimeout(() => {
      document.querySelector(".home__content")?.classList.remove("opacity-0");
      document
        .querySelector(".home__content")
        ?.classList.remove("-translate-y-10");
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="relative h-screen w-screen flex flex-col justify-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex items-center mb-8 md:mb-0">
              <Header
                variant="h1"
                className="home__heading transition-all -translate-y-10 opacity-0 duration-500 lg:text-9xl"
              >
                Jupio Labs
              </Header>
            </div>
            <div className="home__content md:pl-16 flex items-center transition-all -translate-y-10 opacity-0 duration-500">
              We are political nerds. We are media geeks. We are storytellers
              who believe information should be free, accessible, and easy to
              understand. Our experience in politics, web development and design
              means you'll find both our expertise and enthusiasm for what we do
              refreshing (and occasionally a little quirky).
            </div>
          </div>
        </Container>
        <div className="absolute h-screen w-screen md:w-1/2 bg-green-500 dark:bg-green-900 -z-10"></div>
      </div>
    </>
  );
};

export default Home;
