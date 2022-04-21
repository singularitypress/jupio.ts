import { Container, Header } from "@components/atomic";
import { PeopleCards } from "@components/organism";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

export default () => {
  const present = [
    {
      name: "Jay Pandya",
      type: "Founder",
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
      type: "Founder",
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
      type: "Founder",
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
      type: "Founder",
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
    {
      name: "Amy Pandya",
      type: "Intern/ Apprentice",
      title: "Intern",
      company: "Jupio Labs",
      linkedIn: "https://www.linkedin.com/in/amy-pandya-03282211b/",
      github: "https://github.com/amypands",
      email: "https://github.com/amypands",
      bio: (
        <>
          I'm a web developer based in Toronto and am looking to work with other
          teams to build high quality websites. I am highly interested in
          developing human centric design with a focus on accessibility and
          strong brand aesthetics. See more about me{" "}
          <Link href="https://amypandya.vercel.app/">
            <a className="border-b-2 border-dotted transition-all duration-500 border-theme-base dark:border-theme-accent hover:border-transparent hover:dark:border-transparent">
              here <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </Link>
          .
        </>
      ),
    },
  ];

  const past = [
    {
      name: "Julia Furman",
      type: "Alumn",
      title: "Software Engineer",
      company: "Paypal",
      linkedIn: "https://www.linkedin.com/in/juliafurman/",
      github: "https://github.com/yeul",
      bio: (
        <>
          I am always looking to expand my knowledge in the ever-evolving field
          of full stack web development. In addition, I am highly interested in
          the nexus of technology and security with its ever-increasing
          importance in today's international landscape, and it is my goal to
          expand my knowledge and experience in these fields.
        </>
      ),
    },
    {
      name: "Henrique Pinto",
      type: "Alumn",
      title: "Frontend Developer",
      company: "August",
      linkedIn: "https://www.linkedin.com/in/henrique-pinto-27617aa2/",
      email: "pintohenriqued@gmail.com",
      bio: (
        <>
          Reactjs/Nextjs/Gastbyjs/Node-Express Web Developer with computer
          science fundamentals background. Open to software development
          positions. Passion for music production, Data collection and related
          technologies.
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
      <Container className="pb-16 pt-32">
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
      <div className="bg-sky-300 dark:bg-blue-900 min-h-screen py-16">
        <Container>
          <Header variant="h2" className="mb-8">
            Currently
          </Header>
          <PeopleCards people={present} />

          <Header variant="h2" className="mb-8">
            Previously
          </Header>
          <PeopleCards people={past} />
        </Container>
      </div>
    </>
  );
};
