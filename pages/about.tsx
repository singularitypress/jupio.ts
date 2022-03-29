import { Container, Header } from "@components/atomic";
import React, { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  const founders = [
    {
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQF_tt9oFddy5w/profile-displayphoto-shrink_800_800/0/1575602808814?e=1652918400&v=beta&t=lvBmUdw6Zrpj49xiHukd2M1SCOXUtbija-uxCRLJRSk",
      name: "Jay Pandya",
      socials: {
        linkedin: "https://linkedin.com/in/jaypandya",
        github: "https://github.com/singularityperss",
      },
    },
    // {
    //   img: "",
    //   name: "",
    //   companies: ["", ""],
    // },
    // {
    //   img: "",
    //   name: "",
    //   companies: ["", ""],
    // },
  ];

  return (
    <>
      <Head>
        <title>About Us</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
          integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="mt-24">
        <Container>
          <Header variant="h1" className="text-6x1 text-center mb-12">
            About Us
          </Header>
          <Header variant="h2" className="text-center mb-12">
            Founders
          </Header>
          <div className="grid grid-cols-4 gap-4">
            {founders.map(({ img, name, socials }) => (
              <div key={name} className="flex flex-col items-center">
                <img
                  src={img}
                  className="rounded-full obj*ect-cover w-48 h-48 grayscale mb-8"
                />
                <Header variant="h3" className="mb-8">
                  {name}
                </Header>
                {Object.keys(socials).map((icon) => (
                  <div key={icon} className="grid grid-cols-2 gap-4">
                    <i className={`fa-brands fa-${icon}`}></i>
                    <div>{socials[icon]}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
