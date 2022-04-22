import { Container, Header } from "@components/atomic";
import { PeopleCards } from "@components/organism";
import { PEOPLE_PAST, PEOPLE_PRESENT } from "@content";
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
        <title>About Us</title>
      </Head>
      <Container className="pb-16 pt-32 load transition-all -translate-y-10 opacity-0 duration-500">
        <Header variant="h1" className="mb-8">
          About Us
        </Header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
          <p>
            We're a Toronto-based web development and design agency with members
            from across Canada and the United States. Our team is comprised of
            people who love to win and find creative solutions to challenges. We
            ❤️ challenges. Every day, we're helping clients build online
            businesses and brands that are best of themselves.
          </p>
        </div>
      </Container>
      <div className="bg-sky-300 dark:bg-blue-900/50 min-h-screen py-16">
        <Container>
          <Header
            variant="h2"
            className="mb-8 load transition-all -translate-y-10 opacity-0 duration-500"
          >
            Currently
          </Header>
          <PeopleCards people={PEOPLE_PRESENT} />

          <Header
            variant="h2"
            className="mb-8 load transition-all -translate-y-10 opacity-0 duration-500"
          >
            Previously
          </Header>
          <PeopleCards people={PEOPLE_PAST} />
        </Container>
      </div>
    </>
  );
};
