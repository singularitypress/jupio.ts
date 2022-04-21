import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IProps {
  people: {
    name: string;
    type: string;
    title: string;
    company: string;
    bio: ReactNode;
    github?: string;
    email?: string;
    linkedIn?: string;
  }[];
}

export const PeopleCards: FC<IProps> = ({ people }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-16 mb-24">
      {people.map(
        ({ name, type, title, company, bio, github, email, linkedIn }) => (
          <div className="card mb-16 md:mb-0 flex flex-col justify-between transition-all -translate-y-10 opacity-0 duration-500">
            <div>
              <p className="mb-4">
                <strong className="text-2xl">{name}</strong>
                <br />
                <strong>{type}</strong>
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
                    className="mr-4 hover:text-theme-accent dark:hover:text-theme-base"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span className="sr-only">{name} github</span>
                  </a>
                </Link>
              )}
              {linkedIn && (
                <Link href={linkedIn}>
                  <a
                    className="mr-4 hover:text-theme-accent dark:hover:text-theme-base"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                    <span className="sr-only">{name} linkedin</span>
                  </a>
                </Link>
              )}
              {email && (
                <Link href={`${email}`}>
                  <a
                    className="mr-4 hover:text-theme-accent dark:hover:text-theme-base"
                    target="_blank"
                    rel="norefferer noopener"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <span className="sr-only">{name} email</span>
                  </a>
                </Link>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
};
