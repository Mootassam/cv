import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

const Layouts: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <main id='main'>{children}</main>
      <Footer />
      <a
        href='#'
        className='back-to-top d-flex align-items-center justify-content-center'>
        <i className='bi bi-arrow-up-short' />
      </a>
    </>
  );
};

export default Layouts;
