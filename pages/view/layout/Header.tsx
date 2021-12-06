import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className='collapse navbar-collapse custom-navmenu' id='main-navbar'>
        <div className='container py-2 py-md-5'>
          <div className='row align-items-start'>
            <div className='col-md-2'>
              <ul className='custom-menu'>
                <li className='active'>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href='/view/About/AboutPage'>About Me</Link>
                </li>
                <li>
                  <Link href='/view/Services/ServicesPage'>Services</Link>
                </li>
                <li>
                  <Link href='/view/Works/WorksPage'>Works</Link>
                </li>
                <li>
                  <Link href='/view/Contact/ContactPage'>Contact</Link>
                </li>
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
          <a className='navbar-brand' href='index.html'>
            MyPortfolio.
          </a>
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
