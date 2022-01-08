import type { NextPage } from "next";
import Image from "next/image";
import Nodejs from "/assets/img/about.png";
import Web from "/assets/img/web_developement.png";
import Mobile from "/assets/img/mobile_developement.png";
import base from "/assets/img/data_base.png";

export const config = {
  unstable_runtimeJS: false,
};
const Home: NextPage = () => {
  return (
    <>
      <section className='section pb-5'>
        <div className='home'>
          <div className='row'>
            <div className='col-md-12' data-aos='fade-up'>
              <h1>Creativity meets Technology</h1>
              <p className='mb-5'>
                I like making fun, interactive things with code. I also talk &
                write about those things.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='section pb-5'>
        <div className='container'>
          <div className='row mb-5 align-items-end'>
            <div className='col-md-6' data-aos='fade-up'>
              <h3 className='h3 mb-4'>About</h3>
              <h2 className='heading-11'>Creative thinking never ends...</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 ml-auto ' data-aos='fade-up'>
              <Image src={Nodejs} alt='Image svg' className='img-about' />
            </div>
            <div className='col-md-6 mb-5 mb-md-0' data-aos='fade-up'>
              <p>
                Graduated with my Bachelor's in Information Technology with a
                concentration in Web Development. I also have a PMI CAPM
                (Certified Associate in Project Management) certification as
                well as CIW's JavaScript and eCommerce specialist and advanced
                HTML5/CSS3 certifications.
              </p>
              <p>
                While in school, I was the president of our tech club where we
                did projects using Unity, React JS, React Native and so much
                more. In 2019, me and my team were the winner's of Broward
                College's Hackathon. We built an Augmented Reality Gallery that
                brought to life the stories of women in technology using Magic
                Leap One (mixed reality lenses) See presentation.
              </p>
              <p>
                I have been developing websites and web apps for 3 years now and
                recently started my own web development agency Clever Fox
              </p>
              <p>
                <a className='readmore'>More About ME</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='help'>
        <div className='container'>
          <div className='header-content'>
            <div className='content-inner'>
              <div className='overhead small-caps-text'>Skills</div>
              <h2 className='heading-11'>Ways that I can help</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-12 col-sm-4 col-md-4 col-lg-4 mb-5'
              data-aos='fade-up'
              data-aos-delay>
              <Image src={Web} alt='Image svg' className='img-about' />

              <div className='service-info'>
                <h4 className='small-title'>Web Developement</h4>
                <div className='text-block-3'>
                  Logo design, Brand guidelines, Social Media Graphics, Business
                  cards design.
                </div>
              </div>
            </div>
            <div
              className='col-12 col-sm-4 col-md-4 col-lg-4 mb-4'
              data-aos='fade-up'
              data-aos-delay={100}>
              <Image src={Mobile} alt='Image svg' className='img-about' />
              <div className='service-info'>
                <h4 className='small-title'>Mobile Developement</h4>
                <div className='text-block-3'>
                  Logo design, Brand guidelines, Social Media Graphics, Business
                  cards design.
                </div>
              </div>
            </div>
            <div
              className='col-12 col-sm-4 col-md-4 col-lg-4 mb-4'
              data-aos='fade-up'
              data-aos-delay>
              <Image src={base} alt='Image svg' className='img-about' />
              <div className='service-info'>
                <h4 className='small-title'>Deployement</h4>
                <div className='text-block-3'>
                  Logo design, Brand guidelines, Social Media Graphics, Business
                  cards design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
