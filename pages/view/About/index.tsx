/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Nodejs from "../../../assets/svg/nodejs-icon-logo-svgrepo-com.svg";
export const config = {
  unstable_runtimeJS: false,
};

function AboutPage() {
  return (
    <section className='section pb-5'>
      <div className='container'>
        <div className='row mb-5 align-items-end'>
          <div className='col-md-6' data-aos='fade-up'>
            <h2>About Me</h2>
            <p className='mb-0'>
              Coding ninja that swiftly dispatches bugs and develops beautiful
              code.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 ml-auto order-2' data-aos='fade-up'>
            <h3 className='h3 mb-4'>Skills</h3>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>TypeScript/JavaScript</strong>
                  <span className='ml-auto'>80%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>ReactJs</strong>
                  <span className='ml-auto'>96%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "96%" }}
                    aria-valuenow={96}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>HTML5/CSS3</strong>
                  <span className='ml-auto'>99%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "99%" }}
                    aria-valuenow={99}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>React-Native</strong>
                  <span className='ml-auto'>87%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "87%" }}
                    aria-valuenow={87}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>NodeJs</strong>
                  <span className='ml-auto'>85%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
              <li className='mb-3'>
                <div className='d-flex mb-1'>
                  <strong>Mongodb</strong>
                  <span className='ml-auto'>88%</span>
                </div>
                <div className='progress custom-progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: "88%" }}
                    aria-valuenow={88}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className='col-md-7 mb-5 mb-md-0' data-aos='fade-up'>
            <p>
              <Image
                src={Nodejs}
                alt='Image svg'
                className='img-fluid'
                width={500}
                height={500}
              />
            </p>
            <p>
              A Full Stack Developer with 1+ year of hands-on experience
              designing, developing, and implementing applications and solutions
              using Reactjs, react-native,Mongodb ,Nodejs . Seeking a
              challenging role as a Full-Stack Developer where I can apply my
              broad development experience and hands-on technical expertise.
            </p>

            <p>
              <a href='#' className='readmore'>
                Download my CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
