import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const menue = [
  { title: "Home", path: "/", icon: "bi bi-house" },
  { title: "Work", path: "/view/Works", icon: "bi bi-pc-display-horizontal" },
  { title: "Code", path: "/view/Services", icon: "bi bi-pen" },
  { title: "About", path: "/view/About", icon: "bi bi-file-person-fill" },
  { title: "Contact", path: "/view/Contact", icon: "bi bi-person-lines-fill" },
];
function Header() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);

  const burger = isModal ? "burger active" : "burger";
  return (
    <>
      <nav className='navbar navbar-light custom-navbar'>
        <div className='container'>
          <div id='filters' className='filters'>
            {menue.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    id='link_menue'
                    className={` 
                         ${router.pathname === item.path ? "active" : null}
                          `}>
                    <span className='mobile'>
                      <i className={item.icon}></i>
                    </span>
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>
          <Link href='/'>
            <a className='navbar-brand'>
              <i className='bi bi-person-lines-fill'></i>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
