import { Container } from "@components/atomic";
import Head from "next/head";
import React, { useState } from "react";

export default () => {
  const [colour, setColour] = useState("bg-yellow-300 dark:bg-yellow-300/25");
  return (
    <>
      <Head>
        <title>Individual Works</title>
      </Head>
      <div className="relative w-full min-h-screen">
        <Container className="h-full">
          <div className="grid grid-cols-2">
            <div></div>
            <div></div>
          </div>
        </Container>
        <div
          className={`absolute -z-10 right-0 top-0 h-full w-1/2 ${colour}`}
        ></div>
      </div>
    </>
  );
};
