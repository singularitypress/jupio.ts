import { Container, Header } from "@components/atomic";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

export default () => {
  const founders = [
    {
      name: "Jay Pandya",
      title: "Senior Software Engineer",
      company: "Amazon",
      linkedIn: "https://linkedin.com/in/jaypandya",
      github: "https://github.com/singularitypress",
      email: "hello@jaypandya.co",
      bio: (
        <>
          I'm a senior front-end engineer with experience building web
          applications and tools with React, TypeScript, Node.JS alongside UI
          and UX teams at <strong>Scotiabank</strong>, and leading them at
          <strong> Amazon</strong>. I have a passion for making clean, elegant
          software that is both highly usable and performant.
        </>
      ),
    },
    {
      name: "Herlander Pinto",
      title: "Senior Software Developer",
      company: "Shopify",
      linkedIn: "https://www.linkedin.com/in/hdpinto",
      email: "hdpinto@outlook.com",
      bio: (
        <>
          I'm a full stack developer working with technologies from across
          different paradigms of web development: Microsoft/.Net and C#, Go,
          JavaScript, React.js, and Node.js. I'm flexible and love a challenge,
          and often mix and match different technologies because of system
          limitations or project requirements to achieve the best possible
          result.
        </>
      ),
    },
    {
      name: "Sushil Tailor",
      title: "Senior Software Engineer",
      company: "Microsoft",
      linkedIn: "https://www.linkedin.com/in/sushil-tailor",
      github: "https://github.com/sashimii",
      email: "sushil.tailor@gmail.com",
      bio: (
        <>
          I'm a Senior-level Full Stack Developer specializing in front end
          development, solutioning, people management, &amp; optimizing software
          delivery processes
        </>
      ),
    },
    {
      name: "Kassim Wais",
      title: "Project Manager",
      company: "Ubisoft",
      linkedIn: "https://www.linkedin.com/in/kassim-wais-b5135125/",
      github: "https://github.com/kassimwais",
      email: "waiskassim@gmail.com",
      bio: (
        <>
          Result-orientated project manager with more than 8 years of experience
          covering project and product management including developing,
          implementing, and supporting complex infrastructures for fast growing
          organizations with teams from 10 to 50 members per project. A fast and
          eager learner, I am detail oriented and adapt to changing project
          requirements quickly to meet business goals.
        </>
      ),
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      Array.prototype.slice
        .call(document.querySelectorAll(".card"))
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
        <title>About Us</title>
      </Head>
      <div className="bg-sky-300 dark:bg-blue-900 w-screen min-h-screen py-24">
        <Container>
          <Header variant="h1">About Us</Header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
            <p className="my-8">
              We're a Toronto-based web development and design agency with
              members from across Canada and the United States. Our team is
              comprised of people who love to win and find creative solutions to
              challenges. We ❤️ challenges. Every day, we're helping clients
              build online businesses and brands that are best of themselves.
            </p>
          </div>
          <Header variant="h2" className="mb-8">
            Founders
          </Header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
            {founders.map(
              ({ name, title, company, bio, github, email, linkedIn }) => (
                <div className="card bg-theme-accent dark:bg-theme-base p-8 flex flex-col justify-between transition-all -translate-y-10 opacity-0 duration-500">
                  <div>
                    <p className="mb-4 text-2xl">
                      <strong>{name}</strong>
                    </p>
                    <p className="mb-4">
                      <em>{title}</em> @ {company}
                    </p>
                    <p className="mb-4">{bio}</p>
                  </div>
                  <div className="text-2xl">
                    {github && (
                      <Link href={github}>
                        <a
                          className="mr-4"
                          target="_blank"
                          rel="norefferer noopener"
                        >
                          <i className="fa-brands fa-github"></i>
                          <span className="sr-only">{name} github</span>
                        </a>
                      </Link>
                    )}
                    <Link href={linkedIn}>
                      <a
                        className="mr-4"
                        target="_blank"
                        rel="norefferer noopener"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                        <span className="sr-only">{name} linkedin</span>
                      </a>
                    </Link>
                    <Link href={`${email}`}>
                      <a
                        className="mr-4"
                        target="_blank"
                        rel="norefferer noopener"
                      >
                        <i className="fa-solid fa-envelope"></i>
                        <span className="sr-only">{name} email</span>
                      </a>
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
