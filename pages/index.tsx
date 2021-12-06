import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className='section site-portfolio'>
        <div className='container'>
          <div className='row mb-5 align-items-center'>
            <div className='col-md-12 col-lg-6 mb-4 mb-lg-0' data-aos='fade-up'>
              <h2>Hey, Im Mootassame Boughdiri</h2>
              <p className='mb-0'>
                Freelance Creative &amp; Professional Graphics Designer
              </p>
            </div>
            <div
              className='col-md-12 col-lg-6 text-start text-lg-end'
              data-aos='fade-up'
              data-aos-delay={100}>
              <div id='filters' className='filters'>
                <a href='#' data-filter='*' className='active'>
                  All
                </a>
                <a href='#' data-filter='.web'>
                  Web
                </a>
                <a href='#' data-filter='.design'>
                  Design
                </a>
                <a href='#' data-filter='.branding'>
                  Branding
                </a>
                <a href='#' data-filter='.photography'>
                  Photography
                </a>
              </div>
            </div>
          </div>
          <div
            id='portfolio-grid'
            className='row no-gutter'
            data-aos='fade-up'
            data-aos-delay={200}>
            <div className='item web col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Boxed Water</h3>
                  <span>Web</span>
                </div>
                <img className='img-fluid' src='assets/img/img_1.jpg' />
              </a>
            </div>
            <div className='item photography col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Build Indoo</h3>
                  <span>Photography</span>
                </div>
                <img className='img-fluid' src='assets/img/img_2.jpg' />
              </a>
            </div>
            <div className='item branding col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Cocooil</h3>
                  <span>Branding</span>
                </div>
                <img className='img-fluid' src='assets/img/img_3.jpg' />
              </a>
            </div>
            <div className='item design col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Nike Shoe</h3>
                  <span>Design</span>
                </div>
                <img className='img-fluid' src='assets/img/img_4.jpg' />
              </a>
            </div>
            <div className='item photography col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Kitchen Sink</h3>
                  <span>Photography</span>
                </div>
                <img className='img-fluid' src='assets/img/img_5.jpg' />
              </a>
            </div>
            <div className='item branding col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Amazon</h3>
                  <span>brandingn</span>
                </div>
                <img className='img-fluid' src='assets/img/img_6.jpg' />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End  Works Section */}
      {/* ======= Clients Section ======= */}
      <section className='section'>
        <div className='container'>
          <div className='row justify-content-center text-center mb-4'>
            <div className='col-5'>
              <h3 className='h3 heading'>My Clients</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-adobe.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-uber.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-apple.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-netflix.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-nike.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className='col-4 col-sm-4 col-md-2'>
              <a href='#' className='client-logo'>
                <img
                  src='assets/img/logo-google.png'
                  alt='Image'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Clients Section */}
      {/* ======= Services Section ======= */}
      <section className='section services'>
        <div className='container'>
          <div className='row justify-content-center text-center mb-4'>
            <div className='col-5'>
              <h3 className='h3 heading'>My Services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <i className='bi bi-card-checklist' />
              <h4 className='h4 mb-2'>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
              <ul className='list-unstyled list-line'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <li>Non pariatur nisi</li>
                <li>Magnam soluta quod</li>
                <li>Lorem ipsum dolor</li>
                <li>Cumque quae aliquam</li>
              </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <i className='bi bi-binoculars' />
              <h4 className='h4 mb-2'>Mobile Applications</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
              <ul className='list-unstyled list-line'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <li>Non pariatur nisi</li>
                <li>Magnam soluta quod</li>
                <li>Lorem ipsum dolor</li>
                <li>Cumque quae aliquam</li>
              </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <i className='bi bi-brightness-high' />
              <h4 className='h4 mb-2'>Graphic Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
              <ul className='list-unstyled list-line'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <li>Non pariatur nisi</li>
                <li>Magnam soluta quod</li>
                <li>Lorem ipsum dolor</li>
                <li>Cumque quae aliquam</li>
              </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <i className='bi bi-calendar4-week' />
              <h4 className='h4 mb-2'>SEO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                explicabo inventore.
              </p>
              <ul className='list-unstyled list-line'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <li>Non pariatur nisi</li>
                <li>Magnam soluta quod</li>
                <li>Lorem ipsum dolor</li>
                <li>Cumque quae aliquam</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* ======= Testimonials Section ======= */}
      <section className='section pt-0'>
        <div className='container'>
          <div
            className='testimonials-slider swiper'
            data-aos='fade-up'
            data-aos-delay={100}>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='testimonial-wrap'>
                  <div className='testimonial'>
                    <img
                      src='assets/img/person_1.jpg'
                      alt='Image'
                      className='img-fluid'
                    />
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </blockquote>
                    <p>— Jean Hicks</p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className='swiper-slide'>
                <div className='testimonial-wrap'>
                  <div className='testimonial'>
                    <img
                      src='assets/img/person_2.jpg'
                      alt='Image'
                      className='img-fluid'
                    />
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </blockquote>
                    <p>— Chris Stanworth</p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className='swiper-pagination' />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
