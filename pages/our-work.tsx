import { Container, Header } from "@components/atomic";
import { WORK_HISTORY } from "@content";
import { sequentialFadeIn } from "@util";
import Head from "next/head";
import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    sequentialFadeIn("load");
  }, []);

  return (
    <>
      <Head>
        <title>Our Work</title>
      </Head>
      <div className="relative min-h-screen">
        <Container className="pt-32 pb-16 lg:px-32">
          <div className="load transition-all -translate-y-10 opacity-0 duration-500 grid grid-cols-1 md:grid-cols-2 md:gap-32">
            <div className="md:text-right">
              <Header variant="h1" className="mb-8">
                Our Work
              </Header>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32">
            <div className="load transition-all -translate-y-10 opacity-0 duration-500 mb-8 md:mb-0 md:text-right md:border-t-2 border-theme-base dark:border-theme-accent pt-8">
              <Header variant="h4">Jupio Labs</Header>
            </div>
            <div className="load transition-all -translate-y-10 opacity-0 duration-500 md:border-t-2 border-theme-base dark:border-theme-accent md:pt-8">
              {WORK_HISTORY.map((item) => (
                <>
                  <Header variant="h4" className="mb-4">
                    {item.header}
                  </Header>
                  <p className="mb-8">{item.description}</p>
                </>
              ))}
            </div>
          </div>
        </Container>
        <div className="absolute h-full w-full md:w-1/2 right-0 top-0 -z-10 bg-red-300 dark:bg-red-900/50"></div>
      </div>
    </>
  );
};
