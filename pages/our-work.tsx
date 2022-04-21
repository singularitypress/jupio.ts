import { Container, Header } from "@components/atomic";
import Head from "next/head";
import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Array.prototype.slice
        .call(document.querySelectorAll(".load"))
        .forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove("opacity-0");
            item.classList.remove("-translate-y-10");
          }, 250 * (index + 1));
        });
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
            <div className="load transition-all -translate-y-10 opacity-0 duration-500 mb-8 md:mb-0 md:text-right md:border-t-2 border-theme-base dark:border-theme-accent pt-8">
              <Header variant="h4">Jupio Labs</Header>
            </div>
            <div className="load transition-all -translate-y-10 opacity-0 duration-500 md:border-t-2 border-theme-base dark:border-theme-accent md:pt-8">
              <Header variant="h4" className="mb-4">
                Voxel Builds
              </Header>
              <p className="mb-8">
                Voxel Builds is a full-service custom construction and
                renovation company for your home. Whether it is new home
                construction, kitchen renovation, basement finishing, or deck
                building. We built Voxel Builds a website to empower them to
                connect with clients to allow them to offer exceptional services
                at competitive prices.
              </p>
              <Header variant="h4" className="mb-4">
                Sigma metals
              </Header>
              <p className="mb-8">
                Brampton-based sheet metal fabricator and manufacturer, Sigma
                Metals, wanted a simple yet striking website that would allow
                them to update the content themselves. Their new website
                features a responsive design so it looks good on any size screen
                and uses e-commerce tools to make their product catalogue easily
                browsable and searchable.
              </p>
              <Header variant="h4" className="mb-4">
                Linda Jeffrey for Mayor
              </Header>
              <p className="mb-8">
                We created a simple, clean and bold site to maximize the
                efficiency and effectiveness of performance and engagement for
                Linda Jeffrey's campaign for re-election to Brampton mayorship.
                Website development included comprehensive guide to her
                positions on important issues, recent statements and events,
                blog updates and integrated social media content.
              </p>
              <Header variant="h4" className="mb-4">
                York Logic
              </Header>
              <p className="mb-8">
                Leveraging NextJS, React, TypeScript, and the skills of our
                brilliant interns/apprentices, we are designing and building a
                website to empower York Logic; a technology consultancy with
                Google Cloud expertise, who will help you architect powerful and
                disruptive applications in faster, better, and smarter ways.
              </p>
            </div>
          </div>
        </Container>
        <div className="absolute h-full w-full md:w-1/2 right-0 top-0 -z-10 bg-red-300 dark:bg-red-900/50"></div>
      </div>
    </>
  );
};
