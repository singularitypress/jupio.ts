import React, { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import { sequentialFadeIn } from "@util";
import { Container, Header } from "@components/atomic";

const Home: NextPage = () => {
  useEffect(() => {
    sequentialFadeIn("load");
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="relative h-screen w-full flex flex-col justify-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex items-center mb-8 md:mb-0">
              <Header
                variant="h1"
                className="load transition-all -translate-y-10 opacity-0 duration-500 lg:text-9xl"
              >
                Jupio Labs
              </Header>
            </div>
            <div className="load md:pl-16 flex items-center transition-all -translate-y-10 opacity-0 duration-500">
              <p>
                We are political nerds. We are media geeks. We are storytellers
                who believe information should be free, accessible, and easy to
                understand. Our experience in politics, web development and
                design means you'll find both our expertise and enthusiasm for
                what we do refreshing (and occasionally a little quirky).{" "}
                <Link href="/about-us">
                  <a className="border-b-2 border-dotted transition-all duration-500 border-theme-base dark:border-theme-accent hover:border-transparent hover:dark:border-transparent">
                    <strong>
                      Learn more about us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </strong>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </Container>
        <div className="absolute h-screen w-screen md:w-1/2 bg-green-500 dark:bg-green-900/50 -z-10"></div>
      </div>
    </>
  );
};

export default Home;
