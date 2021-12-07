import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
const menue = [
  { title: "Home", path: "/" },
  { title: "About Me", path: "/view/About" },
  { title: "Services", path: "/view/Services" },
  { title: "Works", path: "/view/Works" },
  { title: "Contact", path: "/view/Contact" },
];
function Header() {
  const router = useRouter();
  return (
    <>
      <div className='collapse navbar-collapse custom-navmenu' id='main-navbar'>
        <div className='container py-2 py-md-5'>
          <div className='row align-items-start'>
            <div className='col-md-2'>
              <ul className='custom-menu'>
                {menue.map((item, index) => {
                  return (
                    <>
                      <li
                        className={`
                         ${router.pathname === item.path ? "active" : null}
                          `}>
                        <Link key={index} href={item.path}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className='col-md-6 d-none d-md-block mr-auto'>
              <div className='tweet d-flex'>
                <span className='bi bi-twitter text-white mt-2 mr-3' />
                <div>
                  <p>
                    <em>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore. <br />
                      <a href='#'>t.co/v82jsk</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 d-none d-md-block'>
              <h3>Hire Me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiisexplicabo inventore.{" "}
                <br />
                <a href='#'>myemail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className='navbar navbar-light custom-navbar'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand' href='index.html'>
              MyPortfolio.
            </a>
          </Link>
          <a
            href='#'
            className='burger'
            data-bs-toggle='collapse'
            data-bs-target='#main-navbar'>
            <span />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
