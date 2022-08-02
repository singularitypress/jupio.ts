import { Container, Header } from "@components/atomic";
import Head from "next/head";
import React from "react";

export default () => {
  return (
    <>
      <Head>
        <title>Individual Work</title>
      </Head>
      <div className="w-full min-h-screen pt-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Header variant="h1">
              <span className="lg:text-9xl">Individual Works</span>
            </Header>
          </div>
        </Container>
      </div>
    </>
  );
};
