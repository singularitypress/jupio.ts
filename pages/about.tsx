import { Container, Header, Link } from "@components/atomic";
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
        <Header variant="h2">Founders</Header>
        <hr className="h-0 border-t-4 border-t-theme-base dark:border-t-theme-accent w-1/2 mt-8 mb-8" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2">
          {FOUNDERS.map(({ name, company: { title, company }, contact }) => (
            <li>
              <Header variant="h3">{name}</Header>
              <p>
                {title} - <em>{company}</em>
              </p>
              <hr className="h-0 border-t-2 border-t-theme-base dark:border-t-theme-accent w-3/4 mt-4 mb-4" />
              <ul>
                {Object.keys(contact).map((key) => (
                  <li>
                    &gt;{" "}
                    <Link
                      external={key !== "Email"}
                      href={(contact as any)[key]}
                    >
                      {key}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default About;
