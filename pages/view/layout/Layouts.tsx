import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

const Layouts: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <main id='main'>{children}</main>
    </>
  );
};

export default Layouts;
