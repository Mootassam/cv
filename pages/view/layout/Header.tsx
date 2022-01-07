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
          <nav
            className='navbar navbar-expand-lg ftco_navbar ftco-navbar-light'
            id='ftco-navbar'>
            <div
              className='navbar-collapse collapse show'
              id='ftco-nav'
              style={{}}>
              <ul className='navbar-nav ml-auto mr-md-3'>
                {menue.map((item, index) => {
                  return (
                    <>
                      <li
                        className={`nav-item 
                         ${router.pathname === item.path ? "active" : null}
                          `}>
                        <Link key={index} href={item.path}>
                          <a className='nav-link'>{item.title}</a>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </nav>

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
