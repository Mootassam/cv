import type { NextPage } from "next";
import Image from "next/image";
import About from "/public/assets/img/about.png";

export const config = {
  unstable_runtimeJS: false,
};
const Home: NextPage = () => {
  return (
    <>
      ;
      <div className='section hero'>
        <div className='container'>
          <div className='hero-grid'>
            <div
              id='w-node-_11bd7f1d-1e14-ce29-7862-67340c38d12d-e6dd30bd'
              className='hero-image'>
              <img
                src='https://uploads-ssl.webflow.com/601435a68610222428247748/601435c2578f7c615c741163_DSC_6170.jpg'
                loading='lazy'
                sizes='(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 50vw'
                srcSet='https://uploads-ssl.webflow.com/601435a68610222428247748/601435c2578f7c615c741163_DSC_6170-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/601435a68610222428247748/601435c2578f7c615c741163_DSC_6170-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/601435a68610222428247748/601435c2578f7c615c741163_DSC_6170-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/601435a68610222428247748/601435c2578f7c615c741163_DSC_6170.jpg 2500w'
                alt='Mariela Lopez Photo'
                className='image-2'
                width={750}
                height={500}
              />
            </div>
            <div className='hero-message'>
              <div className='message-inner'>
                <h1 className='display-heading-one hero'>
                  Creativity
                  <br />
                  meets
                  <br />
                  Technology
                </h1>
                <div className='hero-blurb large-text'>
                  As a developer, my superpower happens behind the scenes to
                  make a website look great, work fast and perform well with a
                  seamless user experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section primary-background'>
        <img
          src='https://uploads-ssl.webflow.com/601435a68610222428247748/602422d0c8afbe1647786943_2.svg'
          loading='lazy'
          width={260}
          className='image-9'
        />
        <div className='container'>
          <div className='row center'>
            <div className='header-block'>
              <h2 className='large-heading'>
                The goal isn’t to build a website. The goal is to build your
                business.
              </h2>
              <div className='text-block-6'>
                More than just a website, I&nbsp;build a tool to increase sales,
                leads. A tool that will establish your online presence and make
                it easy for prospects to find your business. I don't just build
                websites, I&nbsp;create brand guidelines, design logos and build
                internal organizational apps using the Microsoft Platform.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <Image src={About} alt='Image Png' className='img-about' />
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
              <Image
                src={require("/public/assets/img/web_developement.png")}
                alt='Image Png'
                className='image-3'
              />

              <div className='service-info'>
                <h4 className='small-title'>Web Developement</h4>
                <div className='text-block-3'>
                  Developing a website includes also designing the layout, user
                  interface, defining the site's architecture and more.
                </div>
              </div>
            </div>
            <div
              className='col-12 col-sm-4 col-md-4 col-lg-4 mb-5'
              data-aos='fade-up'
              data-aos-delay>
              <Image
                src={require("/public/assets/img/mobile_developement.png")}
                alt='Image Png'
                className='image-3'
              />
              <div className='service-info'>
                <h4 className='small-title'>Mobile Developement</h4>
                <div className='text-block-3'>
                  Logo design, Brand guidelines, Social Media Graphics, Business
                  cards design.
                </div>
              </div>
            </div>
            <div
              className='col-12 col-sm-4 col-md-4 col-lg-4 mb-5'
              data-aos='fade-up'
              data-aos-delay>
              <Image
                src={require("/public/assets/img/data_base.png")}
                alt='Image Png'
                className='image-3'
              />
              <div className='service-info'>
                <h4 className='small-title'>Deployement</h4>
                <div className='text-block-3'>
                  Build end-to-end business solutions with power apps, power
                  automate (automated workflows) and power BI
                </div>
              </div>
            </div>
          </div>
          <p>
            <a className='readmore'>More About ME</a>
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
