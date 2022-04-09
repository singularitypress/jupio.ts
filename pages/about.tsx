import { Container, Header, Link } from "@components/atomic";
import { BusinessCard } from "@components/organism";
import { FOUNDERS } from "@content";
import React, { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Container className="mt-24">
        <div className="grid grid-cols-12 gap-6 w-full">
          {FOUNDERS.map(({ name, company: { title, company }, contact }) => (
            <BusinessCard
              name={name}
              title={title}
              company={company}
              contact={contact as any}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default About;
