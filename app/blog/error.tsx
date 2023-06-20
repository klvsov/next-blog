"use client";

import { FC } from "react";

interface ErrorProps {
  error: Error;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return <h1>Oops! Something went wrong: {error.message}</h1>;
};

export default Error;
