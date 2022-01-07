import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
const menue = [
  { title: "About", path: "/" },
  { title: "Experience", path: "/view/About" },
  { title: "Skills", path: "/view/Services" },
  { title: "Projects", path: "/view/Works" },
  { title: "Contact", path: "/view/Contact" },
];
function Header() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);

  const burger = isModal ? "burger active" : "burger";
  return (
    <>
      <nav className='navbar navbar-light custom-navbar'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand' href='index.html'>
              MyPortfolio.
            </a>
          </Link>
          <div id='filters' className='filters'>
            {menue.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={` 
                         ${router.pathname === item.path ? "active" : null}
                          `}>
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>

          <a
            href='#'
            className={burger}
            data-bs-toggle='collapse'
            data-bs-target='#main-navbar'
            onClick={() => {
              setIsModal(!isModal);
            }}>
            <span />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
