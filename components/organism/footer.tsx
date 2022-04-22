import { Container } from "@components/atomic";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="py-16">
      <Container className="flex flex-col justify-center items-center">
        <p>
          <small>Made with ❤️ by Jupio Labs</small>
        </p>
        <p>
          <small>2022</small>
        </p>
      </Container>
    </footer>
  );
};
