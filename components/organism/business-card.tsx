import { Header, Link } from "@components/atomic";
import React, { FC } from "react";

interface IProps {
  name: string;
  title: string;
  company: string;
  contact: {
    [key: string]: string;
  };
}

export const BusinessCard: FC<IProps> = ({ name, title, company, contact }) => {
  return (
    <div key={name} className="flex flex-col items-center col-span-4">
      <div className="bg-gradient-to-br from-indigo-500 to-sky-500 w-full h-64 z-10 rounded-3xl relative overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        <div className="absolute bottom-0 right-0 bg-theme-accent bg-opacity-50 dark:bg-theme-base dark:bg-opacity-50 h-full w-4/5 rounded-tl-full rounded-br-3xl">
          <div className="bottom-8 right-0 mr-8 absolute">
            <Header variant="h3" className="mb-4">
              {name}
            </Header>
            <p className="mb-2">
              {title} - <em>{company}</em>
            </p>
            <ul className="flex">
              {Object.keys(contact).map((key) => (
                <li key={key} className="mr-4">
                  <Link
                    external={!!(key === "LinkedIn" || key === "Github")}
                    email={!!(key === "Email")}
                    href={(contact as any)[key]}
                  >
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
