import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const menue = [
  { title: "Home", path: "/" },
  { title: "Skills", path: "/view/Services" },
  { title: "Work", path: "/view/Works" },
  { title: "Code", path: "/view/Services" },
  { title: "About", path: "/view/About" },
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
            <a className='navbar-brand'>MyPortfolio.</a>
          </Link>
          <div id='filters' className='filters'>
            {menue.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={` 
                         ${router.pathname === item.path ? "active" : null}
                          `}>
                    <span className='mobile'>
                      <i className='bi bi-binoculars'></i>
                    </span>
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
