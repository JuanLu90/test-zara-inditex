// components/loader/loader.component.tsx
import React from "react";
import { NoResultWrapper } from "./no-results.styled";

const Loader: React.FC = () => {
  return <NoResultWrapper>No results found</NoResultWrapper>;
};

export default Loader;
