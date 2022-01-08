/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Footer from "../layout/Footer";
import about from "/public/assets/img/about.png";
export const config = {
  unstable_runtimeJS: false,
};

function AboutPage() {
  return (
    <>
      <section className='section pb-5'>
        <div className='container'>
          <div className='row mb-5 align-items-end'>
            <div className='col-md-6' data-aos='fade-up'>
              <h2>About Me</h2>
              <p className='mb-0'>Creative thinking never ends...</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5 ml-auto order-2' data-aos='fade-up'>
              <h3 className='h3 mb-4'>Creative thinking never ends...</h3>
              <p>
                Graduated with my Bachelor's in Information Technology with a
                concentration in Web Development. I also have a PMI CAPM
                (Certified Associate in Project Management) certification as
                well as CIW's JavaScript and eCommerce specialist and advanced
                HTML5/CSS3 certifications. While in school, I was the president
                of our tech club where we did projects using Unity, React JS,
                React Native and so much more. In 2019, me and my team were the
                winner's of Broward College's Hackathon. We built an Augmented
                Reality Gallery that brought to life the stories of women in
                technology using Magic Leap One (mixed reality lenses) See
                presentation. I have been developing websites and web apps for 3
                years now and recently started my own web development agency
                Clever Fox
              </p>
            </div>
            <div className='col-md-7 mb-5 mb-md-0' data-aos='fade-up'>
              <p>
                <Image
                  src={about}
                  alt='Image svg'
                  className='img-fluid'
                  width={500}
                  height={500}
                />
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
      <Footer />
      <a
        href='#'
        className='back-to-top d-flex align-items-center justify-content-center'>
        <i className='bi bi-arrow-up-short' />
      </a>
    </>
  );
}

export default AboutPage;
